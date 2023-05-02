import { useRef } from 'react';
import { SendingBtn, SendingBtnProps, SendingBtnRefProps } from '../SendingBtn';

export const useSendingBtn = (config: SendingBtnProps) => {
  const ref = useRef<SendingBtnRefProps>();

  return {
    SendingBtn: <SendingBtn ref={ref} {...(config || {})} />,
    ...(ref.current || {}),
  };
};
