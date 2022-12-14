import { ColProps, Form, message, RowProps, TableProps } from 'antd';
import { FormInstance } from 'antd/es/form/Form';
import React, { useState } from 'react';
import { useMemo } from 'react';
import { FormItemConfig } from '../../FormItemsBuilder';
import { ListTemplate, ListTemplateProps } from '../../ListTemplate';
import { OptionConfig, RequestService, useRequest } from '../useRequest';

export interface ConfigListPageParameter<Res, Param>
  extends Omit<ListTemplateProps, 'searchBarProps'>,
    OptionConfig<Param, Res> {
  queryListService: RequestService<Param>;
  formatSubmitValue?: (formValue: Param) => Param;
  formaResult: (res: any) => Res;
  searchForm?: FormInstance;
  // 搜索表单的配置项
  formItemsConfig?: FormItemConfig[];
  // 操作栏的的 col 布局， 和 antd 的 Col API 相同，优先级高于 colProps
  actionColProps?: ColProps;
  // 公共的 col 布局， 和 antd 的 Col API 相同
  colProps?: ColProps;
  // 公共的 rowProps 布局， 和 antd 的 Row API 相同
  rowProps?: RowProps;
  // headBar
  headBar?: React.ReactNode;
}

const PageInfoInit = {
  pageNo: 1,
  pageSize: 10,
};

export const useConfigListPage = <
  Res extends { dataSource?: any[]; total?: number } = any,
  Param = any,
>({
  headBar,
  colProps,
  rowProps,
  spaceProps,
  tableProps,
  defaulParams,
  actionColProps,
  tableCardProps,
  formItemsConfig = [],
  searchForm,
  onError,
  onSuccess,
  formaResult,
  queryListService,
  formatSubmitValue,
}: ConfigListPageParameter<Res, Param>) => {
  const [pageInfo, setPageInfo] = useState(PageInfoInit);
  const [form] = Form.useForm(searchForm);

  const {
    loading,
    data,
    lazyService: queryList,
    ...rest
  } = useRequest(queryListService, {
    defaulParams,
    onSuccess(value) {
      onSuccess?.(value);
    },
    onError(error) {
      if (onError) {
        onError(error);
      } else {
        message.error('请求列表数据出错');
      }
    },
    formaResult,
  });

  const { dataSource, total } = (data || {}) as { dataSource: Res; total: number };
  const list = dataSource && Array.isArray(dataSource) ? dataSource : [];
  const { pagination } = tableProps || {};

  const queryListByFilter = (filterValues: Param) => {
    const values = formatSubmitValue ? formatSubmitValue(filterValues) : filterValues;
    queryList(values as Param);
  };

  const currentPagination: TableProps<Res>['pagination'] =
    typeof pagination === 'object'
      ? {
          pageSize: pageInfo.pageSize,
          current: pageInfo.pageNo,
          ...pagination,
          total,
          onChange(pageNo, pageSize) {
            const currentPageInfo = {
              pageSize,
              pageNo,
            };

            setPageInfo(currentPageInfo);
            if (typeof pagination.onChange === 'function') {
              pagination?.onChange(pageNo, pageSize);
              const formValues = form.getFieldsValue();

              queryListByFilter({
                ...currentPageInfo,
                ...formValues,
              });
            }
          },
        }
      : pagination;

  const listContainer = useMemo(() => {
    return (
      <ListTemplate
        headBar={headBar}
        tableProps={{
          ...tableProps,
          loading,
          dataSource: list,
          pagination: currentPagination,
        }}
        tableCardProps={tableCardProps}
        spaceProps={spaceProps}
        searchBarProps={{
          form,
          colProps,
          rowProps,
          actionColProps,
          formItemsConfig,
          onFinish: (searchValue) => {
            queryListByFilter({
              ...searchValue,
              ...PageInfoInit,
            });
          },
          onReset: () => {
            queryList(defaulParams);
          },
        }}
      />
    );
  }, [headBar, spaceProps, tableProps, tableCardProps, formItemsConfig]);

  return {
    total,
    loading,
    dataSource: list,
    queryList,
    pageInfo,
    ...rest,
    listContainer,
  };
};
