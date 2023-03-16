import { Button, Form, FormInstance, message, Modal, ModalProps } from 'antd';
import React, { useMemo } from 'react';
import { RequestService, useRequest } from '../hooks/useRequest';

interface FormModalConfig<Value, Res>
  extends Omit<ModalProps, 'onError' | 'onOk'> {
  serviceFn: RequestService<Value, Res>;
  formatSubmitValue?: (formValue: Value) => unknown;
  onSuccess?: (data?: Res) => void;
  onError?: (e?: Error) => void;
  onCancel?: () => void;
  // footerRender 根据 config 和 配置来重新配置 footer, 优先级比 footer 高
  footerRender?: (
    config: FormModalConfig<Value, Res> & {
      loading?: boolean;
      lazyService: (values: Value) => any;
      submitFormValue: () => Promise<any>;
    },
    defaultFooter: React.ReactNode[],
  ) => React.ReactNode;
  form?: FormInstance;
}

const isFunction = (arg: any) => typeof arg === 'function';

export const FormModal = <Value, Res>(props: FormModalConfig<Value, Res>) => {
  const {
    serviceFn,
    formatSubmitValue,
    onSuccess,
    onError,
    onCancel,
    form,
    footerRender,
    children,
    ...restModalProps
  } = props;

  const [formInstance] = Form.useForm(form);
  const { lazyService, loading } = useRequest(serviceFn, {
    lazy: true,
    onSuccess(data) {
      if (onSuccess) {
        onSuccess(data);
      } else {
        message.success('操作成功');
        // 成功后调用 取消操作
        onCancel?.();
      }
    },
    onError(error?: Error) {
      if (onError) {
        onError(error);
      } else {
        message.error('操作失败');
      }
    },
  });

  const handleCancel = () => {
    onCancel?.();
  };

  const submitFormValue = () => {
    return new Promise((resolve, reject) => {
      formInstance
        .validateFields()
        .then((res) => {
          resolve(
            lazyService(formatSubmitValue ? formatSubmitValue(res) : res),
          );
        })
        .catch(reject);
    });
  };

  const defaultFooterTuple = useMemo(() => {
    return [
      <Button key="back" onClick={handleCancel}>
        {restModalProps.cancelText || '取消'}
      </Button>,
      <Button
        key="submit"
        type="primary"
        loading={loading}
        onClick={submitFormValue}
      >
        {restModalProps.cancelText || '提交'}
      </Button>,
    ];
  }, [loading, handleCancel, submitFormValue, restModalProps]);

  return (
    <Modal
      onCancel={handleCancel}
      onOk={submitFormValue}
      confirmLoading={loading}
      {...restModalProps}
      footer={
        isFunction(footerRender) ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            {footerRender?.(
              { ...props, lazyService, submitFormValue, loading },
              defaultFooterTuple,
            )}
          </div>
        ) : (
          restModalProps.footer
        )
      }
    >
      {children}
    </Modal>
  );
};
