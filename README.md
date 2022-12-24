# art-antd-react

### 基于 [Ant Design](https://ant-design.gitee.io/components/overview-cn/) 开发的配置化组件，旨在通过配置化开发、做更快更高效更快乐的做一个前端开发艺术家

何时使用该组件库：

- 配置化开发表单
- 配置化展示详情信息
- 通过 hooks 来开发模板页面
- 通过 hooks 来配置化表单弹框
- useRequest 请求数据自动 loading、处理 error、format 返回数据、手动自动请求数据
- 快速使用 antd 搭建一个 react demo（无需配置），开箱即用 antd 组件

### Description

从 1.1.0 到 以后的版本，antd 只要是无痛升级，本 library 也是无痛升级

#### 当前可供用的组件

- DetailPresent 详情呈现，配置化展示详情信息
- FormModal 常见的 Form Modal 操作，自动处理 loading 后在关闭弹框
- FormItemsBuilder 表单项构建器，快速生成表单项
- DetailPresent 详情呈现，快速的展示出想展示的信息
- FormGenerator 表单生成器，在表单项构建构造器的基础上封装了 提交，重置，折叠等功能
- antd 的所有组件均可从 本组件中导出(这意味着用 antd demo 的时候只需要安装这个包即可，哈哈 )

#### 提供的 hooks

- useConfigListPage 列表配置页 hooks (支持搜索，table 展示，自动 loading)
- useFormModal 表单弹框 hooks （提交时 loading，提交后请求数据, 成功则关闭 modal，否则弹框仍然打开）
- useRequest 请求时 自动 loading，error 监控，格式化请求到的数据，成功提示

#### 官网 & 仓库地址

> 如果官网暂时不能访问，直接看 Started 的 demo 搭建应用，hooks 可以 clone 本仓库后本地看 demo ^\_&

Gitee：

- [art-antd-react gitee 官网](https://quankehao.gitee.io/art-antd-react) 国内的访问此链接较快

- [art-antd-react repository 地址](https://gitee.com/quankehao/art-antd-react/pages)

github:

- [art-antd-react GitHub 官网](https://oneqorg.github.io/art-antd-react/)

- [art-antd-react GitHub repository 地址](https://github.com/oneQorg/art-antd-react)

### Getting Started

```shell
npm i art-antd-react
# or
yarn add art-antd-react

# 在入口引入以下文件(这是antd的默认主题样式，如果要引入其他主题样式可以在项目中按照 https://ant-design.gitee.io/docs/react/use-with-create-react-app-cn 覆盖即可)
import "art-antd-react/dist/esm/styles/defaultAntdCss.css"

```

# FormItemsBuilder 表单项构建器

FormItemsBuilder 的目的是使用配置化的思想来帮助我们快速的生成 Form.Item 和其 Children 的标签，但建议只有必须要把 Form.Item 分组之类的场景时才使用该组件,如 [demo2](/components/form-items-builder#自定义布局和其他标签的使用)，否则建议使用 [FormGenerator](/components/form-generator) ,如果要单独使用则和 [Form](https://ant-design.gitee.io/components/form-cn/) 组件搭配使用

### 基本使用

```tsx
// 这些组件或者 Props API 也可以从 antd 或者 art-antd-react 中导出
// import {
//   Button,
//   Col,
//   Form,
//   InputNumberProps,
//   InputProps,
//   Row,
//   SelectProps,
// } from "antd";

import {
  Button,
  Col,
  Form,
  FormItemConfig,
  FormItemsBuilder,
  InputNumberProps,
  InputProps,
  RenderType,
  Row,
  SelectProps,
} from 'art-antd-react'; // 内部也将 antd 的直接导出组件和props 导出了

const Demo1 = () => {
  const [form] = Form.useForm();

  const mockOptions = [
    {
      label: 'mock1',
      value: 'mock1',
    },
    {
      label: 'mock2',
      value: 'mock2',
    },
    {
      label: 'mock3',
      value: 'mock3',
    },
  ];

  const formItemsConfig: FormItemConfig[] = [
    {
      renderType: RenderType.Input,
      formItemProps: {
        name: 'name',
        label: '姓名',
      },
      formItemChildProps: {
        placeholder: '请输入名字',
      } as InputProps,
    },
    {
      renderType: RenderType.Select,
      formItemProps: {
        name: 'hobby',
        label: '爱好',
      },
      formItemChildProps: {
        placeholder: '请选择',
        options: mockOptions,
      } as SelectProps,
    },
    {
      renderType: RenderType.InputNumber,
      formItemProps: {
        name: 'number',
        label: '年龄',
      },
      formItemChildProps: {
        placeholder: '请输入数字',
        // 类名 style 等都可以直接写成 key-value 的形式
        style: { width: '100%' },
        // 当需要提示或者静态检查时推荐使用 ts 的 as 断言
      } as InputNumberProps,
    },
  ];

  return (
    <Form
      form={form}
      onFinish={(value: Record<string, unknown>) => {
        console.log('demo1 values: ', value);
      }}
    >
      <Row gutter={18}>
        {/* FormItemsBuilder 自带 Col 布局, 因此有时候传递的 colProps/itemProps 不ok时，或许需要加一个 Row 包裹 FormItemsBuilder */}
        <FormItemsBuilder colProps={{ span: 6 }} formItemsConfig={formItemsConfig} />
        <Col span={6}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Demo1;
```
