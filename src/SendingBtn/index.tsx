import { Button, ButtonProps } from 'antd';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react';

export interface SendingBtnProps extends ButtonProps {
  /**
   * @name 总共的禁用的时长、单位 s
   * @default 60 s
   * @example totalDisableTime: 60
   */
  totalDisableTime?: number;
  /**
   * @name 设置剩余时间内渲染的内容
   * @default `${remainderTime}s 后重新发送`
   * @example setSendingConent:(rtime) => `还剩余 ${remainderTime}s 可重新发送哟 ~ `
   */
  setSendingConent?: (remainderTime: number) => React.ReactNode;
  /**
   *  @name 是否点击的时候就开始计时
   *  @default true
   */
  immediate?: boolean;
}

export interface SendingBtnRefProps {
  isCounter: boolean;
  remainderTime: number;
  runCounter: () => void;
  setRemainderTime: (time: number) => void;
  setIsCounter: (counter: boolean) => void;
}

// 1s 等于 1000 ms
const OneSecound = 1000;

export const SendingBtn = forwardRef<
  | SendingBtnRefProps
  | null
  | undefined
  | React.MutableRefObject<SendingBtnRefProps | undefined>,
  SendingBtnProps
>(
  (
    {
      disabled,
      immediate = true,
      children = '发送验证码',
      totalDisableTime = 60,
      setSendingConent,
      onClick,
      ...restBtnProps
    }: SendingBtnProps,
    ref,
  ) => {
    // 禁用时长
    const [remainderTime, setRemainderTime] = useState(totalDisableTime);
    // 是否开始计时
    const [isCounter, setIsCounter] = useState(false);

    useEffect(() => {
      let timer: NodeJS.Timer;

      if (isCounter) {
        timer = setInterval(() => {
          if (remainderTime <= 0) {
            setRemainderTime(0);
            setIsCounter(false);
            clearInterval(timer);
          } else {
            setRemainderTime(remainderTime - 1);
          }
        }, OneSecound);
      }

      return () => clearInterval(timer);
    }, [isCounter, remainderTime]);

    // 开始计时
    const runCounter = () => {
      setIsCounter(true);
      setRemainderTime(totalDisableTime);
    };

    useImperativeHandle(
      ref,
      () => ({
        isCounter,
        remainderTime,
        runCounter,
        setRemainderTime,
        setIsCounter,
      }),
      [isCounter, remainderTime],
    );

    const sendingTxt = useMemo(() => {
      return (
        setSendingConent?.(remainderTime) || `${remainderTime}s 后重新发送`
      );
    }, [remainderTime]);

    const isDisableBtn =
      remainderTime > 0 && remainderTime !== totalDisableTime;

    return (
      <Button
        disabled={disabled || isDisableBtn}
        onClick={(event) => {
          if (immediate) {
            runCounter();
          }
          onClick?.(event as any);
        }}
        {...restBtnProps}
      >
        {isDisableBtn ? sendingTxt : children}
      </Button>
    );
  },
);
