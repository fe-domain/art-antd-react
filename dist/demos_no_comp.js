(self['webpackChunkart_antd_react'] = self['webpackChunkart_antd_react'] || []).push([
  [50],
  {
    60836: function (e, r, t) {
      'use strict';
      t.r(r);
      var o = t(44047),
        a = t(50959),
        l = t(87907),
        n = () => {
          var e = {
              user: '\u5f20\u826f',
              age: '88',
              hobby: ['\u8c0b\u7565', '\u5175\u6cd5', '\u8bc6\u4eba'],
              state: '\u4e2d\u56fd-\u6c49\u671d',
              sex: '\u7537',
              friend: { user: '\u97e9\u975e\u5b50' },
            },
            r = {
              user: '\u59d3\u540d',
              age: '\u5e74\u9f84',
              sex: '\u6027\u522b',
              state: '\u56fd\u7c4d',
              hobby: '\u7231\u597d',
              friend: '\u670b\u53cb',
            };
          return a.createElement(l.Li, {
            title: '\u8c0b\u5723\u4fe1\u606f',
            detail: (0, o.Z)((0, o.Z)({}, e), {}, { friend: e.friend.user }),
            keyMapLabel: r,
          });
        };
      r['default'] = n;
    },
    24536: function (e, r, t) {
      'use strict';
      t.r(r);
      var o = t(44047),
        a = t(50959),
        l = t(87907),
        n = () => {
          var e = {
              user: '\u5f20\u826f',
              age: '88',
              hobby: ['\u8c0b\u7565', '\u5175\u6cd5', '\u8bc6\u4eba'],
              state: '\u4e2d\u56fd-\u6c49\u671d',
              sex: '\u7537',
              other: null,
              friend: { user: '\u97e9\u975e\u5b50' },
              sketch:
                '\u5f20\u826f\uff08\uff1f\u2014\u524d186\u5e74\uff09\uff0c\u5b57\u5b50\u623f\uff0c\u4e00\u8bf4\u988d\u5ddd\u57ce\u7236\uff08\u4eca\u6cb3\u5357\u90cf\u53bf\uff09\u4eba',
            },
            r = {
              user: '\u59d3\u540d',
              age: '\u5e74\u9f84',
              sex: '\u6027\u522b',
              sketch: '\u6765\u81ea\u767e\u5ea6\u767e\u79d1\u4ecb\u7ecd',
              state: '\u56fd\u7c4d',
              hobby: '\u7231\u597d',
              friend: '\u670b\u53cb',
              other: '\u5176\u4ed6',
            };
          return a.createElement(l.Li, {
            title: '\u8c0b\u5723\u4fe1\u606f',
            detail: (0, o.Z)(
              (0, o.Z)({}, e),
              {},
              {
                friend: e.friend.user,
                hobby: e.hobby.join('\u3001'),
                sketch: a.createElement(
                  'a',
                  {
                    target: '_blank',
                    rel: 'noreferrer',
                    href: 'https://baike.baidu.com/item/%E5%BC%A0%E8%89%AF/6658?fr=aladdin',
                  },
                  e.sketch,
                ),
              },
            ),
            placeholder: '-',
            keyMapLabel: r,
            keyMapItemProps: { sketch: { labelStyle: { color: '#f00' }, span: 3 } },
          });
        };
      r['default'] = n;
    },
    66986: function (e, r, t) {
      'use strict';
      t.r(r);
      var o = t(44047),
        a = t(33066),
        l = t(60219),
        n = t(50959),
        s = t(87128),
        m = t(87907),
        i = ['formItemChildProps'],
        c = () => {
          var e = s.Z.useForm(),
            r = (0, l.Z)(e, 1),
            t = r[0],
            c = Array(11)
              .fill({})
              .map((e, r) => ({
                renderType: m.y2.Input,
                formItemProps: { name: 'label'.concat(r), label: 'label'.concat(r) },
                formItemChildProps: { placeholder: 'please input label'.concat(r) },
              }))
              .map((e) => {
                var r = e.formItemChildProps,
                  t = (0, a.Z)(e, i);
                return (0, o.Z)(
                  (0, o.Z)({}, t),
                  {},
                  { formItemChildProps: (0, o.Z)({ style: { width: '100%' } }, r) },
                );
              });
          return n.createElement(m.if, {
            form: t,
            showRest: !0,
            showExpend: !0,
            showSubmit: !0,
            foldNumber: 5,
            onFinish: (e) => {
              console.log('Formgenerator demo1 values: ', e);
            },
            colProps: { span: 8 },
            rowProps: { gutter: 64 },
            formItemsConfig: c,
          });
        };
      r['default'] = c;
    },
    34962: function (e, r, t) {
      'use strict';
      t.r(r);
      var o = t(44047),
        a = t(54465),
        l = t(33066),
        n = t(60219),
        s = t(50959),
        m = t(87128),
        i = t(60238),
        c = t(19703),
        d = t(60507),
        p = t(87907),
        u = ['key', 'name'],
        f = ['formItemChildProps', 'formItemProps'],
        h = () => {
          var e = m.Z.useForm(),
            r = (0, n.Z)(e, 1),
            t = r[0],
            h = [
              { label: 'mock1', value: 'mock1' },
              { label: 'mock2', value: 'mock2' },
            ],
            b = [
              {
                renderType: p.y2.Switch,
                itemColProps: { span: 4 },
                formItemProps: { valuePropName: 'checked', name: 'label5', label: 'label5' },
              },
              {
                renderType: p.y2.RadioGroup,
                itemColProps: { span: 10 },
                formItemProps: { name: 'label7', label: 'label7', wrapperCol: { span: 24 } },
                formItemChildProps: { style: { width: '100%' }, options: h },
              },
              {
                renderType: p.y2.CustomItemChildren,
                itemColProps: { span: 24 },
                formItemProps: { label: 'label8' },
                customItemChildren: s.createElement(m.Z.List, { name: 'label8' }, (e, r) => {
                  var t = r.add,
                    o = r.remove;
                  return s.createElement(
                    s.Fragment,
                    null,
                    e.map((e) => {
                      var r = e.key,
                        t = e.name,
                        n = (0, l.Z)(e, u);
                      return s.createElement(
                        i.Z,
                        { key: r, style: { display: 'flex', marginBottom: 8 }, align: 'baseline' },
                        s.createElement(
                          m.Z.Item,
                          (0, a.Z)({}, n, {
                            name: [t, 'first'],
                            rules: [{ required: !0, message: 'Missing first name' }],
                          }),
                          s.createElement(c.Z, { placeholder: 'First Name' }),
                        ),
                        s.createElement(d.Z, { type: 'link', onClick: () => o(t) }, '\u5220\u9664'),
                      );
                    }),
                    s.createElement(
                      m.Z.Item,
                      null,
                      s.createElement(d.Z, { type: 'dashed', onClick: () => t() }, '+ Add field'),
                    ),
                  );
                }),
              },
              {
                renderType: p.y2.Input,
                key: '1',
                formItemProps: { name: 'label1', label: 'label1' },
                formItemChildProps: { placeholder: '\u8bf7\u8f93\u5165\u540d\u5b57' },
              },
              {
                renderType: p.y2.Select,
                formItemProps: { name: 'label2', label: 'label2' },
                formItemChildProps: { placeholder: '\u8bf7\u9009\u62e9', options: h },
              },
              {
                renderType: p.y2.Slider,
                key: '3',
                formItemProps: { name: 'label3', label: 'label3' },
              },
              {
                renderType: p.y2.TimeRangePicker,
                key: '4',
                itemColProps: { span: 24 },
                formItemProps: { name: 'label4', label: 'label4' },
                formItemChildProps: {
                  onChange: (e) => {
                    console.log('v', e);
                  },
                },
              },
            ].map((e) => {
              var r = e.formItemChildProps,
                t = e.formItemProps,
                a = (0, l.Z)(e, f);
              return (0, o.Z)(
                (0, o.Z)({}, a),
                {},
                {
                  formItemProps: (0, o.Z)((0, o.Z)({}, t), {}, { wrapperCol: { span: 24 } }),
                  formItemChildProps: (0, o.Z)(
                    (0, o.Z)({}, r || {}),
                    {},
                    { style: { width: '100%' } },
                  ),
                },
              );
            });
          return s.createElement(p.if, {
            form: t,
            showSubmit: !0,
            onFinish: (e) => {
              console.log('Formgenerator demo2 values: ', e);
            },
            colProps: { span: 8 },
            rowProps: { gutter: 20 },
            showExpend: !0,
            formItemsConfig: b,
            actionColProps: { span: 24 },
            actionBar: s.createElement(
              d.Z,
              { type: 'primary', onClick: () => t.submit() },
              '\u4fdd\u5b58',
            ),
          });
        };
      r['default'] = h;
    },
    36840: function (e, r, t) {
      'use strict';
      t.r(r);
      var o = t(60219),
        a = t(50959),
        l = t(87128),
        n = t(26160),
        s = t(13491),
        m = t(60507),
        i = t(87907),
        c = () => {
          var e = l.Z.useForm(),
            r = (0, o.Z)(e, 1),
            t = r[0],
            c = [
              { label: 'mock1', value: 'mock1' },
              { label: 'mock2', value: 'mock2' },
              { label: 'mock3', value: 'mock3' },
            ],
            d = [
              {
                renderType: i.y2.Input,
                formItemProps: { name: 'name', label: '\u59d3\u540d' },
                formItemChildProps: { placeholder: '\u8bf7\u8f93\u5165\u540d\u5b57' },
              },
              {
                renderType: i.y2.Select,
                formItemProps: { name: 'hobby', label: '\u7231\u597d' },
                formItemChildProps: { placeholder: '\u8bf7\u9009\u62e9', options: c },
              },
              {
                renderType: i.y2.InputNumber,
                formItemProps: { name: 'number', label: '\u5e74\u9f84' },
                formItemChildProps: {
                  placeholder: '\u8bf7\u8f93\u5165\u6570\u5b57',
                  style: { width: '100%' },
                },
              },
            ];
          return a.createElement(
            l.Z,
            {
              form: t,
              onFinish: (e) => {
                console.log('demo1 values: ', e);
              },
            },
            a.createElement(
              n.Z,
              { gutter: 18 },
              a.createElement(i.xh, { colProps: { span: 6 }, formItemsConfig: d }),
              a.createElement(
                s.Z,
                { span: 6 },
                a.createElement(m.Z, { type: 'primary', htmlType: 'submit' }, '\u63d0\u4ea4'),
              ),
            ),
          );
        };
      r['default'] = c;
    },
    3769: function (e, r, t) {
      'use strict';
      t.r(r);
      var o = t(60219),
        a = t(50959),
        l = t(87128),
        n = t(13679),
        s = t(26160),
        m = t(13491),
        i = t(60507),
        c = t(87907),
        d = () => {
          var e = l.Z.useForm(),
            r = (0, o.Z)(e, 1),
            t = r[0],
            d = [
              { label: 'mock1', value: 'mock1' },
              { label: 'mock2', value: 'mock2' },
            ],
            p = [
              {
                renderType: c.y2.Input,
                key: '1',
                formItemProps: { name: 'label1', label: 'label1' },
                formItemChildProps: { placeholder: '\u8bf7\u8f93\u5165\u540d\u5b57' },
              },
              {
                renderType: c.y2.Select,
                key: '2',
                formItemProps: { name: 'label2', label: 'label2' },
                formItemChildProps: { placeholder: '\u8bf7\u9009\u62e9', options: d },
              },
              {
                renderType: c.y2.Slider,
                key: '3',
                formItemProps: { name: 'label3', label: 'label3' },
                formItemChildProps: { style: { width: '100%' } },
              },
              {
                renderType: c.y2.TimeRangePicker,
                key: '4',
                itemColProps: { span: 24 },
                formItemProps: { name: 'label4', label: 'label4' },
                formItemChildProps: {
                  style: { width: '100%' },
                  onChange: (e) => {
                    console.log('v', e);
                  },
                },
              },
            ],
            u = [
              {
                renderType: c.y2.CheckboxGroup,
                formItemProps: { name: 'label6', label: 'label6' },
                formItemChildProps: { options: d },
              },
              {
                renderType: c.y2.RadioGroup,
                itemColProps: { span: 10 },
                formItemProps: { name: 'label7', label: 'label7', wrapperCol: { span: 24 } },
                formItemChildProps: { style: { width: '100%' }, options: d },
              },
              {
                renderType: c.y2.CustomItemChildren,
                itemColProps: { span: 24 },
                formItemProps: { name: 'label8', label: 'label8', wrapperCol: { span: 24 } },
                customItemChildren: a.createElement(
                  'div',
                  null,
                  '\u4f7f\u7528RenderType.CustomItemChildren\u540e\uff0c\u8fd9\u91cc\u53ef\u4ee5\u968f\u610f\u5b9a\u4e49\uff0c\u9650\u5236\u4f4f\u7684\u53ea\u6709\u4f60\u7684\u60f3\u8c61\u529b!',
                ),
              },
            ],
            f = [
              { title: 'group1', itemsConfig: p },
              { title: 'group2', itemsConfig: u },
            ];
          return a.createElement(
            l.Z,
            {
              form: t,
              onFinish: (e) => {
                console.log('demo2 values: ', e);
              },
            },
            f.map((e) => {
              var r = e.title,
                t = e.itemsConfig;
              return a.createElement(
                n.Z,
                { title: r, key: r, style: { margin: 16 } },
                a.createElement(
                  s.Z,
                  { gutter: 16 },
                  a.createElement(c.xh, { colProps: { span: 8 }, formItemsConfig: t }),
                ),
              );
            }),
            a.createElement(
              m.Z,
              { span: 6, push: 1 },
              a.createElement(i.Z, { type: 'primary', htmlType: 'submit' }, '\u63d0\u4ea4'),
            ),
          );
        };
      r['default'] = d;
    },
    79621: function (e, r, t) {
      'use strict';
      t.r(r);
      var o = t(44047),
        a = t(33066),
        l = t(54465),
        n = t(60219),
        s = t(50959),
        m = t(87907),
        i = t(87128),
        c = t(60238),
        d = t(19703),
        p = t(60507),
        u = t(26160),
        f = t(13491),
        h = ['formItemProps'],
        b = () => {
          var e = i.Z.useForm(),
            r = (0, n.Z)(e, 1),
            t = r[0],
            b = [
              { label: 'mock1', value: 'mock1' },
              { label: 'mock2', value: 'mock2' },
            ],
            y = [
              {
                renderType: m.y2.Input,
                key: '1',
                itemTitle: s.createElement(
                  'div',
                  null,
                  'itemTitle \u4e00\u822c\u653e\u5728label\u524d\u52a0\u4ee5\u8bf4\u660e',
                ),
                formItemProps: {
                  name: 'label1',
                  label: s.createElement('div', null, 'label1'),
                  colon: !0,
                  dependencies: ['label2'],
                  extra: s.createElement('div', null, '\u989d\u5916\u7684\u4fe1\u606f'),
                  tooltip: 'demo3',
                  rules: [{ required: !0, message: '\u4e0d\u80fd\u4e3a\u7a7a' }],
                },
                formItemChildProps: { placeholder: '\u8bf7\u8f93\u5165\u540d\u5b57' },
              },
              {
                renderType: m.y2.Select,
                key: '2',
                formItemProps: { name: 'label2', label: 'label2' },
                formItemChildProps: { placeholder: '\u8bf7\u9009\u62e9', options: b },
              },
              {
                renderType: m.y2.TimeRangePicker,
                key: '4',
                itemColProps: { span: 24 },
                formItemProps: { name: 'label4', label: 'label4' },
                formItemChildProps: {
                  style: { width: '100%' },
                  onChange: (e) => {
                    console.log('v', e);
                  },
                },
              },
              {
                renderType: m.y2.CustomItemChildren,
                key: 'CustomItemChildren',
                itemColProps: { span: 24 },
                formItemProps: { label: 'label4' },
                customItemChildren: s.createElement(i.Z.List, { name: 'sights' }, (e, r) => {
                  var t = r.add,
                    o = r.remove;
                  return s.createElement(
                    s.Fragment,
                    null,
                    e.map((e) =>
                      s.createElement(
                        c.Z,
                        { key: e.key, align: 'baseline', style: { marginRight: 10 } },
                        s.createElement(
                          i.Z.Item,
                          (0, l.Z)({}, e, {
                            label: 'Price',
                            name: [e.name, 'price'],
                            rules: [
                              { required: !0, message: '\u4ef7\u683c\u4e0d\u80fd\u4e3a\u7a7a' },
                            ],
                          }),
                          s.createElement(d.Z, null),
                        ),
                        s.createElement(
                          p.Z,
                          { onClick: () => o(e.name), type: 'primary', danger: !0 },
                          '\u79fb\u9664',
                        ),
                      ),
                    ),
                    s.createElement(
                      i.Z.Item,
                      null,
                      s.createElement(
                        p.Z,
                        { type: 'dashed', onClick: () => t(), block: !0 },
                        '\u65b0\u589e\u9879',
                      ),
                    ),
                  );
                }),
              },
            ].map((e) => {
              var r = e.formItemProps,
                t = (0, a.Z)(e, h);
              return (0, o.Z)(
                (0, o.Z)({}, t),
                {},
                {
                  formItemProps: (0, o.Z)({ labelCol: { span: 24 }, wrapperCol: { span: 24 } }, r),
                },
              );
            });
          return s.createElement(
            i.Z,
            {
              form: t,
              onFinish: (e) => {
                console.log('demo3 values: ', e);
              },
            },
            s.createElement(
              u.Z,
              { gutter: 16 },
              s.createElement(m.xh, { colProps: { span: 24 }, formItemsConfig: y }),
            ),
            s.createElement(
              f.Z,
              { span: 6 },
              s.createElement(p.Z, { type: 'primary', htmlType: 'submit' }, '\u63d0\u4ea4'),
            ),
          );
        };
      r['default'] = b;
    },
    64169: function (e, r, t) {
      'use strict';
      t.r(r);
      var o = t(44047),
        a = t(33066),
        l = t(50959),
        n = t(68807),
        s = t(20343),
        m = t(60238),
        i = t(60507),
        c = t(47174),
        d = t(87907),
        p = ['formItemChildProps'],
        u = () => {
          var e = [
              { title: 'Name', dataIndex: 'name' },
              { title: 'Age', dataIndex: 'age', sorter: (e, r) => e.age - r.age },
              { title: 'Gender', dataIndex: 'gender' },
              { title: 'Hobby', dataIndex: 'hobby' },
              { title: 'Description', dataIndex: 'description' },
              {
                title: 'BestFirend',
                dataIndex: 'bestFirend',
                render: (e) =>
                  l.createElement(
                    s.Z,
                    { color: 'success' },
                    (null === e || void 0 === e ? void 0 : e.name) || '-',
                  ),
              },
              {
                title: 'Action',
                key: 'action',
                render: () =>
                  l.createElement(
                    m.Z,
                    { size: 'middle' },
                    ['\u5220\u9664', '\u8be6\u60c5', '\u5176\u4ed6\u64cd\u4f5c'].map((e) =>
                      l.createElement(
                        i.Z,
                        {
                          key: e,
                          type: 'link',
                          onClick: () => {
                            console.log('you click add '.concat(e));
                          },
                        },
                        e,
                      ),
                    ),
                  ),
              },
            ],
            r = Array(11)
              .fill({})
              .map((e, r) => ({
                renderType: d.y2.Input,
                formItemProps: { name: 'label'.concat(r), label: 'label'.concat(r) },
                formItemChildProps: { placeholder: 'please input label'.concat(r) },
              }))
              .map((e) => {
                var r = e.formItemChildProps,
                  t = (0, a.Z)(e, p);
                return (0, o.Z)(
                  (0, o.Z)({}, t),
                  {},
                  { formItemChildProps: (0, o.Z)({ style: { width: '100%' } }, r) },
                );
              }),
            t = (0, d.QT)(n.Y, {
              onError(e) {
                c.ZP.error(
                  (null === e || void 0 === e ? void 0 : e.message) || '\u8bf7\u6c42\u51fa\u9519',
                );
              },
            }),
            u = t.data,
            f = t.loading;
          return l.createElement(d.o, {
            size: 16,
            tableProps: {
              loading: f,
              dataSource: u,
              columns: e,
              scroll: { x: !0 },
              rowKey: 'id',
              pagination: {
                onChange(e, r) {
                  console.log('change pagination: pageNo = '.concat(e, ', pageSize = ').concat(r));
                },
              },
            },
            tableCardProps: {
              title: '\u5217\u8868\u6570\u636e',
              extra: l.createElement(
                i.Z,
                {
                  type: 'primary',
                  onClick: () => {
                    console.log('you click add btn');
                  },
                },
                'Add',
              ),
            },
            searchBarProps: {
              formItemsConfig: r,
              rowProps: { gutter: 8 },
              colProps: { span: 8 },
              showSubmit: !0,
              showRest: !0,
              onFinish: (e) => {
                console.log('\u70b9\u51fb\u4e86\u63d0\u4ea4', e);
              },
              onReset: () => {
                console.log('\u51fa\u53d1\u4e86\u91cd\u7f6e');
              },
            },
            searchCardProps: { style: { marginBottom: 2 } },
          });
        };
      r['default'] = u;
    },
    74156: function (e, r, t) {
      'use strict';
      t.r(r);
      var o = t(44047),
        a = t(33066),
        l = t(50959),
        n = t(20343),
        s = t(60238),
        m = t(60507),
        i = t(47174),
        c = t(87907),
        d = t(68807),
        p = ['formItemChildProps'],
        u = () => {
          var e = (0, l.useRef)({}),
            r = [
              { title: 'Name', dataIndex: 'name' },
              { title: 'Age', dataIndex: 'age', sorter: (e, r) => e.age - r.age },
              { title: 'Gender', dataIndex: 'gender' },
              { title: 'Hobby', dataIndex: 'hobby' },
              { title: 'Description', dataIndex: 'description' },
              {
                title: 'BestFirend',
                dataIndex: 'bestFirend',
                render: (e) =>
                  l.createElement(
                    n.Z,
                    { color: 'success' },
                    (null === e || void 0 === e ? void 0 : e.name) || '-',
                  ),
              },
              {
                title: 'Action',
                key: 'action',
                render: () =>
                  l.createElement(
                    s.Z,
                    { size: 'middle' },
                    ['delete', '\u8be6\u60c5', '\u5176\u4ed6\u64cd\u4f5c'].map((r) =>
                      l.createElement(
                        m.Z,
                        {
                          key: r,
                          type: 'link',
                          onClick: () => {
                            console.log('you click add '.concat(r)),
                              'delete' === r &&
                                (i.ZP.success(
                                  '\u5220\u9664\u6210\u529f\uff0c\u7136\u540e\u91cd\u65b0\u8bf7\u6c42\u6570\u636e',
                                ),
                                e.current.queryList({ '\u8bf7\u6c42\u7684\u53c2\u6570': 12 }));
                          },
                        },
                        r,
                      ),
                    ),
                  ),
              },
            ],
            t = Array(11)
              .fill({})
              .map((e, r) => ({
                renderType: c.y2.Input,
                formItemProps: { name: 'label'.concat(r), label: 'label'.concat(r) },
                formItemChildProps: { placeholder: 'please input label'.concat(r) },
              }))
              .map((e) => {
                var r = e.formItemChildProps,
                  t = (0, a.Z)(e, p);
                return (0, o.Z)(
                  (0, o.Z)({}, t),
                  {},
                  { formItemChildProps: (0, o.Z)({ style: { width: '100%' } }, r) },
                );
              }),
            u = (0, c.CR)({
              queryListService: d.Y,
              formItemsConfig: t,
              rowProps: { gutter: 8 },
              colProps: { span: 8 },
              tableProps: {
                columns: r,
                scroll: { x: !0 },
                rowKey: 'id',
                pagination: {
                  onChange(e, r) {
                    console.log(
                      'change pagination: pageNo = '.concat(e, ', pageSize = ').concat(r),
                    );
                  },
                },
              },
            }),
            f = u.listContainer,
            h = u.queryList;
          return (e.current = { queryList: h }), f;
        };
      r['default'] = u;
    },
    47239: function (e, r, t) {
      'use strict';
      t.r(r);
      var o = t(50959),
        a = t(47174),
        l = t(60507),
        n = t(87907),
        s = t(68807),
        m = () => {
          var e = (0, n.QT)(s.Y, {
              lazy: !0,
              onError(e) {
                a.ZP.error(
                  (null === e || void 0 === e ? void 0 : e.message) || '\u8bf7\u6c42\u51fa\u9519',
                );
              },
            }),
            r = e.data,
            t = e.loading,
            m = e.lazyService;
          return (
            r && console.log('\u8bf7\u6c42\u7684\u6570\u636e:', JSON.stringify(r, null, 2)),
            o.createElement(
              'section',
              null,
              o.createElement(l.Z, { onClick: () => m() }, '\u70b9\u51fb\u8bf7\u6c42\u6570\u636e'),
              o.createElement(
                'main',
                null,
                '\u8bf7\u6c42\u7ed3\u679c\uff1a',
                o.createElement('code', null, t ? 'loading ...' : JSON.stringify(r, null, 2)),
              ),
            )
          );
        };
      r['default'] = m;
    },
    68807: function (e, r, t) {
      'use strict';
      t.d(r, {
        Y: function () {
          return l;
        },
      });
      var o = t(90738),
        a = t(35023),
        l = (function () {
          var e = (0, a.Z)(
            (0, o.Z)().mark(function e(r) {
              var t, a, l, n, s, m, i;
              return (0, o.Z)().wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = r || {}),
                        (a = t.len),
                        (l = void 0 === a ? 21 : a),
                        (n = t.timeout),
                        (s = void 0 === n ? 1500 : n),
                        (m = t.throwErr),
                        (i = void 0 !== m && m),
                        e.abrupt(
                          'return',
                          new Promise((e, r) => {
                            setTimeout(() => {
                              i && r('\u51fa\u9519\u5566'),
                                e(
                                  Array(l)
                                    .fill({})
                                    .map((e, r) => ({
                                      id: ''.concat(r + Math.floor(100 * Math.random())),
                                      name: 'name'.concat(r),
                                      age: Math.floor(100 * Math.random()),
                                      gender: 'gender'.concat(r),
                                      hobby: 'hobby'.concat(r),
                                      firend: 'firend'.concat(r),
                                      description: 'description'.concat(r),
                                      bestFirend: {
                                        name: 'zhanag '.concat(r),
                                        age: Math.floor(100 * Math.random()),
                                      },
                                    })),
                                );
                            }, s);
                          }),
                        )
                      );
                    case 2:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          );
          return function (r) {
            return e.apply(this, arguments);
          };
        })();
    },
    87907: function (e, r, t) {
      'use strict';
      t.d(r, {
        Li: function () {
          return x;
        },
        if: function () {
          return w;
        },
        xh: function () {
          return Z;
        },
        o: function () {
          return F;
        },
        y2: function () {
          return g;
        },
        CR: function () {
          return B;
        },
        QT: function () {
          return N;
        },
      });
      var o = t(54465),
        a = t(44047),
        l = t(33066),
        n = t(19703),
        s = t(10389),
        m = t(3603),
        i = t(38169),
        c = t(69750),
        d = t(49085),
        p = t(74794),
        u = t(59050),
        f = t(35337),
        h = t(13491),
        b = t(87128),
        y = t(50959),
        P = ['key', 'itemTitle', 'itemColProps', 'formItemProps'],
        g = {
          Input: 'Input',
          Select: 'Select',
          InputNumber: 'InputNumber',
          Checkbox: 'Checkbox',
          CheckboxGroup: 'CheckboxGroup',
          Radio: 'Radio',
          RadioGroup: 'RadioGroup',
          Switch: 'Switch',
          TimePicker: 'TimePicker',
          TimeRangePicker: 'TimeRangePicker',
          DatePicker: 'DatePicker',
          DateRangePicker: 'DateRangePicker',
          Slider: 'Slider',
          CustomItemChildren: 'CustomItemChildren',
        },
        j = (e) => {
          var r = e.renderType,
            t = e.customItemChildren,
            o = e.formItemChildProps,
            a = void 0 === o ? {} : o;
          switch (r) {
            case g.CustomItemChildren:
              if (!t)
                throw new TypeError(
                  'renderType\u7b49\u4e8e'.concat(
                    g.CustomItemChildren,
                    '\u65f6,customItemChildren \u5fc5\u987b\u4e3a React.ReactElement \u7c7b\u578b',
                  ),
                );
              return t;
            case g.Input:
              return y.createElement(n.Z, a);
            case g.InputNumber:
              return y.createElement(s.Z, a);
            case g.Checkbox:
              return y.createElement(m.Z, a);
            case g.CheckboxGroup:
              return y.createElement(m.Z.Group, a);
            case g.Select:
              return y.createElement(i.Z, a);
            case g.Radio:
              return y.createElement(c.ZP, a);
            case g.RadioGroup:
              return y.createElement(c.ZP.Group, a);
            case g.Switch:
              return y.createElement(d.Z, a);
            case g.TimePicker:
              return y.createElement(p.Z, a);
            case g.TimeRangePicker:
              return y.createElement(p.Z.RangePicker, a);
            case g.DatePicker:
              return y.createElement(u.Z, a);
            case g.DateRangePicker:
              return y.createElement(u.Z.RangePicker, a);
            case g.Slider:
              return y.createElement(f.Z, a);
            default:
              throw new TypeError(
                '\u6ca1\u6709\u8be5\u6e32\u67d3\u7c7b\u578b\uff0c\u8bf7\u901a\u8fc7renderType\u4e3aRenderType.CustomItemChildren\u6765\u914d\u7f6e\u81ea\u5b9a\u4e49\u6e32\u67d3',
              );
          }
        },
        Z = (e) => {
          var r = e.formItemsConfig,
            t = e.colProps;
          return y.createElement(
            y.Fragment,
            null,
            null === r || void 0 === r
              ? void 0
              : r.map((e, r) => {
                  var n,
                    s = e.key,
                    m = e.itemTitle,
                    i = e.itemColProps,
                    c = e.formItemProps,
                    d = (0, l.Z)(e, P);
                  return y.createElement(
                    h.Z,
                    (0, o.Z)(
                      {
                        key:
                          s ||
                          (null === c || void 0 === c || null === (n = c.name) || void 0 === n
                            ? void 0
                            : n.toString()) ||
                          r,
                      },
                      i || t || {},
                    ),
                    m,
                    y.createElement(b.Z.Item, c, j((0, a.Z)({}, d))),
                  );
                }),
          );
        },
        k = t(60219),
        C = t(26160),
        I = t(60238),
        v = t(60507),
        E = [
          'form',
          'colProps',
          'rowProps',
          'showExpend',
          'showSubmit',
          'showRest',
          'actionBar',
          'formItemsConfig',
          'foldNumber',
          'actionColProps',
          'foldNode',
          'unfoldNode',
          'restNode',
          'submitNode',
          'fold',
          'onReset',
          'onValuesChange',
          'submitBtnProps',
          'resetBtnProps',
        ],
        w = (e) => {
          var r = e.form,
            t = e.colProps,
            n = e.rowProps,
            s = e.showExpend,
            m = e.showSubmit,
            i = e.showRest,
            c = e.actionBar,
            d = e.formItemsConfig,
            p = e.foldNumber,
            u = void 0 === p ? 2 : p,
            f = e.actionColProps,
            P = e.foldNode,
            g = void 0 === P ? '\u6536\u8d77' : P,
            j = e.unfoldNode,
            w = void 0 === j ? '\u5c55\u5f00' : j,
            T = e.restNode,
            S = void 0 === T ? '\u91cd\u7f6e' : T,
            x = e.submitNode,
            R = void 0 === x ? '\u63d0\u4ea4' : x,
            z = e.fold,
            F = void 0 !== z && z,
            N = e.onReset,
            M = e.onValuesChange,
            L = e.submitBtnProps,
            B = e.resetBtnProps,
            G = (0, l.Z)(e, E),
            A = b.Z.useForm(r),
            q = (0, k.Z)(A, 1),
            D = q[0],
            O = (0, y.useState)(!0),
            _ = (0, k.Z)(O, 2),
            V = _[0],
            Y = _[1],
            Q = (0, y.useRef)({});
          (0, y.useEffect)(() => {
            Y(!F);
          }, [F]);
          var H = () => {
              (Q.current = {}), D.resetFields(), N && N();
            },
            J = (e, r) => {
              (Q.current = (0, a.Z)((0, a.Z)({}, Q.current), e || {})), M && M(e, r);
            },
            K = (0, y.useMemo)(() => (V ? d : d.slice(0, u)), [u, d, V]);
          return y.createElement(
            b.Z,
            (0, o.Z)({ form: D, onValuesChange: J }, G),
            y.createElement(
              C.Z,
              n || {},
              y.createElement(Z, { formItemsConfig: K, colProps: t || {} }),
              y.createElement(
                h.Z,
                f || t || {},
                c ||
                  ((s || i || m) &&
                    y.createElement(
                      I.Z,
                      null,
                      m &&
                        y.createElement(
                          v.Z,
                          (0, o.Z)({ type: 'primary', htmlType: 'submit' }, L || {}),
                          R,
                        ),
                      i && y.createElement(v.Z, (0, o.Z)({ onClick: H }, B || {}), S),
                      s &&
                        y.createElement(
                          'a',
                          {
                            style: { fontSize: 12 },
                            onClick: () => {
                              Y(!V);
                            },
                          },
                          V ? g : w,
                        ),
                    )),
              ),
            ),
          );
        },
        T = t(85456),
        S = ['detail', 'placeholder', 'keyMapLabel', 'keyMapItemProps'],
        x = (e) => {
          var r = e.detail,
            t = e.placeholder,
            n = e.keyMapLabel,
            s = e.keyMapItemProps,
            m = (0, l.Z)(e, S),
            i = (0, y.useMemo)(
              () =>
                Object.keys(n || {}).filter((e) => r && Object.prototype.hasOwnProperty.call(r, e)),
              [],
            );
          return y.createElement(
            T.Z,
            m,
            i.map((e) => {
              var l,
                m = (0, a.Z)(
                  (0, a.Z)({}, (null === s || void 0 === s ? void 0 : s[e]) || {}),
                  {},
                  { label: n[e] },
                );
              return (
                n[e] &&
                y.createElement(
                  T.Z.Item,
                  (0, o.Z)({ key: e }, m),
                  y.createElement(y.Fragment, null, null !== (l = r[e]) && void 0 !== l ? l : t),
                )
              );
            }),
          );
        },
        R = t(13679),
        z = t(79934),
        F = (e) => {
          var r = e.tableProps,
            t = e.searchBarProps,
            o = e.searchCardProps,
            l = e.tableCardProps,
            n = e.spaceProps,
            s = (0, a.Z)({ direction: 'vertical', style: { width: '100%' } }, n || {}),
            m = (0, a.Z)({ showSubmit: !0, showRest: !0 }, t || { formItemsConfig: [] }),
            i = (0, a.Z)({ style: { marginTop: 16 } }, l);
          return y.createElement(
            I.Z,
            s,
            y.createElement(R.Z, o || {}, y.createElement(w, m)),
            y.createElement(R.Z, i, y.createElement(z.Z, r)),
          );
        },
        N = (e, r) => {
          var t = (0, y.useState)(!1),
            o = (0, k.Z)(t, 2),
            a = o[0],
            l = o[1],
            n = (0, y.useState)(),
            s = (0, k.Z)(n, 2),
            m = s[0],
            i = s[1],
            c = (0, y.useState)(),
            d = (0, k.Z)(c, 2),
            p = d[0],
            u = d[1],
            f = r || {},
            h = f.lazy,
            b = f.defaulParams,
            P = f.onSuccess,
            g = f.onError,
            j = f.formaResult,
            Z = (r) => {
              l(!0),
                e(r)
                  .then((e) => {
                    i(j ? j(e) : e), P && P(e);
                  })
                  .catch((e) => {
                    u(e), g && g(e);
                  })
                  .finally(() => {
                    l(!1);
                  });
            };
          return (
            (0, y.useEffect)(() => {
              h || Z(b);
            }, [h]),
            { lazyService: Z, data: m, error: p, loading: a, setLoading: l }
          );
        },
        M = t(47174),
        L = ['loading', 'data', 'lazyService'],
        B = (e) => {
          var r = e.queryListService,
            t = e.formatSubmitValue,
            o = e.onSuccess,
            n = e.onError,
            s = e.spaceProps,
            m = e.tableProps,
            i = e.tableCardProps,
            c = e.formItemsConfig,
            d = void 0 === c ? [] : c,
            p = e.defaulParams,
            u = e.formaResult,
            f = e.actionColProps,
            h = e.colProps,
            b = e.rowProps,
            P = N(r, {
              defaulParams: p,
              onSuccess(e) {
                null === o || void 0 === o || o(e);
              },
              onError(e) {
                n ? n(e) : M.ZP.error('\u8bf7\u6c42\u5217\u8868\u6570\u636e\u51fa\u9519');
              },
              formaResult: u,
            }),
            g = P.loading,
            j = P.data,
            Z = P.lazyService,
            k = (0, l.Z)(P, L),
            C = (0, y.useMemo)(
              () =>
                y.createElement(F, {
                  tableProps: (0, a.Z)((0, a.Z)({}, m), {}, { loading: g, dataSource: j }),
                  tableCardProps: i,
                  spaceProps: s,
                  searchBarProps: {
                    onFinish: (e) => {
                      Z(t ? t(e) : e);
                    },
                    formItemsConfig: d,
                    onReset: () => {
                      Z(p);
                    },
                    colProps: h,
                    rowProps: b,
                    actionColProps: f,
                  },
                }),
              [s, m, i, d],
            );
          return (0, a.Z)(
            (0, a.Z)({ loading: g, dataSource: j, queryList: Z }, k),
            {},
            { listContainer: C },
          );
        };
    },
    38660: function (e, r, t) {
      var o = {
        './af': 77204,
        './af.js': 77204,
        './ar': 48023,
        './ar-dz': 92196,
        './ar-dz.js': 92196,
        './ar-kw': 96425,
        './ar-kw.js': 96425,
        './ar-ly': 76979,
        './ar-ly.js': 76979,
        './ar-ma': 13886,
        './ar-ma.js': 13886,
        './ar-sa': 2626,
        './ar-sa.js': 2626,
        './ar-tn': 53457,
        './ar-tn.js': 53457,
        './ar.js': 48023,
        './az': 23652,
        './az.js': 23652,
        './be': 305,
        './be.js': 305,
        './bg': 40466,
        './bg.js': 40466,
        './bm': 63776,
        './bm.js': 63776,
        './bn': 70605,
        './bn-bd': 47734,
        './bn-bd.js': 47734,
        './bn.js': 70605,
        './bo': 67035,
        './bo.js': 67035,
        './br': 32874,
        './br.js': 32874,
        './bs': 6059,
        './bs.js': 6059,
        './ca': 87633,
        './ca.js': 87633,
        './cs': 37322,
        './cs.js': 37322,
        './cv': 45146,
        './cv.js': 45146,
        './cy': 86928,
        './cy.js': 86928,
        './da': 35013,
        './da.js': 35013,
        './de': 87439,
        './de-at': 56617,
        './de-at.js': 56617,
        './de-ch': 83118,
        './de-ch.js': 83118,
        './de.js': 87439,
        './dv': 88215,
        './dv.js': 88215,
        './el': 60895,
        './el.js': 60895,
        './en-au': 72866,
        './en-au.js': 72866,
        './en-ca': 8197,
        './en-ca.js': 8197,
        './en-gb': 64087,
        './en-gb.js': 64087,
        './en-ie': 72448,
        './en-ie.js': 72448,
        './en-il': 61285,
        './en-il.js': 61285,
        './en-in': 79068,
        './en-in.js': 79068,
        './en-nz': 79154,
        './en-nz.js': 79154,
        './en-sg': 92806,
        './en-sg.js': 92806,
        './eo': 95074,
        './eo.js': 95074,
        './es': 63751,
        './es-do': 11089,
        './es-do.js': 11089,
        './es-mx': 66422,
        './es-mx.js': 66422,
        './es-us': 86628,
        './es-us.js': 86628,
        './es.js': 63751,
        './et': 36224,
        './et.js': 36224,
        './eu': 90146,
        './eu.js': 90146,
        './fa': 22949,
        './fa.js': 22949,
        './fi': 4895,
        './fi.js': 4895,
        './fil': 5004,
        './fil.js': 5004,
        './fo': 52699,
        './fo.js': 52699,
        './fr': 18681,
        './fr-ca': 10786,
        './fr-ca.js': 10786,
        './fr-ch': 5148,
        './fr-ch.js': 5148,
        './fr.js': 18681,
        './fy': 87726,
        './fy.js': 87726,
        './ga': 18611,
        './ga.js': 18611,
        './gd': 13611,
        './gd.js': 13611,
        './gl': 11448,
        './gl.js': 11448,
        './gom-deva': 27788,
        './gom-deva.js': 27788,
        './gom-latn': 37482,
        './gom-latn.js': 37482,
        './gu': 81830,
        './gu.js': 81830,
        './he': 75854,
        './he.js': 75854,
        './hi': 87984,
        './hi.js': 87984,
        './hr': 98328,
        './hr.js': 98328,
        './hu': 81060,
        './hu.js': 81060,
        './hy-am': 2807,
        './hy-am.js': 2807,
        './id': 11951,
        './id.js': 11951,
        './is': 96930,
        './is.js': 96930,
        './it': 95359,
        './it-ch': 85676,
        './it-ch.js': 85676,
        './it.js': 95359,
        './ja': 72158,
        './ja.js': 72158,
        './jv': 96894,
        './jv.js': 96894,
        './ka': 40149,
        './ka.js': 40149,
        './kk': 29853,
        './kk.js': 29853,
        './km': 15972,
        './km.js': 15972,
        './kn': 17987,
        './kn.js': 17987,
        './ko': 79583,
        './ko.js': 79583,
        './ku': 2742,
        './ku.js': 2742,
        './ky': 81555,
        './ky.js': 81555,
        './lb': 97738,
        './lb.js': 97738,
        './lo': 96794,
        './lo.js': 96794,
        './lt': 88709,
        './lt.js': 88709,
        './lv': 11050,
        './lv.js': 11050,
        './me': 31782,
        './me.js': 31782,
        './mi': 63644,
        './mi.js': 63644,
        './mk': 69810,
        './mk.js': 69810,
        './ml': 80813,
        './ml.js': 80813,
        './mn': 81767,
        './mn.js': 81767,
        './mr': 79954,
        './mr.js': 79954,
        './ms': 16480,
        './ms-my': 51166,
        './ms-my.js': 51166,
        './ms.js': 16480,
        './mt': 14993,
        './mt.js': 14993,
        './my': 37739,
        './my.js': 37739,
        './nb': 10559,
        './nb.js': 10559,
        './ne': 80948,
        './ne.js': 80948,
        './nl': 78927,
        './nl-be': 33493,
        './nl-be.js': 33493,
        './nl.js': 78927,
        './nn': 47609,
        './nn.js': 47609,
        './oc-lnc': 18475,
        './oc-lnc.js': 18475,
        './pa-in': 32750,
        './pa-in.js': 32750,
        './pl': 21294,
        './pl.js': 21294,
        './pt': 15659,
        './pt-br': 52491,
        './pt-br.js': 52491,
        './pt.js': 15659,
        './ro': 59140,
        './ro.js': 59140,
        './ru': 85907,
        './ru.js': 85907,
        './sd': 15190,
        './sd.js': 15190,
        './se': 18808,
        './se.js': 18808,
        './si': 90644,
        './si.js': 90644,
        './sk': 76181,
        './sk.js': 76181,
        './sl': 58030,
        './sl.js': 58030,
        './sq': 77383,
        './sq.js': 77383,
        './sr': 1148,
        './sr-cyrl': 81397,
        './sr-cyrl.js': 81397,
        './sr.js': 1148,
        './ss': 25,
        './ss.js': 25,
        './sv': 78335,
        './sv.js': 78335,
        './sw': 13151,
        './sw.js': 13151,
        './ta': 78574,
        './ta.js': 78574,
        './te': 69943,
        './te.js': 69943,
        './tet': 37132,
        './tet.js': 37132,
        './tg': 88476,
        './tg.js': 88476,
        './th': 71834,
        './th.js': 71834,
        './tk': 1652,
        './tk.js': 1652,
        './tl-ph': 65174,
        './tl-ph.js': 65174,
        './tlh': 37442,
        './tlh.js': 37442,
        './tr': 23671,
        './tr.js': 23671,
        './tzl': 50604,
        './tzl.js': 50604,
        './tzm': 68643,
        './tzm-latn': 78301,
        './tzm-latn.js': 78301,
        './tzm.js': 68643,
        './ug-cn': 85463,
        './ug-cn.js': 85463,
        './uk': 10899,
        './uk.js': 10899,
        './ur': 37888,
        './ur.js': 37888,
        './uz': 10850,
        './uz-latn': 55580,
        './uz-latn.js': 55580,
        './uz.js': 10850,
        './vi': 94122,
        './vi.js': 94122,
        './x-pseudo': 84207,
        './x-pseudo.js': 84207,
        './yo': 71765,
        './yo.js': 71765,
        './zh-cn': 11072,
        './zh-cn.js': 11072,
        './zh-hk': 77705,
        './zh-hk.js': 77705,
        './zh-mo': 81815,
        './zh-mo.js': 81815,
        './zh-tw': 3408,
        './zh-tw.js': 3408,
      };
      function a(e) {
        var r = l(e);
        return t(r);
      }
      function l(e) {
        if (!t.o(o, e)) {
          var r = new Error("Cannot find module '" + e + "'");
          throw ((r.code = 'MODULE_NOT_FOUND'), r);
        }
        return o[e];
      }
      (a.keys = function () {
        return Object.keys(o);
      }),
        (a.resolve = l),
        (e.exports = a),
        (a.id = 38660);
    },
  },
]);
