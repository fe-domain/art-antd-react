import { Button, Form, message, Space } from 'antd';
import {
  FormGenerator,
  FormItemConfig,
  FormModal,
  RenderType,
} from 'art-antd-react';
import React, { useState } from 'react';
//  安裝了 art-antd-react 以后 antd 直接导出的 类型或组件 可以直接从 art-antd-react 中导出
// import { FormItemConfig, RenderType, useFormModal, Button, message } from 'art-antd-react';

const FormModalDemo2 = () => {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  const formItemsConfig: FormItemConfig[] = [
    {
      renderType: RenderType.Input,
      formItemProps: {
        label: 'Name',
        name: 'name',
      },
    },
    {
      renderType: RenderType.InputNumber,
      formItemProps: {
        label: 'Age',
        name: 'age',
      },
      formItemChildProps: {
        placeholder: '请输入年龄',
      },
    },
    {
      renderType: RenderType.Select,
      formItemProps: {
        label: 'Gender',
        name: 'gender',
      },
      formItemChildProps: {
        options: [
          {
            label: '男',
            value: '男',
          },
          {
            label: '女',
            value: '女',
          },
        ],
      },
    },
    {
      renderType: RenderType.Input,
      formItemProps: {
        label: 'Hobby',
        name: 'hobby',
      },
    },
    {
      renderType: RenderType.Input,
      formItemProps: {
        label: 'Description',
        name: 'description',
      },
    },
    {
      renderType: RenderType.Input,
      formItemProps: {
        label: 'BestFirend',
        name: 'bestFirend',
      },
    },
  ];

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          form.setFieldsValue({
            name: 'jakequc',
            age: 124,
          });
          setVisible(true);
        }}
      >
        编辑信息
      </Button>
      <FormModal
        visible={visible} // 决定了是否出现弹框
        title="编辑个人信息"
        form={form}
        serviceFn={() => {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve('请求服务端模拟');
            }, 3000);
          });
        }}
        formatSubmitValue={(formValue: Record<string, any>) => {
          console.log('formateValue', formValue);
          return {
            ...formValue,
            appendKey: 'appendValue',
          };
        }}
        onSuccess={() => {
          message.success('操作成功');
          setVisible(false);
          console.log('请求之后你可以做任何行为操作');
        }}
        onCancel={() => {
          message.success('取消编辑');
          setVisible(false);
        }}
        footerRender={(props, defaultFooterTuple) => {
          return (
            <Space>
              {[
                ...defaultFooterTuple,
                <Button key="ok" loading={props.loading}>
                  ok
                </Button>,
              ]}
            </Space>
          );
        }}
      >
        <FormGenerator
          form={form}
          colProps={{ span: 24 }}
          formItemsConfig={formItemsConfig}
        />
      </FormModal>
    </>
  );
};

export default FormModalDemo2;
