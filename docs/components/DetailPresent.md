---
title: DetailPresent
path: /components
order: 3
---

## DetailPresent 详情陈述

是基于 antd 的 [Descriptions 描述列表](https://ant-design.gitee.io/components/descriptions-cn/#components-descriptions-demo-basic) 的二次封装，但是 本组件 仅需要 通过配置 key 来展现的对应的 label(必选), 让开发者更快的开发，享受 job

## 何时使用

常见于详情页的信息展示, 配置即显示，显示的顺序根据 keyMapLabel 的配置顺序来展示(准确来说是根据 Object.keys(keyMapLabel) 来展示 label 和其对应的 value)

## 代码演示

### 基本使用

<code src="../demos/DetailPresentDemo1.tsx"  title="根据获取的信息，配置上label的映射即可快速显示"></code>

### 自定义某个项的 布局

<code src="../demos/DetailPresentDemo2.tsx"  title="使用 keyMapItemProps 来映射某项布局, 使用 filterNil 过滤没有值的 label"></code>

## API

说明： 该组件是基于 antd 的 [Description](https://ant-design.gitee.io/components/descriptions-cn/#Descriptions) 来封装的，故其 API 都可以透传给 本组件的 props

| 参数            | 说明                                                                                                                             | 类型                                                                                            | 默认值 |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ------ |
| detail          | 要展示的详情对象                                                                                                                 | Record<string,any>                                                                              | -      |
| keyMapLabel     | 根据 key 来映射 出 label，这个配置决定了显示的顺序                                                                               | Record<string,React.ReactNode>                                                                  | -      |
| keyMapItemProps | 映射 单独项的布局 value 的类型为 [DescriptionItemProps](https://ant-design.gitee.io/components/descriptions-cn/#DescriptionItem) | [DescriptionItemProps](https://ant-design.gitee.io/components/descriptions-cn/#DescriptionItem) | -      |
| placeholder     | 空值的占位符                                                                                                                     | React.ReactNode                                                                                 | -      |
| filterNil       | 当设置为 `true` 的时候 不会展示 `undefined` 或 `null` 的 label 和对应的值,优先级高于 `placeholder`                               | boolean                                                                                         | -      |
