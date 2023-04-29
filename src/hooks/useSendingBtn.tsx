import {
  SendingBtn,
  SendingBtnProps,
  SendingBtnRefProps,
} from 'art-antd-react/SendingBtn';
import { useRef } from 'react';

export const useSendingBtn = (config: SendingBtnProps) => {
  const ref = useRef<SendingBtnRefProps>();

  return {
    SendingBtn: <SendingBtn ref={ref} {...(config || {})} />,
    ...(ref.current || {}),
  };
};
