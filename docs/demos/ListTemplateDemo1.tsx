import {
  Button,
  ColumnsType,
  FormItemConfig,
  ListTemplate,
  message,
  RenderType,
  Space,
  Tag,
  useRequest,
} from 'art-antd-react';
import { getData, MockData } from './mock';
//  安裝了 art-antd-react 以后 antd 直接导出的 类型或组件 可以直接从 art-antd-react 中导出
// import { FormItemConfig, ListTemplate, useRequest, RenderType, Button, message, Space, Tag } from 'art-antd-react';

const Demo1 = () => {
  const columns: ColumnsType<MockData> = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
    },
    {
      title: 'Hobby',
      dataIndex: 'hobby',
    },
    {
      title: 'Description',
      dataIndex: 'description',
    },
    {
      title: 'BestFirend',
      dataIndex: 'bestFirend',
      render: (bestFirend) => {
        return <Tag color="success">{bestFirend?.name || '-'}</Tag>;
      },
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Space size="middle">
          {['删除', '详情', '其他操作'].map((act) => (
            <Button
              key={act}
              type="link"
              onClick={() => {
                console.log(`you click add ${act}`);
              }}
            >
              {act}
            </Button>
          ))}
        </Space>
      ),
    },
  ];

  // 更多 搜索表单配置 请看 FormItemsBuilder 的 API
  const formItemsConfig: FormItemConfig[] = Array(11)
    .fill({})
    .map((_, index) => ({
      renderType: RenderType.Input,
      formItemProps: {
        name: `label${index}`,
        label: `label${index}`,
      },
      formItemChildProps: {
        placeholder: `please input label${index}`,
      },
    }))
    .map(({ formItemChildProps, ...rest }) => ({
      ...rest,
      formItemChildProps: {
        style: { width: '100%' },
        ...formItemChildProps,
      },
    }));

  const { data, loading } = useRequest(getData, {
    onError(e: Error) {
      message.error(e?.message || '请求出错');
    },
    formaResult(res: { result: MockData[]; total: number }) {
      const { result: dataSource, ...rest } = res || {};

      return {
        ...rest,
        dataSource,
      } as any;
    },
  });
  const { dataSource, total } = (data as any) || {};
  return (
    <ListTemplate
      // space 的配置
      spaceProps={{ size: 16 }}
      // table 的配置
      tableProps={{
        loading,
        dataSource,
        columns,
        scroll: { x: true },
        rowKey: 'id',
        // 分页配置，不需要就不用配置，你懂的
        pagination: {
          onChange(page: number, pageSize: number) {
            console.log(
              `change pagination: pageNo = ${page}, pageSize = ${pageSize}`,
            );
          },
          total,
        },
      }}
      // 包裹 Table 的 Card 的配置
      tableCardProps={{
        title: '列表数据',
        extra: (
          <Button
            type="primary"
            onClick={() => {
              console.log('you click add btn');
            }}
          >
            Add
          </Button>
        ),
      }}
      // 搜索表单的配置项（这里其实就是 FormGenerator 的配置
      searchBarProps={{
        formItemsConfig,
        rowProps: { gutter: 8 },
        colProps: { span: 8 },
        showSubmit: true, // 默认展示的
        showRest: true, // 默认展示的
        onFinish: (v: any) => {
          console.log('点击了提交', v);
        },
        onReset: () => {
          console.log('出发了重置');
        },
      }}
      // 包裹 搜索表单的 配置
      searchCardProps={{
        // 任意的 cardProps 属性配置
        style: { marginBottom: 2 },
      }}
    />
  );
};

export default Demo1;
