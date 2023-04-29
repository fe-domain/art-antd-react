---
title: SendingBtn
path: /components
---

## SendingBtn 发送按钮

是基于 antd 的 [Button 按钮](https://ant.design/components/button-cn) 的二次封装，目的是为了更适应我们业务中常见的发送验证码等限时节流等常见操作

## 何时使用

常见的需要设置操作时长，比如 30s 内不允许用户重复点击 发送验证码，节约带宽，合理请求

## 代码演示

### 基本使用

<code src="../demos/SendingBtnDemo1.tsx"  title="最基本的使用，其他属性请查看 API"></code>

## API

说明： 该组件是基于 antd 的 [Button](https://ant.design/components/button-cn#api) 来封装的，故其 API 都可以透传给 本组件的 props

| 参数             | 说明                     | 类型                                        | 默认值                         |
| ---------------- | ------------------------ | ------------------------------------------- | ------------------------------ |
| immediate        | 是否点击的时候就开始计时 | boolean                                     | true                           |
| totalDisableTime | 总共的禁用的时长、单位 s | number                                      | 60                             |
| setSendingConent | 设置剩余时间内渲染的内容 | (remainderTime: number) => React.ReactNode; | `${remainderTime}s 后重新发送` |
