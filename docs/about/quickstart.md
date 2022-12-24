---
nav:
  title: quickstart
  path: /about
order: 1
---

## 快速开始

### install

```shell
npm i art-antd-react
# or
yarn add art-antd-react
# yet
pnpm i art-antd-react

# 在入口引入以下文件(这是antd的默认主题样式，
# 如果要引入其他主题样式可以在项目中按照 https://ant-design.gitee.io/docs/react/use-with-create-react-app-cn 覆盖即可)
import "art-antd-react/dist/esm/styles/defaultAntdCss.css"
```

### code

```js
import { DetailPresent } from 'art-antd-react';

const DetailPage = () => {
  const responseData = {
    user: '张良',
    age: '88',
    hobby: ['谋略', '兵法', '识人'],
    state: '中国-汉朝',
    sex: '男',
    other: null,
    friend: {
      user: '韩非子',
    },
    sketch: '张良（？—前186年），字子房，一说颍川城父（今河南郏县）人',
  };

  const keyMapLabel = {
    user: '姓名',
    age: '年龄',
    sex: '性别',
    sketch: '来自百度百科介绍',
    state: '国籍',
    hobby: '爱好',
    friend: '朋友',
    other: '其他',
  };

  return (
    <DetailPresent<typeof responseData>
      title="谋圣信息"
      detail={{
        ...responseData,
        friend: responseData.friend.user,
        hobby: responseData.hobby.join('、'),

        sketch: (
          <a
            target="_blank"
            rel="noreferrer"
            href="https://baike.baidu.com/item/%E5%BC%A0%E8%89%AF/6658?fr=aladdin"
          >
            {responseData.sketch}
          </a>
        ),
      }}
      // 值为空的时候的占位符
      placeholder="-"
      keyMapLabel={keyMapLabel}
      // 自定义每一项单独的配置
      keyMapItemProps={{
        sketch: {
          labelStyle: { color: '#f00' },
          // 独占3列
          span: 3,
        },
      }}
    />
  );
};

export default DetailPage;
```