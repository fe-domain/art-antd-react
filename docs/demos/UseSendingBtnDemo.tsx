/* eslint-disable */
import { message, useSendingBtn } from 'art-antd-react';
import { useState } from 'react';

const UseSendingBtnDemo = () => {
  const [loadig, setLoading] = useState(false);

  const { SendingBtn, runCounter } = useSendingBtn({
    loadig,
    onClick: sendCaptcha,
    totalDisableTime: 23,
    immediate: false,
    // button 展示的文字通过 children 来设置
    children: '点击 3s 之后才会开始计时',
  });

  function sendCaptcha() {
    setLoading(true);
    setTimeout(() => {
      runCounter();
      message.success(`发送的验证码为: ${Math.round(Math.random() * 10000)}`);
      setLoading(false);
    }, 3000);
  }

  return SendingBtn;
};

export default UseSendingBtnDemo;
