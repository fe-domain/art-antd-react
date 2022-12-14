import { ColProps, RowProps } from 'antd';
import { FormInstance } from 'antd/es/form/Form';
import React from 'react';
import { FormItemConfig } from '../../FormItemsBuilder';
import { ListTemplateProps } from '../../ListTemplate';
import { OptionConfig, RequestService } from '../useRequest';
export interface ConfigListPageParameter<Res, Param> extends Omit<ListTemplateProps, 'searchBarProps'>, OptionConfig<Param, Res> {
    queryListService: RequestService<Param>;
    formatSubmitValue?: (formValue: Param) => Param;
    formaResult: (res: any) => Res;
    searchForm?: FormInstance;
    formItemsConfig?: FormItemConfig[];
    actionColProps?: ColProps;
    colProps?: ColProps;
    rowProps?: RowProps;
    headBar?: React.ReactNode;
}
export declare const useConfigListPage: <Res extends {
    dataSource?: any[] | undefined;
    total?: number | undefined;
} = any, Param = any>({ headBar, colProps, rowProps, spaceProps, tableProps, defaulParams, actionColProps, tableCardProps, formItemsConfig, searchForm, onError, onSuccess, formaResult, queryListService, formatSubmitValue, }: ConfigListPageParameter<Res, Param>) => {
    listContainer: JSX.Element;
    error: Error | undefined;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    total: number;
    loading: boolean;
    dataSource: never[] | (Res & any[]);
    queryList: (params?: Param | undefined) => void;
    pageInfo: {
        pageNo: number;
        pageSize: number;
    };
};
