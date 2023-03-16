---
title: changelog
path: /about
order: 2
---

### 更改日志记录

> 说明： 在 1.8.5 之前该 package 均不是稳定版本，因此在 1.0.0 版本之前均可以无破坏性升级到 1.8.5 版本，如果后边有破坏性的改变该 更改日志将会使用文字说明,若无说明则无新特性或破坏性改变（会尽量避免破坏性的改变）

#### version 1.8.10

- 解决上一版本 demo 时出现 `Uncaught TypeError: dispatcher.useId is not a function`
- 升级 antd 版本到 5.x
- `FormModal` 和 `useFormModal` 新增 `footerRender` props
- `useRequest` 将 lazyService 的结果通过 使用 Promise 包裹 传出，这样 data 和 lazyService 调用后都可以得到 request 返回的结果啦

#### version 1.8.9 细节优化，无 feat 功能

#### version 1.8.8

- `useConfigListPage` 新增一个 `headBar`, 目的是为了增加页面 header 部分的灵活性配置, 重构了内部逻辑，使得修改分页时携带搜索数据给请求接口

#### version 1.8.7

- 将 FormModal 改成了 `FormModal`，即 表单弹框
- 升级 antd, 紧跟 antd 的升级，咱不掉队!
- `useRequest` 新增一个 `formaResult`, 目的是为了解决 分页 和 渲染数据，避免请求的后端接口不是标准的渲染数据

#### version 1.8.6

- 新增 `FormModal` 组件，这个组件可以帮我们自动 loading 保存按钮，避免我们重复性的对每个 modal 在进行表单新增或更新的时候进行 loading 处理, `FormModal` 的 children 只能是 Form 表单组件
