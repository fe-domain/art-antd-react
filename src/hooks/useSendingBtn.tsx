import { useRef } from 'react';
import { SendingBtn, SendingBtnProps, SendingBtnRefProps } from '../SendingBtn';

export const useSendingBtn = (
  config: SendingBtnProps,
): SendingBtnRefProps & { SendingBtn: React.ReactNode } => {
  const ref = useRef<SendingBtnRefProps>();

  return {
    SendingBtn: <SendingBtn ref={ref} {...(config || {})} />,
    ...(ref.current || {}),
  };
};
