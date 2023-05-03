import { Card, DetailPresent, Space, Switch } from 'art-antd-react';
import { useState } from 'react';

const Demo1 = () => {
  const [filterNil, setFilterNil] = useState(false);
  const responseData = {
    user: '张良',
    age: '88',
    hobby: ['谋略', '兵法', '识人'],
    state: '中国-汉朝',
    sex: '男',
    other: null,
    nilValue1: undefined,
    nilValue2: null,
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
    nilValue1: 'Nil展示1',
    nilValue2: 'Nil展示2',
  };

  return (
    <Card style={{ margin: 16 }}>
      <Space direction="vertical" size={52}>
        <Switch
          checked={filterNil}
          checkedChildren="开启 filterNil"
          unCheckedChildren="关闭 filterNil"
          onChange={(v) => setFilterNil(v)}
        />
        <DetailPresent<typeof responseData>
          title="谋圣信息"
          filterNil={filterNil}
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
      </Space>
    </Card>
  );
};

export default Demo1;
