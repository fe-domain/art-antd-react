import { ColProps, Form, FormInstance, RowProps } from 'antd';
import { useMemo } from 'react';
import { FormGenerator } from '../FormGenerator';
import { FormItemConfig } from '../FormItemsBuilder';
import { FormModal, FormModalProps } from '../FormModal';

export interface FormModalHookProps<Value = any, Res = any>
  extends FormModalProps<Value, Res> {
  form?: FormInstance;
  // 公共的 col 布局， 和 antd 的 Col API 相同
  colProps?: ColProps;
  // 公共的 rowProps 布局， 和 antd 的 Row API 相同
  rowProps?: RowProps;
  // Form.Item 和 其 children 的配置，和 FormItemsBuilder 的配置一样
  formItemsConfig: FormItemConfig[];
}

export const useFormModal = <Value, Res>({
  form,
  colProps,
  rowProps,
  serviceFn,
  formItemsConfig,
  ...restModalProps
}: FormModalHookProps<Value, Res>) => {
  const [formInstance] = Form.useForm(form);

  // refactor
  const formModal = useMemo(() => {
    return (
      <FormModal form={formInstance} serviceFn={serviceFn} {...restModalProps}>
        <FormGenerator
          form={formInstance}
          colProps={colProps}
          rowProps={rowProps}
          formItemsConfig={formItemsConfig}
        />
      </FormModal>
    );
  }, [formInstance, colProps, rowProps, formItemsConfig]);

  return {
    formModal,
    formInstance,
  };
};
