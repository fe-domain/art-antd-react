import React from 'react';
import { Card, CardProps, Space, SpaceProps, Table, TableProps } from 'antd';
import { FormGenerator, FormGeneratorProps } from '../FormGenerator';

export interface ListTemplateProps<TableRecord = any> {
  // 模板页面 header 
  headBar?:React.ReactNode;
  // space 的props
  spaceProps?: SpaceProps;
  // Table 的配置项
  tableProps: TableProps<TableRecord>;
  // 包裹 Table 的 Card 的配置项
  tableCardProps?: CardProps;
  // 搜索表单的配置项
  searchBarProps?: FormGeneratorProps;
  // 包裹 搜索表单 的 Card 的配置项
  searchCardProps?: CardProps;
}

export const ListTemplate = <T extends Record<string, unknown> = Record<string, unknown>>({
  headBar,
  tableProps,
  searchBarProps,
  searchCardProps,
  tableCardProps,
  spaceProps,
}: ListTemplateProps<T>) => {
  const wrapConfig: SpaceProps = {
    direction: 'vertical',
    style: { width: '100%' },
    ...(spaceProps || {}),
  };
  const searchConfig: FormGeneratorProps = {
    showSubmit: true,
    showRest: true,
    ...(searchBarProps || { formItemsConfig: [] }),
  };

  const tableCardConfig: CardProps = {
    style: { marginTop: 16 },
    ...tableCardProps,
  };

  return (
    <Space {...wrapConfig}>
      {headBar}
      <Card {...(searchCardProps || {})}>
        <FormGenerator {...searchConfig} />
      </Card>

      <Card {...tableCardConfig}>
        <Table {...tableProps} />
      </Card>
    </Space>
  );
};
