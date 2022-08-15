(self['webpackChunkart_antd_react'] = self['webpackChunkart_antd_react'] || []).push([
  [275],
  {
    22231: function (n, e, t) {
      'use strict';
      t.d(e, {
        m: function () {
          return r.m;
        },
      });
      var r = t(9684);
      t(72255);
    },
    92950: function (n, e, t) {
      'use strict';
      t.r(e),
        t.d(e, {
          default: function () {
            return v;
          },
        });
      var r = t(13378),
        o = t(67294),
        a = JSON.parse(
          '{"menus":{"en-US":{"*":[{"path":"/","title":"\ud83c\udf08 Hello art-antd-react!","meta":{}}],"/components":[{"path":"/components/detail-present","title":"DetailPresent \u8be6\u60c5\u9648\u8ff0","meta":{}},{"path":"/components/form-generator","title":"FormGenerator \u8868\u5355\u751f\u6210\u5668","meta":{}},{"path":"/components/form-items-builder","title":"FormItemsBuilder \u8868\u5355\u9879\u6784\u5efa\u5668","meta":{}},{"path":"/components/list-template","title":"ListTemplate \u5217\u8868\u6a21\u677f","meta":{}}],"/hooks":[{"path":"/hooks/use-config-list-page","title":"useConfigListPage","meta":{}},{"path":"/hooks/use-form-modal","title":"useFormModal","meta":{}},{"path":"/hooks/use-request","title":"useRequest","meta":{}}]}},"locales":[{"name":"en-US","label":"English"}],"navs":{"en-US":[{"title":"components","path":"/components"},{"title":"hooks","path":"/hooks"},{"title":"Gitee","path":"https://gitee.com/quankehao/art-antd-react"},{"title":"GitHub","path":"https://github.com/Kehao33/art-antd-react"}]},"title":"art-antd-react","logo":"/icons/logo.png","mode":"site","repository":{"url":"https://github.com/Kehao33/art-antd-react","branch":"master"},"theme":{},"exportStatic":{}}',
        ),
        s = t(99829),
        m = t(68699),
        i = t(60535),
        l =
          "import React from 'react';\nimport { DetailPresent } from 'art-antd-react';\n\nconst Demo1 = () => {\n  const responseData = {\n    user: '\u5f20\u826f',\n    age: '88',\n    hobby: ['\u8c0b\u7565', '\u5175\u6cd5', '\u8bc6\u4eba'],\n    state: '\u4e2d\u56fd-\u6c49\u671d',\n    sex: '\u7537',\n    friend: {\n      user: '\u97e9\u975e\u5b50',\n    },\n  };\n\n  const keyMapLabel = {\n    user: '\u59d3\u540d',\n    age: '\u5e74\u9f84',\n    sex: '\u6027\u522b',\n    state: '\u56fd\u7c4d',\n    hobby: '\u7231\u597d',\n    friend: '\u670b\u53cb',\n  };\n\n  return (\n    <DetailPresent\n      title=\"\u8c0b\u5723\u4fe1\u606f\"\n      detail={{\n        ...responseData,\n        friend: responseData.friend.user,\n      }}\n      keyMapLabel={keyMapLabel}\n    />\n  );\n};\n\nexport default Demo1;",
        p =
          "import React from 'react';\nimport { DetailPresent } from 'art-antd-react';\n\nconst Demo1 = () => {\n  const responseData = {\n    user: '\u5f20\u826f',\n    age: '88',\n    hobby: ['\u8c0b\u7565', '\u5175\u6cd5', '\u8bc6\u4eba'],\n    state: '\u4e2d\u56fd-\u6c49\u671d',\n    sex: '\u7537',\n    other: null,\n    friend: {\n      user: '\u97e9\u975e\u5b50',\n    },\n    sketch: '\u5f20\u826f\uff08\uff1f\u2014\u524d186\u5e74\uff09\uff0c\u5b57\u5b50\u623f\uff0c\u4e00\u8bf4\u988d\u5ddd\u57ce\u7236\uff08\u4eca\u6cb3\u5357\u90cf\u53bf\uff09\u4eba',\n  };\n\n  const keyMapLabel = {\n    user: '\u59d3\u540d',\n    age: '\u5e74\u9f84',\n    sex: '\u6027\u522b',\n    sketch: '\u6765\u81ea\u767e\u5ea6\u767e\u79d1\u4ecb\u7ecd',\n    state: '\u56fd\u7c4d',\n    hobby: '\u7231\u597d',\n    friend: '\u670b\u53cb',\n    other: '\u5176\u4ed6',\n  };\n\n  return (\n    <DetailPresent<typeof responseData>\n      title=\"\u8c0b\u5723\u4fe1\u606f\"\n      detail={{\n        ...responseData,\n        friend: responseData.friend.user,\n        hobby: responseData.hobby.join('\u3001'),\n\n        sketch: (\n          <a\n            target=\"_blank\"\n            rel=\"noreferrer\"\n            href=\"https://baike.baidu.com/item/%E5%BC%A0%E8%89%AF/6658?fr=aladdin\"\n          >\n            {responseData.sketch}\n          </a>\n        ),\n      }}\n      // \u503c\u4e3a\u7a7a\u7684\u65f6\u5019\u7684\u5360\u4f4d\u7b26\n      placeholder=\"-\"\n      keyMapLabel={keyMapLabel}\n      // \u81ea\u5b9a\u4e49\u6bcf\u4e00\u9879\u5355\u72ec\u7684\u914d\u7f6e\n      keyMapItemProps={{\n        sketch: {\n          labelStyle: { color: '#f00' },\n          // \u72ec\u53603\u5217\n          span: 3,\n        },\n      }}\n    />\n  );\n};\n\nexport default Demo1;",
        d =
          "import React from 'react';\nimport { Form, InputProps } from 'antd';\nimport { FormItemConfig, RenderType, FormGenerator } from 'art-antd-react';\n//  \u5b89\u88dd\u4e86 art-antd-react \u4ee5\u540e antd \u76f4\u63a5\u5bfc\u51fa\u7684 \u7c7b\u578b\u6216\u7ec4\u4ef6 \u53ef\u4ee5\u76f4\u63a5\u4ece art-antd-react \u4e2d\u5bfc\u51fa\n// import { FormItemConfig, RenderType, FormGenerator, Form, InputProps } from 'art-antd-react';\n\nconst Demo1 = () => {\n  const [form] = Form.useForm();\n\n  const formItemsConfig: FormItemConfig[] = Array(11)\n    .fill({})\n    .map((_, index) => ({\n      renderType: RenderType.Input,\n      formItemProps: {\n        name: `label${index}`,\n        label: `label${index}`,\n      },\n      formItemChildProps: {\n        placeholder: `please input label${index}`,\n      } as InputProps,\n    }))\n    .map(({ formItemChildProps, ...rest }) => ({\n      ...rest,\n      formItemChildProps: {\n        style: { width: '100%' },\n        ...formItemChildProps,\n      },\n    }));\n\n  return (\n    <FormGenerator\n      form={form}\n      showRest\n      showExpend\n      showSubmit\n      // \u6536\u8d77\u7684\u65f6\u5019 \u53ea\u5c55\u793a 5 \u4e2a\u8868\u5355\u9879\n      foldNumber={5}\n      onFinish={(v: Record<string, unknown>) => {\n        console.log('Formgenerator demo1 values: ', v);\n      }}\n      colProps={{ span: 8 }}\n      rowProps={{ gutter: 64 }}\n      formItemsConfig={formItemsConfig}\n    />\n  );\n};\n\nexport default Demo1;",
        c =
          "import React from 'react';\nimport { Button, Form, Input, SelectProps, Space, TimeRangePickerProps } from 'antd';\nimport { FormItemConfig, FormGenerator, RenderType } from 'art-antd-react';\n//  \u5b89\u88dd\u4e86 art-antd-react \u4ee5\u540e antd \u76f4\u63a5\u5bfc\u51fa\u7684 \u7c7b\u578b\u6216\u7ec4\u4ef6 \u53ef\u4ee5\u76f4\u63a5\u4ece art-antd-react \u4e2d\u5bfc\u51fa\n// import { FormItemConfig, FormGenerator, RenderType, Button, Form, Input, SelectProps, Space, TimeRangePickerProps } from 'art-antd-react';\n\nconst Demo2 = () => {\n  const [form] = Form.useForm();\n\n  const mockOptions = [\n    {\n      label: 'mock1',\n      value: 'mock1',\n    },\n    {\n      label: 'mock2',\n      value: 'mock2',\n    },\n  ];\n  const formItemsConfig: FormItemConfig[] = [\n    {\n      renderType: RenderType.Switch,\n      itemColProps: { span: 4 },\n      formItemProps: {\n        // resolve warning\n        valuePropName: 'checked',\n        name: 'label5',\n        label: 'label5',\n      },\n    },\n    {\n      renderType: RenderType.RadioGroup,\n      itemColProps: { span: 10 },\n      formItemProps: {\n        name: 'label7',\n        label: 'label7',\n        wrapperCol: { span: 24 },\n      },\n      formItemChildProps: {\n        // \u7c7b\u540d style \u7b49\u90fd\u53ef\u4ee5\u76f4\u63a5\u5199\u6210 key-value \u7684\u5f62\u5f0f\n        style: { width: '100%' },\n        options: mockOptions,\n      },\n    },\n    {\n      // \u4f7f\u7528CustomItemChildren \u53ef\u4ee5\u81ea\u5b9a\u4e49 Form.Item \u7684 children\n      renderType: RenderType.CustomItemChildren,\n      itemColProps: { span: 24 },\n      formItemProps: {\n        label: 'label8',\n      },\n      customItemChildren: (\n        <Form.List name=\"label8\">\n          {(fields, { add, remove }) => (\n            <>\n              {fields.map(({ key, name, ...restField }) => (\n                <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align=\"baseline\">\n                  <Form.Item\n                    {...restField}\n                    name={[name, 'first']}\n                    rules={[{ required: true, message: 'Missing first name' }]}\n                  >\n                    <Input placeholder=\"First Name\" />\n                  </Form.Item>\n                  <Button type=\"link\" onClick={() => remove(name)}>\n                    \u5220\u9664\n                  </Button>\n                </Space>\n              ))}\n              <Form.Item>\n                <Button type=\"dashed\" onClick={() => add()}>\n                  + Add field\n                </Button>\n              </Form.Item>\n            </>\n          )}\n        </Form.List>\n      ),\n    },\n    {\n      renderType: RenderType.Input,\n      key: '1',\n      formItemProps: {\n        name: 'label1',\n        label: 'label1',\n      },\n      formItemChildProps: {\n        placeholder: '\u8bf7\u8f93\u5165\u540d\u5b57',\n      },\n    },\n    {\n      renderType: RenderType.Select,\n      formItemProps: {\n        name: 'label2',\n        label: 'label2',\n      },\n      formItemChildProps: {\n        placeholder: '\u8bf7\u9009\u62e9',\n        options: mockOptions,\n      } as SelectProps,\n    },\n    {\n      renderType: RenderType.Slider,\n      key: '3',\n      formItemProps: {\n        name: 'label3',\n        label: 'label3',\n      },\n    },\n    {\n      renderType: RenderType.TimeRangePicker,\n      key: '4',\n      // itemColProps \u7684\u4f18\u5148\u7ea7 \u5927\u4e8e colProps \u7684\u4f18\u5148\u7ea7\n      itemColProps: { span: 24 },\n      formItemProps: {\n        name: 'label4',\n        label: 'label4',\n      },\n      formItemChildProps: {\n        // \u7c7b\u540d style \u7b49\u90fd\u53ef\u4ee5\u76f4\u63a5\u5199\u6210 key-value \u7684\u5f62\u5f0f\n        onChange: (v) => {\n          console.log('v', v);\n        },\n        // \u5f53\u9700\u8981\u63d0\u793a\u6216\u8005\u9759\u6001\u68c0\u67e5\u65f6\u63a8\u8350\u4f7f\u7528 ts \u7684 as \u65ad\u8a00\n      } as TimeRangePickerProps,\n    },\n  ].map(({ formItemChildProps, formItemProps, ...rest }) => ({\n    ...rest,\n    formItemProps: {\n      ...formItemProps,\n      wrapperCol: { span: 24 },\n    },\n    formItemChildProps: {\n      ...(formItemChildProps || {}),\n      style: { width: '100%' },\n    },\n  }));\n\n  return (\n    <FormGenerator\n      form={form}\n      showSubmit\n      onFinish={(v: Record<string, unknown>) => {\n        console.log('Formgenerator demo2 values: ', v);\n      }}\n      colProps={{ span: 8 }}\n      rowProps={{ gutter: 20 }}\n      showExpend\n      formItemsConfig={formItemsConfig}\n      actionColProps={{ span: 24 }}\n      actionBar={\n        <Button type=\"primary\" onClick={() => form.submit()}>\n          \u4fdd\u5b58\n        </Button>\n      }\n    />\n  );\n};\n\nexport default Demo2;",
        u =
          "import React from 'react';\nimport { Button, Col, Form, InputNumberProps, InputProps, Row, SelectProps } from 'antd';\nimport { FormItemsBuilder, FormItemConfig, RenderType } from 'art-antd-react';\n//  \u5b89\u88dd\u4e86 art-antd-react \u4ee5\u540e antd \u76f4\u63a5\u5bfc\u51fa\u7684 \u7c7b\u578b\u6216\u7ec4\u4ef6 \u53ef\u4ee5\u76f4\u63a5\u4ece art-antd-react \u4e2d\u5bfc\u51fa\n// import { FormItemsBuilder, FormItemConfig, RenderType,Button, Col, Form, InputNumberProps, InputProps, Row, SelectProps } from 'art-antd-react';\n\nconst Demo1 = () => {\n  const [form] = Form.useForm();\n\n  const mockOptions = [\n    {\n      label: 'mock1',\n      value: 'mock1',\n    },\n    {\n      label: 'mock2',\n      value: 'mock2',\n    },\n    {\n      label: 'mock3',\n      value: 'mock3',\n    },\n  ];\n\n  const formItemsConfig: FormItemConfig[] = [\n    {\n      renderType: RenderType.Input,\n      formItemProps: {\n        name: 'name',\n        label: '\u59d3\u540d',\n      },\n      formItemChildProps: {\n        placeholder: '\u8bf7\u8f93\u5165\u540d\u5b57',\n      } as InputProps,\n    },\n    {\n      renderType: RenderType.Select,\n      formItemProps: {\n        name: 'hobby',\n        label: '\u7231\u597d',\n      },\n      formItemChildProps: {\n        placeholder: '\u8bf7\u9009\u62e9',\n        options: mockOptions,\n      } as SelectProps,\n    },\n    {\n      renderType: RenderType.InputNumber,\n      formItemProps: {\n        name: 'number',\n        label: '\u5e74\u9f84',\n      },\n      formItemChildProps: {\n        placeholder: '\u8bf7\u8f93\u5165\u6570\u5b57',\n        // \u7c7b\u540d style \u7b49\u90fd\u53ef\u4ee5\u76f4\u63a5\u5199\u6210 key-value \u7684\u5f62\u5f0f\n        style: { width: '100%' },\n        // \u5f53\u9700\u8981\u63d0\u793a\u6216\u8005\u9759\u6001\u68c0\u67e5\u65f6\u63a8\u8350\u4f7f\u7528 ts \u7684 as \u65ad\u8a00\n      } as InputNumberProps,\n    },\n  ];\n  return (\n    <Form\n      form={form}\n      onFinish={(value: Record<string, unknown>) => {\n        console.log('demo1 values: ', value);\n      }}\n    >\n      <Row gutter={18}>\n        {/* FormItemsBuilder \u81ea\u5e26 Col \u5e03\u5c40 */}\n        <FormItemsBuilder colProps={{ span: 6 }} formItemsConfig={formItemsConfig} />\n        <Col span={6}>\n          <Button type=\"primary\" htmlType=\"submit\">\n            \u63d0\u4ea4\n          </Button>\n        </Col>\n      </Row>\n    </Form>\n  );\n};\n\nexport default Demo1;",
        f =
          "import React from 'react';\nimport { SliderBaseProps } from 'antd/lib/slider';\nimport { Button, Card, Col, Form, Row, SelectProps, TimeRangePickerProps } from 'antd';\nimport { FormItemsBuilder, FormItemConfig, RenderType } from 'art-antd-react';\n\nconst Demo2 = () => {\n  const [form] = Form.useForm();\n\n  const mockOptions = [\n    {\n      label: 'mock1',\n      value: 'mock1',\n    },\n    {\n      label: 'mock2',\n      value: 'mock2',\n    },\n  ];\n\n  const group1FormItems: FormItemConfig[] = [\n    {\n      renderType: RenderType.Input,\n      key: '1',\n      formItemProps: {\n        name: 'label1',\n        label: 'label1',\n      },\n      formItemChildProps: {\n        placeholder: '\u8bf7\u8f93\u5165\u540d\u5b57',\n      },\n    },\n    {\n      renderType: RenderType.Select,\n      key: '2',\n      formItemProps: {\n        name: 'label2',\n        label: 'label2',\n      },\n      formItemChildProps: {\n        placeholder: '\u8bf7\u9009\u62e9',\n        options: mockOptions,\n      } as SelectProps,\n    },\n    {\n      renderType: RenderType.Slider,\n      key: '3',\n      formItemProps: {\n        name: 'label3',\n        label: 'label3',\n      },\n      formItemChildProps: {\n        // \u7c7b\u540d style \u7b49\u90fd\u53ef\u4ee5\u76f4\u63a5\u5199\u6210 key-value \u7684\u5f62\u5f0f\n        style: { width: '100%' },\n        // \u5f53\u9700\u8981\u63d0\u793a\u6216\u8005\u9759\u6001\u68c0\u67e5\u65f6\u63a8\u8350\u4f7f\u7528 ts \u7684 as \u65ad\u8a00\n      } as SliderBaseProps,\n    },\n    {\n      renderType: RenderType.TimeRangePicker,\n      key: '4',\n      // itemColProps \u7684\u4f18\u5148\u7ea7 \u5927\u4e8e colProps \u7684\u4f18\u5148\u7ea7\n      itemColProps: { span: 24 },\n      formItemProps: {\n        name: 'label4',\n        label: 'label4',\n      },\n      formItemChildProps: {\n        // \u7c7b\u540d style \u7b49\u90fd\u53ef\u4ee5\u76f4\u63a5\u5199\u6210 key-value \u7684\u5f62\u5f0f\n        style: { width: '100%' },\n        onChange: (v) => {\n          console.log('v', v);\n        },\n        // \u5f53\u9700\u8981\u63d0\u793a\u6216\u8005\u9759\u6001\u68c0\u67e5\u65f6\u63a8\u8350\u4f7f\u7528 ts \u7684 as \u65ad\u8a00\n      } as TimeRangePickerProps,\n    },\n  ];\n\n  const group2FormItems: FormItemConfig[] = [\n    {\n      renderType: RenderType.CheckboxGroup,\n      formItemProps: {\n        name: 'label6',\n        label: 'label6',\n      },\n      formItemChildProps: {\n        options: mockOptions,\n      },\n    },\n    {\n      renderType: RenderType.RadioGroup,\n      itemColProps: { span: 10 },\n      formItemProps: {\n        name: 'label7',\n        label: 'label7',\n        wrapperCol: { span: 24 },\n      },\n      formItemChildProps: {\n        // \u7c7b\u540d style \u7b49\u90fd\u53ef\u4ee5\u76f4\u63a5\u5199\u6210 key-value \u7684\u5f62\u5f0f\n        style: { width: '100%' },\n        options: mockOptions,\n      },\n    },\n    {\n      // \u4f7f\u7528CustomItemChildren \u53ef\u4ee5\u81ea\u5b9a\u4e49 Form.Item \u7684 children\n      renderType: RenderType.CustomItemChildren,\n      itemColProps: { span: 24 },\n      formItemProps: {\n        name: 'label8',\n        label: 'label8',\n        wrapperCol: { span: 24 },\n      },\n      customItemChildren: (\n        <div>\u4f7f\u7528RenderType.CustomItemChildren\u540e\uff0c\u8fd9\u91cc\u53ef\u4ee5\u968f\u610f\u5b9a\u4e49\uff0c\u9650\u5236\u4f4f\u7684\u53ea\u6709\u4f60\u7684\u60f3\u8c61\u529b!</div>\n      ),\n    },\n  ];\n\n  const groupFormItems = [\n    {\n      title: 'group1',\n      itemsConfig: group1FormItems,\n    },\n    {\n      title: 'group2',\n      itemsConfig: group2FormItems,\n    },\n  ];\n\n  return (\n    <Form\n      form={form}\n      onFinish={(value: Record<string, unknown>) => {\n        console.log('demo2 values: ', value);\n      }}\n    >\n      {groupFormItems.map(({ title, itemsConfig }) => (\n        <Card title={title} key={title} style={{ margin: 16 }}>\n          <Row gutter={16}>\n            <FormItemsBuilder colProps={{ span: 8 }} formItemsConfig={itemsConfig} />\n          </Row>\n        </Card>\n      ))}\n      <Col span={6} push={1}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u63d0\u4ea4\n        </Button>\n      </Col>\n    </Form>\n  );\n};\n\nexport default Demo2;",
        g =
          "import React from 'react';\nimport { FormItemsBuilder, FormItemConfig, RenderType } from 'art-antd-react';\nimport { Button, Col, Form, Input, Row, SelectProps, Space, TimeRangePickerProps } from 'antd';\n//  \u5b89\u88dd\u4e86 art-antd-react \u4ee5\u540e antd \u76f4\u63a5\u5bfc\u51fa\u7684 \u7c7b\u578b\u6216\u7ec4\u4ef6 \u53ef\u4ee5\u76f4\u63a5\u4ece art-antd-react \u4e2d\u5bfc\u51fa\n// import { FormItemsBuilder, FormItemConfig, RenderType, Button, Col, Form, Input, Row, SelectProps, Space, TimeRangePickerProps } from 'art-antd-react';\n\nconst Demo3 = () => {\n  const [form] = Form.useForm();\n\n  const mockOptions = [\n    {\n      label: 'mock1',\n      value: 'mock1',\n    },\n    {\n      label: 'mock2',\n      value: 'mock2',\n    },\n  ];\n\n  const group1FormItems: FormItemConfig[] = [\n    {\n      renderType: RenderType.Input,\n      key: '1',\n      itemTitle: <div>itemTitle \u4e00\u822c\u653e\u5728label\u524d\u52a0\u4ee5\u8bf4\u660e</div>,\n      formItemProps: {\n        // \u8fd9\u91cc\u53ef\u4ee5 \u653e Form.Item \u7684 \u6240\u6709 props\uff0c\u4f60\u61c2\u7684\uff01\n        name: 'label1',\n        label: <div>label1</div>,\n        colon: true, // \u663e\u793a Form.Item \u540e\u8fb9\u7684\u5192\u53f7\n        dependencies: ['label2'],\n        extra: <div>\u989d\u5916\u7684\u4fe1\u606f</div>,\n        tooltip: 'demo3',\n        rules: [\n          {\n            required: true,\n            message: '\u4e0d\u80fd\u4e3a\u7a7a',\n          },\n        ],\n      },\n      formItemChildProps: {\n        placeholder: '\u8bf7\u8f93\u5165\u540d\u5b57',\n      },\n    },\n    {\n      renderType: RenderType.Select,\n      key: '2',\n      formItemProps: {\n        name: 'label2',\n        label: 'label2',\n      },\n      formItemChildProps: {\n        placeholder: '\u8bf7\u9009\u62e9',\n        options: mockOptions,\n      } as SelectProps,\n    },\n    {\n      renderType: RenderType.TimeRangePicker,\n      key: '4',\n      // itemColProps \u7684\u4f18\u5148\u7ea7 \u5927\u4e8e colProps \u7684\u4f18\u5148\u7ea7\n      itemColProps: { span: 24 },\n      formItemProps: {\n        name: 'label4',\n        label: 'label4',\n      },\n      formItemChildProps: {\n        // \u7c7b\u540d style \u7b49\u90fd\u53ef\u4ee5\u76f4\u63a5\u5199\u6210 key-value \u7684\u5f62\u5f0f\n        style: { width: '100%' },\n        onChange: (v) => {\n          console.log('v', v);\n        },\n        // \u5f53\u9700\u8981\u63d0\u793a\u6216\u8005\u9759\u6001\u68c0\u67e5\u65f6\u63a8\u8350\u4f7f\u7528 ts \u7684 as \u65ad\u8a00\n      } as TimeRangePickerProps,\n    },\n    {\n      // \u5f53 \u4f7f\u7528\u4e86 renderType \u7b49\u4e8e CustomItemChildren \u7684\u65f6\u5019\uff0c\u5b9a\u4e49 formItemChildProps \u5c31\u4e0d\u7ba1\u7528\u4e86\uff0c\u53ea\u9700\u8981 \u4f7f\u7528 customItemChild \u5199 \u6b63\u5e38\u7684\u6807\u7b7e\u5373\u53ef\n      renderType: RenderType.CustomItemChildren,\n      key: 'CustomItemChildren',\n      // itemColProps \u7684\u4f18\u5148\u7ea7 \u5927\u4e8e colProps \u7684\u4f18\u5148\u7ea7\n      itemColProps: { span: 24 },\n      formItemProps: {\n        label: 'label4',\n      },\n      customItemChildren: (\n        <Form.List name=\"sights\">\n          {(fields, { add, remove }) => (\n            <>\n              {fields.map((field) => (\n                <Space key={field.key} align=\"baseline\" style={{ marginRight: 10 }}>\n                  <Form.Item\n                    {...field}\n                    label=\"Price\"\n                    name={[field.name, 'price']}\n                    rules={[{ required: true, message: '\u4ef7\u683c\u4e0d\u80fd\u4e3a\u7a7a' }]}\n                  >\n                    <Input />\n                  </Form.Item>\n\n                  <Button onClick={() => remove(field.name)} type=\"primary\" danger>\n                    \u79fb\u9664\n                  </Button>\n                </Space>\n              ))}\n\n              <Form.Item>\n                <Button type=\"dashed\" onClick={() => add()} block>\n                  \u65b0\u589e\u9879\n                </Button>\n              </Form.Item>\n            </>\n          )}\n        </Form.List>\n      ),\n    },\n  ].map(({ formItemProps, ...rest }) => ({\n    ...rest,\n    formItemProps: {\n      labelCol: { span: 24 },\n      wrapperCol: { span: 24 },\n      ...formItemProps,\n    },\n  }));\n\n  return (\n    <Form\n      form={form}\n      onFinish={(value: Record<string, unknown>) => {\n        console.log('demo3 values: ', value);\n      }}\n    >\n      <Row gutter={16}>\n        <FormItemsBuilder colProps={{ span: 24 }} formItemsConfig={group1FormItems} />\n      </Row>\n\n      <Col span={6}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u63d0\u4ea4\n        </Button>\n      </Col>\n    </Form>\n  );\n};\n\nexport default Demo3;",
        h =
          "import React from 'react';\nimport { getData, MockData } from './mock';\nimport { ColumnsType } from 'antd/lib/table';\nimport { Button, message, Space, Tag } from 'antd';\nimport { FormItemConfig, ListTemplate, useRequest, RenderType } from 'art-antd-react';\n//  \u5b89\u88dd\u4e86 art-antd-react \u4ee5\u540e antd \u76f4\u63a5\u5bfc\u51fa\u7684 \u7c7b\u578b\u6216\u7ec4\u4ef6 \u53ef\u4ee5\u76f4\u63a5\u4ece art-antd-react \u4e2d\u5bfc\u51fa\n// import { FormItemConfig, ListTemplate, useRequest, RenderType, Button, message, Space, Tag } from 'art-antd-react';\n\nconst Demo1 = () => {\n  const columns: ColumnsType<MockData> = [\n    {\n      title: 'Name',\n      dataIndex: 'name',\n    },\n    {\n      title: 'Age',\n      dataIndex: 'age',\n      sorter: (a, b) => a.age - b.age,\n    },\n    {\n      title: 'Gender',\n      dataIndex: 'gender',\n    },\n    {\n      title: 'Hobby',\n      dataIndex: 'hobby',\n    },\n    {\n      title: 'Description',\n      dataIndex: 'description',\n    },\n    {\n      title: 'BestFirend',\n      dataIndex: 'bestFirend',\n      render: (bestFirend) => {\n        return <Tag color=\"success\">{bestFirend?.name || '-'}</Tag>;\n      },\n    },\n    {\n      title: 'Action',\n      key: 'action',\n      render: () => (\n        <Space size=\"middle\">\n          {['\u5220\u9664', '\u8be6\u60c5', '\u5176\u4ed6\u64cd\u4f5c'].map((act) => (\n            <Button\n              key={act}\n              type=\"link\"\n              onClick={() => {\n                console.log(`you click add ${act}`);\n              }}\n            >\n              {act}\n            </Button>\n          ))}\n        </Space>\n      ),\n    },\n  ];\n\n  // \u66f4\u591a \u641c\u7d22\u8868\u5355\u914d\u7f6e \u8bf7\u770b FormItemsBuilder \u7684 API\n  const formItemsConfig: FormItemConfig[] = Array(11)\n    .fill({})\n    .map((_, index) => ({\n      renderType: RenderType.Input,\n      formItemProps: {\n        name: `label${index}`,\n        label: `label${index}`,\n      },\n      formItemChildProps: {\n        placeholder: `please input label${index}`,\n      },\n    }))\n    .map(({ formItemChildProps, ...rest }) => ({\n      ...rest,\n      formItemChildProps: {\n        style: { width: '100%' },\n        ...formItemChildProps,\n      },\n    }));\n\n  const { data: dataSource, loading } = useRequest(getData, {\n    onError(e) {\n      message.error(e?.message || '\u8bf7\u6c42\u51fa\u9519');\n    },\n  });\n\n  return (\n    <ListTemplate\n      // ListTemplate \u7684 \u5c5e\u6027\u7ee7\u627f\u4e8e Space \u6240\u4ee5 size \u5c31\u662f \u6765\u81ea\u4e8e\u7ee7\u627f\u7684 SpaceProps\n      size={16}\n      // table \u7684\u914d\u7f6e\n      tableProps={{\n        loading,\n        dataSource,\n        columns,\n        scroll: { x: true },\n        rowKey: 'id',\n        // \u5206\u9875\u914d\u7f6e\uff0c\u4e0d\u9700\u8981\u5c31\u4e0d\u7528\u914d\u7f6e\uff0c\u4f60\u61c2\u7684\n        pagination: {\n          onChange(page, pageSize) {\n            console.log(`change pagination: pageNo = ${page}, pageSize = ${pageSize}`);\n          },\n        },\n      }}\n      // \u5305\u88f9 Table \u7684 Card \u7684\u914d\u7f6e\n      tableCardProps={{\n        title: '\u5217\u8868\u6570\u636e',\n        extra: (\n          <Button\n            type=\"primary\"\n            onClick={() => {\n              console.log('you click add btn');\n            }}\n          >\n            Add\n          </Button>\n        ),\n      }}\n      // \u641c\u7d22\u8868\u5355\u7684\u914d\u7f6e\u9879\uff08\u8fd9\u91cc\u5176\u5b9e\u5c31\u662f FormGenerator \u7684\u914d\u7f6e\n      searchBarProps={{\n        formItemsConfig,\n        rowProps: { gutter: 8 },\n        colProps: { span: 8 },\n        showSubmit: true, // \u9ed8\u8ba4\u5c55\u793a\u7684\n        showRest: true, // \u9ed8\u8ba4\u5c55\u793a\u7684\n        onFinish: (v) => {\n          console.log('\u70b9\u51fb\u4e86\u63d0\u4ea4', v);\n        },\n        onReset: () => {\n          console.log('\u51fa\u53d1\u4e86\u91cd\u7f6e');\n        },\n      }}\n      // \u5305\u88f9 \u641c\u7d22\u8868\u5355\u7684 \u914d\u7f6e\n      searchCardProps={{\n        // \u4efb\u610f\u7684 cardProps \u5c5e\u6027\u914d\u7f6e\n        style: { marginBottom: 2 },\n      }}\n    />\n  );\n};\n\nexport default Demo1;",
        b =
          "export type MockData = {\n  id: string;\n  name: string;\n  age: number;\n  gender: string;\n  hobby: string;\n  bestFirend: {\n    name: string;\n    age: number;\n  };\n  description: string;\n};\n\nexport type MockConfig = {\n  len?: number;\n  timeout?: number;\n  throwErr?: boolean;\n};\nexport const getData = async (config?: MockConfig): Promise<MockData[]> => {\n  const { len = 21, timeout = 1500, throwErr = false } = config || {};\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      if (throwErr) {\n        reject('\u51fa\u9519\u5566');\n      }\n\n      resolve(\n        Array(len)\n          .fill({})\n          .map((_, index) => ({\n            id: `${index + Math.floor(Math.random() * 100)}`,\n            name: `name${index}`,\n            age: Math.floor(Math.random() * 100),\n            gender: `gender${index}`,\n            hobby: `hobby${index}`,\n            firend: `firend${index}`,\n            description: `description${index}`,\n            bestFirend: {\n              name: `zhanag ${index}`,\n              age: Math.floor(Math.random() * 100),\n            },\n          })),\n      );\n    }, timeout);\n  });\n};",
        y =
          "import React, { useRef } from 'react';\nimport { ColumnsType } from 'antd/lib/table';\nimport { Button, message, Space, Tag } from 'antd';\nimport { FormItemConfig, RenderType, useConfigListPage } from 'art-antd-react';\n//  \u5b89\u88dd\u4e86 art-antd-react \u4ee5\u540e antd \u76f4\u63a5\u5bfc\u51fa\u7684 \u7c7b\u578b\u6216\u7ec4\u4ef6 \u53ef\u4ee5\u76f4\u63a5\u4ece art-antd-react \u4e2d\u5bfc\u51fa\n// import { FormItemConfig, RenderType, useConfigListPage, Button, message, Space, Tag } from 'art-antd-react';\n\n// \u8fd9\u91cc\u7684\u8bf7\u6c42\u548c\u7c7b\u578b\u6765\u81ea\u4e8e\u4f60\u7684\u9879\u76ee\nimport { getData, MockData } from './mock';\n\nconst Demo1 = () => {\n  // \u8bb0\u5f55 useConfigListPage \u629b\u51fa\u6765\u7684 queryList\uff0c\u5728\u64cd\u4f5c\u680f\u64cd\u4f5c\u540e\u597d\u91cd\u65b0\u67e5\u8be2\u8868\u683c\u6570\u636e\n  const managerRef = useRef<Record<string, any>>({});\n\n  const columns: ColumnsType<MockData> = [\n    {\n      title: 'Name',\n      dataIndex: 'name',\n    },\n    {\n      title: 'Age',\n      dataIndex: 'age',\n      sorter: (a, b) => a.age - b.age,\n    },\n    {\n      title: 'Gender',\n      dataIndex: 'gender',\n    },\n    {\n      title: 'Hobby',\n      dataIndex: 'hobby',\n    },\n    {\n      title: 'Description',\n      dataIndex: 'description',\n    },\n    {\n      title: 'BestFirend',\n      dataIndex: 'bestFirend',\n      render: (bestFirend) => {\n        return <Tag color=\"success\">{bestFirend?.name || '-'}</Tag>;\n      },\n    },\n    {\n      title: 'Action',\n      key: 'action',\n      render: () => (\n        <Space size=\"middle\">\n          {['delete', '\u8be6\u60c5', '\u5176\u4ed6\u64cd\u4f5c'].map((act) => (\n            <Button\n              key={act}\n              type=\"link\"\n              onClick={() => {\n                console.log(`you click add ${act}`);\n                if ('delete' === act) {\n                  message.success('\u5220\u9664\u6210\u529f\uff0c\u7136\u540e\u91cd\u65b0\u8bf7\u6c42\u6570\u636e');\n                  managerRef.current.queryList({ \u8bf7\u6c42\u7684\u53c2\u6570: 12 });\n                }\n              }}\n            >\n              {act}\n            </Button>\n          ))}\n        </Space>\n      ),\n    },\n  ];\n\n  // \u66f4\u591a \u641c\u7d22\u8868\u5355\u914d\u7f6e \u8bf7\u770b FormItemsBuilder \u7684 API\n  const formItemsConfig: FormItemConfig[] = Array(11)\n    .fill({})\n    .map((_, index) => ({\n      renderType: RenderType.Input,\n      formItemProps: {\n        name: `label${index}`,\n        label: `label${index}`,\n      },\n      formItemChildProps: {\n        placeholder: `please input label${index}`,\n      },\n    }))\n    .map(({ formItemChildProps, ...rest }) => ({\n      ...rest,\n      formItemChildProps: {\n        style: { width: '100%' },\n        ...formItemChildProps,\n      },\n    }));\n\n  const { listContainer, queryList } = useConfigListPage({\n    queryListService: getData,\n    formItemsConfig,\n    rowProps: { gutter: 8 },\n    colProps: { span: 8 },\n    tableProps: {\n      columns,\n      scroll: { x: true },\n      rowKey: 'id',\n      // \u5206\u9875\u914d\u7f6e\uff0c\u4e0d\u9700\u8981\u5c31\u4e0d\u7528\u914d\u7f6e\uff0c\u4f60\u61c2\u7684\n      pagination: {\n        onChange(page, pageSize) {\n          console.log(`change pagination: pageNo = ${page}, pageSize = ${pageSize}`);\n        },\n      },\n    },\n  });\n\n  managerRef.current = {\n    queryList,\n  };\n\n  return listContainer; // \u8fd9\u4fbf\u662f\u6e32\u67d3\u7684\u5217\u8868\u9875\n};\n\nexport default Demo1;",
        I =
          "import React from 'react';\nimport { Button, message } from 'antd';\nimport { useRequest } from 'art-antd-react';\n//  \u5b89\u88dd\u4e86 art-antd-react \u4ee5\u540e antd \u76f4\u63a5\u5bfc\u51fa\u7684 \u7c7b\u578b\u6216\u7ec4\u4ef6 \u53ef\u4ee5\u76f4\u63a5\u4ece art-antd-react \u4e2d\u5bfc\u51fa\n// import { useRequest, Button, message } from 'art-antd-react';\n\n// getData \u6765\u81ea\u4e8e\u4f60\u7684\u8bf7\u6c42\u670d\u52a1\u51fd\u6570\nimport { getData, MockData } from './mock';\n\nconst RequestHookDemo = () => {\n  const { data, loading, lazyService } = useRequest<MockData>(getData, {\n    lazy: true, // lazy \u4e3a true \u7684\u65f6\u5019\u9700\u8981\u624b\u52a8\u53bb\u8c03\u7528 lazyService(xx)\n    onError(e: Error) {\n      message.error(e?.message || '\u8bf7\u6c42\u51fa\u9519');\n    },\n  });\n\n  if (data) {\n    console.log('\u8bf7\u6c42\u7684\u6570\u636e:', JSON.stringify(data, null, 2));\n  }\n\n  return (\n    <section>\n      <Button onClick={() => lazyService()}>\u70b9\u51fb\u8bf7\u6c42\u6570\u636e</Button>\n      <main>\n        \u8bf7\u6c42\u7ed3\u679c\uff1a\n        <code>{loading ? 'loading ...' : JSON.stringify(data, null, 2)}</code>\n      </main>\n    </section>\n  );\n};\n\nexport default RequestHookDemo;",
        P = {
          'art-antd-react-detailpresentdemo1': {
            component: (0, i.D8)({
              loader: (function () {
                var n = (0, m.Z)(
                  (0, s.Z)().mark(function n() {
                    return (0, s.Z)().wrap(function (n) {
                      while (1)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (n.next = 2),
                              Promise.all([t.e(886), t.e(265), t.e(50)]).then(t.bind(t, 64382))
                            );
                          case 2:
                            return n.abrupt('return', n.sent.default);
                          case 3:
                          case 'end':
                            return n.stop();
                        }
                    }, n);
                  }),
                );
                function e() {
                  return n.apply(this, arguments);
                }
                return e;
              })(),
              loading: () => null,
            }),
            previewerProps: {
              sources: { _: { tsx: l } },
              dependencies: {
                react: { version: '18.2.0' },
                'art-antd-react': { version: '1.8.3' },
              },
              title:
                '\u6839\u636e\u83b7\u53d6\u7684\u4fe1\u606f\uff0c\u914d\u7f6e\u4e0alabel\u7684\u6620\u5c04\u5373\u53ef\u5feb\u901f\u663e\u793a',
              identifier: 'art-antd-react-detailpresentdemo1',
            },
          },
          'art-antd-react-detailpresentdemo2': {
            component: (0, i.D8)({
              loader: (function () {
                var n = (0, m.Z)(
                  (0, s.Z)().mark(function n() {
                    return (0, s.Z)().wrap(function (n) {
                      while (1)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (n.next = 2),
                              Promise.all([t.e(886), t.e(265), t.e(50)]).then(t.bind(t, 47798))
                            );
                          case 2:
                            return n.abrupt('return', n.sent.default);
                          case 3:
                          case 'end':
                            return n.stop();
                        }
                    }, n);
                  }),
                );
                function e() {
                  return n.apply(this, arguments);
                }
                return e;
              })(),
              loading: () => null,
            }),
            previewerProps: {
              sources: { _: { tsx: p } },
              dependencies: {
                react: { version: '18.2.0' },
                'art-antd-react': { version: '1.8.3' },
              },
              title: '\u4f7f\u7528 keyMapItemProps \u6765\u6620\u5c04\u67d0\u9879\u5e03\u5c40',
              identifier: 'art-antd-react-detailpresentdemo2',
            },
          },
          'art-antd-react-formgeneratordemo1': {
            component: (0, i.D8)({
              loader: (function () {
                var n = (0, m.Z)(
                  (0, s.Z)().mark(function n() {
                    return (0, s.Z)().wrap(function (n) {
                      while (1)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (n.next = 2),
                              Promise.all([t.e(886), t.e(265), t.e(50)]).then(t.bind(t, 25044))
                            );
                          case 2:
                            return n.abrupt('return', n.sent.default);
                          case 3:
                          case 'end':
                            return n.stop();
                        }
                    }, n);
                  }),
                );
                function e() {
                  return n.apply(this, arguments);
                }
                return e;
              })(),
              loading: () => null,
            }),
            previewerProps: {
              sources: { _: { tsx: d } },
              dependencies: {
                react: { version: '>=16.9.0' },
                antd: { version: '4.22.5', css: 'antd/dist/antd.css' },
                'art-antd-react': { version: '1.8.3' },
                'react-dom': { version: '>=16.9.0' },
              },
              title: '\u4e00\u4e2a\u914d\u7f6e\u5316\u7684\u641c\u7d22 bar',
              identifier: 'art-antd-react-formgeneratordemo1',
            },
          },
          'art-antd-react-formgeneratordemo2': {
            component: (0, i.D8)({
              loader: (function () {
                var n = (0, m.Z)(
                  (0, s.Z)().mark(function n() {
                    return (0, s.Z)().wrap(function (n) {
                      while (1)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (n.next = 2),
                              Promise.all([t.e(886), t.e(265), t.e(50)]).then(t.bind(t, 18353))
                            );
                          case 2:
                            return n.abrupt('return', n.sent.default);
                          case 3:
                          case 'end':
                            return n.stop();
                        }
                    }, n);
                  }),
                );
                function e() {
                  return n.apply(this, arguments);
                }
                return e;
              })(),
              loading: () => null,
            }),
            previewerProps: {
              sources: { _: { tsx: c } },
              dependencies: {
                react: { version: '>=16.9.0' },
                antd: { version: '4.22.5', css: 'antd/dist/antd.css' },
                'art-antd-react': { version: '1.8.3' },
                'react-dom': { version: '>=16.9.0' },
              },
              title: '\u81ea\u5b9a\u4e49\u8868\u5355',
              identifier: 'art-antd-react-formgeneratordemo2',
            },
          },
          'art-antd-react-formitemsbuilderdemo1': {
            component: (0, i.D8)({
              loader: (function () {
                var n = (0, m.Z)(
                  (0, s.Z)().mark(function n() {
                    return (0, s.Z)().wrap(function (n) {
                      while (1)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (n.next = 2),
                              Promise.all([t.e(886), t.e(265), t.e(50)]).then(t.bind(t, 29061))
                            );
                          case 2:
                            return n.abrupt('return', n.sent.default);
                          case 3:
                          case 'end':
                            return n.stop();
                        }
                    }, n);
                  }),
                );
                function e() {
                  return n.apply(this, arguments);
                }
                return e;
              })(),
              loading: () => null,
            }),
            previewerProps: {
              sources: { _: { tsx: u } },
              dependencies: {
                react: { version: '>=16.9.0' },
                antd: { version: '4.22.5', css: 'antd/dist/antd.css' },
                'art-antd-react': { version: '1.8.3' },
                'react-dom': { version: '>=16.9.0' },
              },
              title:
                '\u4f7f\u7528TS as \u65ad\u8a00\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u68c0\u67e5 formItemChildProps \u7684 API \u662f\u5426\u6b63\u786e',
              identifier: 'art-antd-react-formitemsbuilderdemo1',
            },
          },
          'art-antd-react-formitemsbuilderdemo2': {
            component: (0, i.D8)({
              loader: (function () {
                var n = (0, m.Z)(
                  (0, s.Z)().mark(function n() {
                    return (0, s.Z)().wrap(function (n) {
                      while (1)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (n.next = 2),
                              Promise.all([t.e(886), t.e(265), t.e(50)]).then(t.bind(t, 13526))
                            );
                          case 2:
                            return n.abrupt('return', n.sent.default);
                          case 3:
                          case 'end':
                            return n.stop();
                        }
                    }, n);
                  }),
                );
                function e() {
                  return n.apply(this, arguments);
                }
                return e;
              })(),
              loading: () => null,
            }),
            previewerProps: {
              sources: { _: { tsx: f } },
              dependencies: {
                react: { version: '>=16.9.0' },
                antd: { version: '4.22.5', css: 'antd/dist/antd.css' },
                'art-antd-react': { version: '1.8.3' },
                'react-dom': { version: '>=16.9.0' },
              },
              title: 'itemColProps \u4f18\u5148\u7ea7\u9ad8\u4e8e colProps',
              identifier: 'art-antd-react-formitemsbuilderdemo2',
            },
          },
          'art-antd-react-formitemsbuilderdemo3': {
            component: (0, i.D8)({
              loader: (function () {
                var n = (0, m.Z)(
                  (0, s.Z)().mark(function n() {
                    return (0, s.Z)().wrap(function (n) {
                      while (1)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (n.next = 2),
                              Promise.all([t.e(886), t.e(265), t.e(50)]).then(t.bind(t, 62530))
                            );
                          case 2:
                            return n.abrupt('return', n.sent.default);
                          case 3:
                          case 'end':
                            return n.stop();
                        }
                    }, n);
                  }),
                );
                function e() {
                  return n.apply(this, arguments);
                }
                return e;
              })(),
              loading: () => null,
            }),
            previewerProps: {
              sources: { _: { tsx: g } },
              dependencies: {
                react: { version: '>=16.9.0' },
                'art-antd-react': { version: '1.8.3' },
                antd: { version: '4.22.5', css: 'antd/dist/antd.css' },
                'react-dom': { version: '>=16.9.0' },
              },
              title: 'itemColProps \u4f18\u5148\u7ea7\u9ad8\u4e8e colProps',
              identifier: 'art-antd-react-formitemsbuilderdemo3',
            },
          },
          'art-antd-react-listtemplatedemo1': {
            component: (0, i.D8)({
              loader: (function () {
                var n = (0, m.Z)(
                  (0, s.Z)().mark(function n() {
                    return (0, s.Z)().wrap(function (n) {
                      while (1)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (n.next = 2),
                              Promise.all([t.e(886), t.e(265), t.e(50)]).then(t.bind(t, 83164))
                            );
                          case 2:
                            return n.abrupt('return', n.sent.default);
                          case 3:
                          case 'end':
                            return n.stop();
                        }
                    }, n);
                  }),
                );
                function e() {
                  return n.apply(this, arguments);
                }
                return e;
              })(),
              loading: () => null,
            }),
            previewerProps: {
              sources: { _: { tsx: h }, 'mock/index.ts': { import: './mock', content: b } },
              dependencies: {
                react: { version: '>=16.9.0' },
                antd: { version: '4.22.5', css: 'antd/dist/antd.css' },
                'art-antd-react': { version: '1.8.3' },
                'react-dom': { version: '>=16.9.0' },
              },
              title: '\u7b80\u5355\u7684\u4f7f\u7528',
              identifier: 'art-antd-react-listtemplatedemo1',
            },
          },
          'art-antd-react-useconfiglistpagedemo1': {
            component: (0, i.D8)({
              loader: (function () {
                var n = (0, m.Z)(
                  (0, s.Z)().mark(function n() {
                    return (0, s.Z)().wrap(function (n) {
                      while (1)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (n.next = 2),
                              Promise.all([t.e(886), t.e(265), t.e(50)]).then(t.bind(t, 91593))
                            );
                          case 2:
                            return n.abrupt('return', n.sent.default);
                          case 3:
                          case 'end':
                            return n.stop();
                        }
                    }, n);
                  }),
                );
                function e() {
                  return n.apply(this, arguments);
                }
                return e;
              })(),
              loading: () => null,
            }),
            previewerProps: {
              sources: { _: { tsx: y }, 'mock/index.ts': { import: './mock', content: b } },
              dependencies: {
                react: { version: '>=16.9.0' },
                antd: { version: '4.22.5', css: 'antd/dist/antd.css' },
                'art-antd-react': { version: '1.8.3' },
                'react-dom': { version: '>=16.9.0' },
              },
              title: '\u4f7f\u7528demo',
              identifier: 'art-antd-react-useconfiglistpagedemo1',
            },
          },
          'art-antd-react-userequestdemo1': {
            component: (0, i.D8)({
              loader: (function () {
                var n = (0, m.Z)(
                  (0, s.Z)().mark(function n() {
                    return (0, s.Z)().wrap(function (n) {
                      while (1)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (n.next = 2),
                              Promise.all([t.e(886), t.e(265), t.e(50)]).then(t.bind(t, 72294))
                            );
                          case 2:
                            return n.abrupt('return', n.sent.default);
                          case 3:
                          case 'end':
                            return n.stop();
                        }
                    }, n);
                  }),
                );
                function e() {
                  return n.apply(this, arguments);
                }
                return e;
              })(),
              loading: () => null,
            }),
            previewerProps: {
              sources: { _: { tsx: I }, 'mock/index.ts': { import: './mock', content: b } },
              dependencies: {
                react: { version: '>=16.9.0' },
                antd: { version: '4.22.5', css: 'antd/dist/antd.css' },
                'art-antd-react': { version: '1.8.3' },
                'react-dom': { version: '>=16.9.0' },
              },
              title: '\u7b80\u5355\u7684\u4f7f\u7528',
              identifier: 'art-antd-react-userequestdemo1',
            },
          },
        },
        C = {},
        k = t(49215),
        v = (n) => o.createElement(k.Z, (0, r.Z)({}, n, { config: a, demos: P, apis: C }));
    },
  },
]);
