(self['webpackChunkart_antd_react'] = self['webpackChunkart_antd_react'] || []).push([
  [50],
  {
    64382: function (e, r, t) {
      'use strict';
      t.r(r);
      var o = t(52663),
        a = t(67294),
        l = t(64496),
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
    47798: function (e, r, t) {
      'use strict';
      t.r(r);
      var o = t(52663),
        a = t(67294),
        l = t(64496),
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
    25044: function (e, r, t) {
      'use strict';
      t.r(r);
      var o = t(52663),
        a = t(3911),
        l = t(38573),
        n = t(67294),
        s = t(64687),
        m = t(64496),
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
    18353: function (e, r, t) {
      'use strict';
      t.r(r);
      var o = t(52663),
        a = t(13378),
        l = t(3911),
        n = t(38573),
        s = t(67294),
        m = t(64687),
        i = t(45733),
        c = t(76563),
        d = t(40485),
        p = t(64496),
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
    29061: function (e, r, t) {
      'use strict';
      t.r(r);
      var o = t(38573),
        a = t(67294),
        l = t(64687),
        n = t(87555),
        s = t(65507),
        m = t(40485),
        i = t(64496),
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
    13526: function (e, r, t) {
      'use strict';
      t.r(r);
      var o = t(38573),
        a = t(67294),
        l = t(64687),
        n = t(72067),
        s = t(87555),
        m = t(65507),
        i = t(40485),
        c = t(64496),
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
    62530: function (e, r, t) {
      'use strict';
      t.r(r);
      var o = t(52663),
        a = t(3911),
        l = t(13378),
        n = t(38573),
        s = t(67294),
        m = t(64496),
        i = t(64687),
        c = t(45733),
        d = t(76563),
        p = t(40485),
        u = t(87555),
        f = t(65507),
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
    83164: function (e, r, t) {
      'use strict';
      t.r(r);
      var o = t(52663),
        a = t(3911),
        l = t(67294),
        n = t(99196),
        s = t(74356),
        m = t(45733),
        i = t(40485),
        c = t(91784),
        d = t(64496),
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
    91593: function (e, r, t) {
      'use strict';
      t.r(r);
      var o = t(52663),
        a = t(3911),
        l = t(67294),
        n = t(74356),
        s = t(45733),
        m = t(40485),
        i = t(91784),
        c = t(64496),
        d = t(99196),
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
    72294: function (e, r, t) {
      'use strict';
      t.r(r);
      var o = t(67294),
        a = t(91784),
        l = t(40485),
        n = t(64496),
        s = t(99196),
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
    99196: function (e, r, t) {
      'use strict';
      t.d(r, {
        Y: function () {
          return l;
        },
      });
      var o = t(99829),
        a = t(68699),
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
    64496: function (e, r, t) {
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
      var o = t(13378),
        a = t(52663),
        l = t(3911),
        n = t(76563),
        s = t(38654),
        m = t(42091),
        i = t(81469),
        c = t(69984),
        d = t(47153),
        p = t(36775),
        u = t(8578),
        f = t(33034),
        h = t(65507),
        b = t(64687),
        y = t(67294),
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
        k = t(38573),
        C = t(87555),
        I = t(45733),
        v = t(40485),
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
        T = t(42658),
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
        R = t(72067),
        z = t(85129),
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
        M = t(91784),
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
    46700: function (e, r, t) {
      var o = {
        './af': 60757,
        './af.js': 60757,
        './ar': 22490,
        './ar-dz': 15633,
        './ar-dz.js': 15633,
        './ar-kw': 12602,
        './ar-kw.js': 12602,
        './ar-ly': 34074,
        './ar-ly.js': 34074,
        './ar-ma': 98317,
        './ar-ma.js': 98317,
        './ar-sa': 29752,
        './ar-sa.js': 29752,
        './ar-tn': 66061,
        './ar-tn.js': 66061,
        './ar.js': 22490,
        './az': 92136,
        './az.js': 92136,
        './be': 57080,
        './be.js': 57080,
        './bg': 48473,
        './bg.js': 48473,
        './bm': 38856,
        './bm.js': 38856,
        './bn': 17146,
        './bn-bd': 5223,
        './bn-bd.js': 5223,
        './bn.js': 17146,
        './bo': 30594,
        './bo.js': 30594,
        './br': 48831,
        './br.js': 48831,
        './bs': 67530,
        './bs.js': 67530,
        './ca': 82766,
        './ca.js': 82766,
        './cs': 3830,
        './cs.js': 3830,
        './cv': 74487,
        './cv.js': 74487,
        './cy': 60146,
        './cy.js': 60146,
        './da': 66186,
        './da.js': 66186,
        './de': 86621,
        './de-at': 72833,
        './de-at.js': 72833,
        './de-ch': 78113,
        './de-ch.js': 78113,
        './de.js': 86621,
        './dv': 32345,
        './dv.js': 32345,
        './el': 69981,
        './el.js': 69981,
        './en-au': 16498,
        './en-au.js': 16498,
        './en-ca': 94555,
        './en-ca.js': 94555,
        './en-gb': 93204,
        './en-gb.js': 93204,
        './en-ie': 89988,
        './en-ie.js': 89988,
        './en-il': 3777,
        './en-il.js': 3777,
        './en-in': 23231,
        './en-in.js': 23231,
        './en-nz': 30533,
        './en-nz.js': 30533,
        './en-sg': 73034,
        './en-sg.js': 73034,
        './eo': 21496,
        './eo.js': 21496,
        './es': 65678,
        './es-do': 76879,
        './es-do.js': 76879,
        './es-mx': 55440,
        './es-mx.js': 55440,
        './es-us': 66963,
        './es-us.js': 66963,
        './es.js': 65678,
        './et': 41003,
        './et.js': 41003,
        './eu': 90013,
        './eu.js': 90013,
        './fa': 29692,
        './fa.js': 29692,
        './fi': 68102,
        './fi.js': 68102,
        './fil': 22918,
        './fil.js': 22918,
        './fo': 87496,
        './fo.js': 87496,
        './fr': 67474,
        './fr-ca': 1853,
        './fr-ca.js': 1853,
        './fr-ch': 44675,
        './fr-ch.js': 44675,
        './fr.js': 67474,
        './fy': 97061,
        './fy.js': 97061,
        './ga': 96867,
        './ga.js': 96867,
        './gd': 18364,
        './gd.js': 18364,
        './gl': 96383,
        './gl.js': 96383,
        './gom-deva': 64220,
        './gom-deva.js': 64220,
        './gom-latn': 87202,
        './gom-latn.js': 87202,
        './gu': 25249,
        './gu.js': 25249,
        './he': 96022,
        './he.js': 96022,
        './hi': 65395,
        './hi.js': 65395,
        './hr': 29361,
        './hr.js': 29361,
        './hu': 93797,
        './hu.js': 93797,
        './hy-am': 85874,
        './hy-am.js': 85874,
        './id': 77084,
        './id.js': 77084,
        './is': 12592,
        './is.js': 12592,
        './it': 54296,
        './it-ch': 35272,
        './it-ch.js': 35272,
        './it.js': 54296,
        './ja': 17620,
        './ja.js': 17620,
        './jv': 46898,
        './jv.js': 46898,
        './ka': 62752,
        './ka.js': 62752,
        './kk': 5632,
        './kk.js': 5632,
        './km': 16667,
        './km.js': 16667,
        './kn': 88963,
        './kn.js': 88963,
        './ko': 35953,
        './ko.js': 35953,
        './ku': 72004,
        './ku.js': 72004,
        './ky': 71803,
        './ky.js': 71803,
        './lb': 12835,
        './lb.js': 12835,
        './lo': 98185,
        './lo.js': 98185,
        './lt': 40538,
        './lt.js': 40538,
        './lv': 74582,
        './lv.js': 74582,
        './me': 23663,
        './me.js': 23663,
        './mi': 35840,
        './mi.js': 35840,
        './mk': 88701,
        './mk.js': 88701,
        './ml': 2209,
        './ml.js': 2209,
        './mn': 38391,
        './mn.js': 38391,
        './mr': 14481,
        './mr.js': 14481,
        './ms': 20135,
        './ms-my': 29977,
        './ms-my.js': 29977,
        './ms.js': 20135,
        './mt': 81029,
        './mt.js': 81029,
        './my': 27402,
        './my.js': 27402,
        './nb': 18929,
        './nb.js': 18929,
        './ne': 29030,
        './ne.js': 29030,
        './nl': 18208,
        './nl-be': 92510,
        './nl-be.js': 92510,
        './nl.js': 18208,
        './nn': 46456,
        './nn.js': 46456,
        './oc-lnc': 98952,
        './oc-lnc.js': 98952,
        './pa-in': 9734,
        './pa-in.js': 9734,
        './pl': 67042,
        './pl.js': 67042,
        './pt': 97351,
        './pt-br': 63673,
        './pt-br.js': 63673,
        './pt.js': 97351,
        './ro': 62080,
        './ro.js': 62080,
        './ru': 78025,
        './ru.js': 78025,
        './sd': 51922,
        './sd.js': 51922,
        './se': 82651,
        './se.js': 82651,
        './si': 16258,
        './si.js': 16258,
        './sk': 23337,
        './sk.js': 23337,
        './sl': 8683,
        './sl.js': 8683,
        './sq': 10119,
        './sq.js': 10119,
        './sr': 72660,
        './sr-cyrl': 9322,
        './sr-cyrl.js': 9322,
        './sr.js': 72660,
        './ss': 33350,
        './ss.js': 33350,
        './sv': 19607,
        './sv.js': 19607,
        './sw': 16552,
        './sw.js': 16552,
        './ta': 25391,
        './ta.js': 25391,
        './te': 78149,
        './te.js': 78149,
        './tet': 27113,
        './tet.js': 27113,
        './tg': 4503,
        './tg.js': 4503,
        './th': 33665,
        './th.js': 33665,
        './tk': 68356,
        './tk.js': 68356,
        './tl-ph': 62917,
        './tl-ph.js': 62917,
        './tlh': 42669,
        './tlh.js': 42669,
        './tr': 34573,
        './tr.js': 34573,
        './tzl': 16022,
        './tzl.js': 16022,
        './tzm': 881,
        './tzm-latn': 30897,
        './tzm-latn.js': 30897,
        './tzm.js': 881,
        './ug-cn': 45472,
        './ug-cn.js': 45472,
        './uk': 1300,
        './uk.js': 1300,
        './ur': 96961,
        './ur.js': 96961,
        './uz': 51699,
        './uz-latn': 87476,
        './uz-latn.js': 87476,
        './uz.js': 51699,
        './vi': 91544,
        './vi.js': 91544,
        './x-pseudo': 22086,
        './x-pseudo.js': 22086,
        './yo': 85911,
        './yo.js': 85911,
        './zh-cn': 38098,
        './zh-cn.js': 38098,
        './zh-hk': 53720,
        './zh-hk.js': 53720,
        './zh-mo': 10794,
        './zh-mo.js': 10794,
        './zh-tw': 36087,
        './zh-tw.js': 36087,
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
        (a.id = 46700);
    },
  },
]);
