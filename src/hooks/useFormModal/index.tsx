import { ColProps, Form, FormInstance, ModalProps, RowProps } from 'antd';
import { FormModal } from 'art-antd-react/FormModal';
import React, { useMemo } from 'react';
import { FormGenerator } from '../../FormGenerator';
import { FormItemConfig } from '../../FormItemsBuilder';
import { RequestService } from '../useRequest';

export interface FormModalConfig<Value, Res>
  extends Omit<ModalProps, 'onError' | 'onOk'> {
  form?: FormInstance;
  // 公共的 col 布局， 和 antd 的 Col API 相同
  colProps?: ColProps;
  // 公共的 rowProps 布局， 和 antd 的 Row API 相同
  rowProps?: RowProps;
  // Form.Item 和 其 children 的配置，和 FormItemsBuilder 的配置一样
  formItemsConfig: FormItemConfig[];
  serviceFn: RequestService<Value, Res>;
  formatSubmitValue?: (formValue: Value) => unknown;
  onSuccess?: (data?: Res) => void;
  onError?: (e?: Error) => void;
  onCancel?: () => void;
}

export const useFormModal = <Value, Res>({
  form,
  colProps,
  rowProps,
  formItemsConfig,
  serviceFn,
  ...restModalProps
}: FormModalConfig<Value, Res>) => {
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
