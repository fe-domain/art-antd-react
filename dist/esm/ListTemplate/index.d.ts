import React from 'react';
import { CardProps, SpaceProps, TableProps } from 'antd';
import { FormGeneratorProps } from '../FormGenerator';
export interface ListTemplateProps<TableRecord = any> {
    headBar?: React.ReactNode;
    spaceProps?: SpaceProps;
    tableProps: TableProps<TableRecord>;
    tableCardProps?: CardProps;
    searchBarProps?: FormGeneratorProps;
    searchCardProps?: CardProps;
}
export declare const ListTemplate: <T extends Record<string, unknown> = Record<string, unknown>>({ headBar, tableProps, searchBarProps, searchCardProps, tableCardProps, spaceProps, }: ListTemplateProps<T>) => JSX.Element;
