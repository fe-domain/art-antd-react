import { message, SendingBtn } from 'art-antd-react';
import { useState } from 'react';

const SendingBtnDemo1 = () => {
  const [loadig, setLoading] = useState(false);

  const sendCaptcha = () => {
    setLoading(true);
    setTimeout(() => {
      message.success(`发送的验证码为: ${Math.round(Math.random() * 10000)}`);
      setLoading(false);
    }, 3000);
  };

  return (
    <SendingBtn loading={loadig} onClick={sendCaptcha} totalDisableTime={30} />
  );
};

export default SendingBtnDemo1;
