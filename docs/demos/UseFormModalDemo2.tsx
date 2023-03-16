import { Button, message, Space } from 'antd';
import { FormItemConfig, RenderType, useFormModal } from 'art-antd-react';
import React, { useState } from 'react';
//  安裝了 art-antd-react 以后 antd 直接导出的 类型或组件 可以直接从 art-antd-react 中导出
// import { FormItemConfig, RenderType, useFormModal, Button, message } from 'art-antd-react';

const Demo1 = () => {
  const [open, setOpen] = useState(false);

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

  const { formModal, formInstance } = useFormModal({
    open, // 决定了是否出现弹框
    rowProps: { gutter: 8 },
    colProps: { span: 24 },
    formItemsConfig,
    title: '编辑个人信息',
    serviceFn: (body) => {
      return new Promise((resolve) => {
        console.log('format body: ', JSON.stringify(body, null, 2));
        setTimeout(() => {
          resolve({
            msg: '模拟后端返回的数据',
            data: {
              userInfo: body,
            },
            success: true,
          });
        }, 3000);
      });
    },
    onSuccess: () => {
      message.success('操作成功');
      setOpen(false);
      console.log('请求之后你可以做任何行为操作');
    },
    onCancel: () => {
      message.success('取消编辑');
      setOpen(false);
    },
    formatSubmitValue: (values: any) => {
      console.log('你可以对要提交的数据进行处理');
      return {
        ...values,
        other: '12332',
      };
    },
    footerRender: (props, defaultFooterTuple) => {
      console.log('props: ', props);
      return (
        <Space>
          {[
            ...defaultFooterTuple,
            <Button
              key="ok"
              // 提交 form 这里会 将 formatSubmitValue 的值 传递 给 serviceFn 的 入参
              onClick={async () => {
                const v = await props?.submitFormValue();
                console.log('提交后请求返回的结果为', v);
              }}
              loading={props.loading}
            >
              自定义其他表单 button
            </Button>,
          ]}
        </Space>
      );
    },
  });

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          console.log(':formInstance: ', formInstance);
          formInstance.setFieldsValue({
            name: 'jakequc',
            age: 124,
          });
          setOpen(true);
        }}
      >
        编辑信息
      </Button>
      {formModal}
    </>
  );
};

export default Demo1;
