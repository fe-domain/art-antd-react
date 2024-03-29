import { Button, message, useRequest } from 'art-antd-react';
//  安裝了 art-antd-react 以后 antd 直接导出的 类型或组件 可以直接从 art-antd-react 中导出
// import { useRequest, Button, message } from 'art-antd-react';

// getData 来自于你的请求服务函数
import { getData, MockData } from './mock';

const RequestHookDemo = () => {
  const { data, loading, lazyService } = useRequest<{
    result: MockData[];
    total: number;
  }>(getData, {
    lazy: true, // lazy 为 true 的时候需要手动去调用 lazyService(xx)
    onError(e: Error) {
      message.error(e?.message || '请求出错');
    },
  });

  if (data) {
    const { result } = data;
    console.log('请求的数据:', JSON.stringify(result, null, 2));
  }

  return (
    <section>
      <Button onClick={() => lazyService()}>点击请求数据</Button>
      <br />
      <br />
      <div>
        请求结果：
        <code>{loading ? 'loading ...' : JSON.stringify(data, null, 2)}</code>
      </div>
    </section>
  );
};

export default RequestHookDemo;
