import { Descriptions, DescriptionsProps } from 'antd';
import { DescriptionsItemProps } from 'antd/lib/descriptions/Item';

import React, { useMemo } from 'react';

export interface DetailPresentProps<
  D extends Record<string, any> = Record<string, any>,
> extends DescriptionsProps {
  // 要展示的详情对象
  detail: Record<keyof D, any>;
  // 指定详情的 key 展示的 label 描述
  keyMapLabel: Record<string, React.ReactNode>;
  // 详情 key 的单独 布局，参考 https://ant-design.gitee.io/components/descriptions-cn/#DescriptionItem
  keyMapItemProps?: Partial<
    Record<keyof D, Omit<DescriptionsItemProps, 'label' | 'children'>>
  >;
  // 当对应的 detail 的 key 的对应的 value 为空的时候的占位符
  placeholder?: React.ReactNode;
  // 是否过滤掉 undefined 或者 null 的 label 显示
  filterNil?: boolean;
}

export const isNil = (v: any) => v === undefined || v === null;

export const DetailPresent = <
  D extends Record<string, any> = Record<string, any>,
>({
  detail = {} as D,
  placeholder,
  keyMapLabel,
  keyMapItemProps,
  filterNil,
  ...descriptionProps
}: DetailPresentProps<D>) => {
  const labelKeys = useMemo(() => {
    const mapKeys = Object.keys(keyMapLabel || {});

    return filterNil ? mapKeys.filter((k) => !isNil(detail[k])) : mapKeys;
  }, [filterNil, keyMapLabel, detail]);

  return (
    <Descriptions {...descriptionProps}>
      {labelKeys.map((key) => {
        const itemConfig = {
          ...(keyMapItemProps?.[key] || {}),
          label: keyMapLabel[key],
        };

        return (
          keyMapLabel[key] && (
            <Descriptions.Item key={key} {...itemConfig}>
              <>{detail[key] ?? placeholder}</>
            </Descriptions.Item>
          )
        );
      })}
    </Descriptions>
  );
};
