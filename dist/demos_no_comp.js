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
        l = (t(67604), t(64687)),
        n = t(38573),
        s = t(67294),
        m = t(64496),
        i = ['formItemChildProps'],
        c = () => {
          var e = l.Z.useForm(),
            r = (0, n.Z)(e, 1),
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
          return s.createElement(m.if, {
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
        a = (t(25324), t(45733)),
        l = (t(13753), t(48429)),
        n = t(13378),
        s = (t(68137), t(76563)),
        m = t(3911),
        i = (t(67604), t(64687)),
        c = t(38573),
        p = t(67294),
        d = t(64496),
        u = ['key', 'name'],
        f = ['formItemChildProps', 'formItemProps'],
        h = () => {
          var e = i.Z.useForm(),
            r = (0, c.Z)(e, 1),
            t = r[0],
            h = [
              { label: 'mock1', value: 'mock1' },
              { label: 'mock2', value: 'mock2' },
            ],
            b = [
              {
                renderType: d.y2.Switch,
                itemColProps: { span: 4 },
                formItemProps: { valuePropName: 'checked', name: 'label5', label: 'label5' },
              },
              {
                renderType: d.y2.RadioGroup,
                itemColProps: { span: 10 },
                formItemProps: { name: 'label7', label: 'label7', wrapperCol: { span: 24 } },
                formItemChildProps: { style: { width: '100%' }, options: h },
              },
              {
                renderType: d.y2.CustomItemChildren,
                itemColProps: { span: 24 },
                formItemProps: { label: 'label8' },
                customItemChildren: p.createElement(i.Z.List, { name: 'label8' }, (e, r) => {
                  var t = r.add,
                    o = r.remove;
                  return p.createElement(
                    p.Fragment,
                    null,
                    e.map((e) => {
                      var r = e.key,
                        t = e.name,
                        c = (0, m.Z)(e, u);
                      return p.createElement(
                        a.Z,
                        { key: r, style: { display: 'flex', marginBottom: 8 }, align: 'baseline' },
                        p.createElement(
                          i.Z.Item,
                          (0, n.Z)({}, c, {
                            name: [t, 'first'],
                            rules: [{ required: !0, message: 'Missing first name' }],
                          }),
                          p.createElement(s.Z, { placeholder: 'First Name' }),
                        ),
                        p.createElement(l.Z, { type: 'link', onClick: () => o(t) }, '\u5220\u9664'),
                      );
                    }),
                    p.createElement(
                      i.Z.Item,
                      null,
                      p.createElement(l.Z, { type: 'dashed', onClick: () => t() }, '+ Add field'),
                    ),
                  );
                }),
              },
              {
                renderType: d.y2.Input,
                key: '1',
                formItemProps: { name: 'label1', label: 'label1' },
                formItemChildProps: { placeholder: '\u8bf7\u8f93\u5165\u540d\u5b57' },
              },
              {
                renderType: d.y2.Select,
                formItemProps: { name: 'label2', label: 'label2' },
                formItemChildProps: { placeholder: '\u8bf7\u9009\u62e9', options: h },
              },
              {
                renderType: d.y2.Slider,
                key: '3',
                formItemProps: { name: 'label3', label: 'label3' },
              },
              {
                renderType: d.y2.TimeRangePicker,
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
                a = (0, m.Z)(e, f);
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
          return p.createElement(d.if, {
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
            actionBar: p.createElement(
              l.Z,
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
      t(5317);
      var o = t(87555),
        a = (t(52222), t(65507)),
        l = (t(13753), t(48429)),
        n = (t(67604), t(64687)),
        s = t(38573),
        m = t(67294),
        i = t(64496),
        c = () => {
          var e = n.Z.useForm(),
            r = (0, s.Z)(e, 1),
            t = r[0],
            c = [
              { label: 'mock1', value: 'mock1' },
              { label: 'mock2', value: 'mock2' },
              { label: 'mock3', value: 'mock3' },
            ],
            p = [
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
          return m.createElement(
            n.Z,
            {
              form: t,
              onFinish: (e) => {
                console.log('demo1 values: ', e);
              },
            },
            m.createElement(
              o.Z,
              { gutter: 18 },
              m.createElement(i.xh, { colProps: { span: 6 }, formItemsConfig: p }),
              m.createElement(
                a.Z,
                { span: 6 },
                m.createElement(l.Z, { type: 'primary', htmlType: 'submit' }, '\u63d0\u4ea4'),
              ),
            ),
          );
        };
      r['default'] = c;
    },
    13526: function (e, r, t) {
      'use strict';
      t.r(r);
      t(52222);
      var o = t(65507),
        a = (t(13753), t(48429)),
        l = (t(64527), t(72067)),
        n = (t(5317), t(87555)),
        s = (t(67604), t(64687)),
        m = t(38573),
        i = t(67294),
        c = t(64496),
        p = () => {
          var e = s.Z.useForm(),
            r = (0, m.Z)(e, 1),
            t = r[0],
            p = [
              { label: 'mock1', value: 'mock1' },
              { label: 'mock2', value: 'mock2' },
            ],
            d = [
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
                formItemChildProps: { placeholder: '\u8bf7\u9009\u62e9', options: p },
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
                formItemChildProps: { options: p },
              },
              {
                renderType: c.y2.RadioGroup,
                itemColProps: { span: 10 },
                formItemProps: { name: 'label7', label: 'label7', wrapperCol: { span: 24 } },
                formItemChildProps: { style: { width: '100%' }, options: p },
              },
              {
                renderType: c.y2.CustomItemChildren,
                itemColProps: { span: 24 },
                formItemProps: { name: 'label8', label: 'label8', wrapperCol: { span: 24 } },
                customItemChildren: i.createElement(
                  'div',
                  null,
                  '\u4f7f\u7528RenderType.CustomItemChildren\u540e\uff0c\u8fd9\u91cc\u53ef\u4ee5\u968f\u610f\u5b9a\u4e49\uff0c\u9650\u5236\u4f4f\u7684\u53ea\u6709\u4f60\u7684\u60f3\u8c61\u529b!',
                ),
              },
            ],
            f = [
              { title: 'group1', itemsConfig: d },
              { title: 'group2', itemsConfig: u },
            ];
          return i.createElement(
            s.Z,
            {
              form: t,
              onFinish: (e) => {
                console.log('demo2 values: ', e);
              },
            },
            f.map((e) => {
              var r = e.title,
                t = e.itemsConfig;
              return i.createElement(
                l.Z,
                { title: r, key: r, style: { margin: 16 } },
                i.createElement(
                  n.Z,
                  { gutter: 16 },
                  i.createElement(c.xh, { colProps: { span: 8 }, formItemsConfig: t }),
                ),
              );
            }),
            i.createElement(
              o.Z,
              { span: 6, push: 1 },
              i.createElement(a.Z, { type: 'primary', htmlType: 'submit' }, '\u63d0\u4ea4'),
            ),
          );
        };
      r['default'] = p;
    },
    62530: function (e, r, t) {
      'use strict';
      t.r(r);
      t(52222);
      var o = t(65507),
        a = (t(5317), t(87555)),
        l = t(52663),
        n = t(3911),
        s = (t(25324), t(45733)),
        m = (t(13753), t(48429)),
        i = t(13378),
        c = (t(68137), t(76563)),
        p = (t(67604), t(64687)),
        d = t(38573),
        u = t(67294),
        f = t(64496),
        h = ['formItemProps'],
        b = () => {
          var e = p.Z.useForm(),
            r = (0, d.Z)(e, 1),
            t = r[0],
            b = [
              { label: 'mock1', value: 'mock1' },
              { label: 'mock2', value: 'mock2' },
            ],
            y = [
              {
                renderType: f.y2.Input,
                key: '1',
                itemTitle: u.createElement(
                  'div',
                  null,
                  'itemTitle \u4e00\u822c\u653e\u5728label\u524d\u52a0\u4ee5\u8bf4\u660e',
                ),
                formItemProps: {
                  name: 'label1',
                  label: u.createElement('div', null, 'label1'),
                  colon: !0,
                  dependencies: ['label2'],
                  extra: u.createElement('div', null, '\u989d\u5916\u7684\u4fe1\u606f'),
                  tooltip: 'demo3',
                  rules: [{ required: !0, message: '\u4e0d\u80fd\u4e3a\u7a7a' }],
                },
                formItemChildProps: { placeholder: '\u8bf7\u8f93\u5165\u540d\u5b57' },
              },
              {
                renderType: f.y2.Select,
                key: '2',
                formItemProps: { name: 'label2', label: 'label2' },
                formItemChildProps: { placeholder: '\u8bf7\u9009\u62e9', options: b },
              },
              {
                renderType: f.y2.TimeRangePicker,
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
                renderType: f.y2.CustomItemChildren,
                key: 'CustomItemChildren',
                itemColProps: { span: 24 },
                formItemProps: { label: 'label4' },
                customItemChildren: u.createElement(p.Z.List, { name: 'sights' }, (e, r) => {
                  var t = r.add,
                    o = r.remove;
                  return u.createElement(
                    u.Fragment,
                    null,
                    e.map((e) =>
                      u.createElement(
                        s.Z,
                        { key: e.key, align: 'baseline', style: { marginRight: 10 } },
                        u.createElement(
                          p.Z.Item,
                          (0, i.Z)({}, e, {
                            label: 'Price',
                            name: [e.name, 'price'],
                            rules: [
                              { required: !0, message: '\u4ef7\u683c\u4e0d\u80fd\u4e3a\u7a7a' },
                            ],
                          }),
                          u.createElement(c.Z, null),
                        ),
                        u.createElement(
                          m.Z,
                          { onClick: () => o(e.name), type: 'primary', danger: !0 },
                          '\u79fb\u9664',
                        ),
                      ),
                    ),
                    u.createElement(
                      p.Z.Item,
                      null,
                      u.createElement(
                        m.Z,
                        { type: 'dashed', onClick: () => t(), block: !0 },
                        '\u65b0\u589e\u9879',
                      ),
                    ),
                  );
                }),
              },
            ].map((e) => {
              var r = e.formItemProps,
                t = (0, n.Z)(e, h);
              return (0, l.Z)(
                (0, l.Z)({}, t),
                {},
                {
                  formItemProps: (0, l.Z)({ labelCol: { span: 24 }, wrapperCol: { span: 24 } }, r),
                },
              );
            });
          return u.createElement(
            p.Z,
            {
              form: t,
              onFinish: (e) => {
                console.log('demo3 values: ', e);
              },
            },
            u.createElement(
              a.Z,
              { gutter: 16 },
              u.createElement(f.xh, { colProps: { span: 24 }, formItemsConfig: y }),
            ),
            u.createElement(
              o.Z,
              { span: 6 },
              u.createElement(m.Z, { type: 'primary', htmlType: 'submit' }, '\u63d0\u4ea4'),
            ),
          );
        };
      r['default'] = b;
    },
    83164: function (e, r, t) {
      'use strict';
      t.r(r);
      t(14643);
      var o = t(38488),
        a = t(52663),
        l = t(3911),
        n = (t(25324), t(45733)),
        s = (t(13753), t(48429)),
        m = (t(14943), t(74356)),
        i = t(67294),
        c = t(99196),
        p = t(64496),
        d = ['formItemChildProps'],
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
                  i.createElement(
                    m.Z,
                    { color: 'success' },
                    (null === e || void 0 === e ? void 0 : e.name) || '-',
                  ),
              },
              {
                title: 'Action',
                key: 'action',
                render: () =>
                  i.createElement(
                    n.Z,
                    { size: 'middle' },
                    ['\u5220\u9664', '\u8be6\u60c5', '\u5176\u4ed6\u64cd\u4f5c'].map((e) =>
                      i.createElement(
                        s.Z,
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
                renderType: p.y2.Input,
                formItemProps: { name: 'label'.concat(r), label: 'label'.concat(r) },
                formItemChildProps: { placeholder: 'please input label'.concat(r) },
              }))
              .map((e) => {
                var r = e.formItemChildProps,
                  t = (0, l.Z)(e, d);
                return (0, a.Z)(
                  (0, a.Z)({}, t),
                  {},
                  { formItemChildProps: (0, a.Z)({ style: { width: '100%' } }, r) },
                );
              }),
            t = (0, p.QT)(c.Y, {
              onError(e) {
                o.ZP.error(
                  (null === e || void 0 === e ? void 0 : e.message) || '\u8bf7\u6c42\u51fa\u9519',
                );
              },
            }),
            u = t.data,
            f = t.loading;
          return i.createElement(p.o, {
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
              extra: i.createElement(
                s.Z,
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
        l = (t(25324), t(45733)),
        n = (t(13753), t(48429)),
        s = (t(14643), t(38488)),
        m = (t(14943), t(74356)),
        i = t(67294),
        c = t(64496),
        p = t(99196),
        d = ['formItemChildProps'],
        u = () => {
          var e = (0, i.useRef)({}),
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
                  i.createElement(
                    m.Z,
                    { color: 'success' },
                    (null === e || void 0 === e ? void 0 : e.name) || '-',
                  ),
              },
              {
                title: 'Action',
                key: 'action',
                render: () =>
                  i.createElement(
                    l.Z,
                    { size: 'middle' },
                    ['delete', '\u8be6\u60c5', '\u5176\u4ed6\u64cd\u4f5c'].map((r) =>
                      i.createElement(
                        n.Z,
                        {
                          key: r,
                          type: 'link',
                          onClick: () => {
                            console.log('you click add '.concat(r)),
                              'delete' === r &&
                                (s.ZP.success(
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
                  t = (0, a.Z)(e, d);
                return (0, o.Z)(
                  (0, o.Z)({}, t),
                  {},
                  { formItemChildProps: (0, o.Z)({ style: { width: '100%' } }, r) },
                );
              }),
            u = (0, c.CR)({
              queryListService: p.Y,
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
    20154: function (e, r, t) {
      'use strict';
      t.r(r);
      t(26780);
      var o = t(31980),
        a = (t(67604), t(64687)),
        l = (t(68137), t(76563)),
        n = (t(13753), t(48429)),
        s = t(38573),
        m = t(67294),
        i = t(64496),
        c = () => {
          var e = (0, m.useState)(!1),
            r = (0, s.Z)(e, 2),
            t = r[0],
            c = r[1];
          i.y2.Input, i.y2.InputNumber, i.y2.Select, i.y2.Input, i.y2.Input, i.y2.Input;
          return m.createElement(
            m.Fragment,
            null,
            m.createElement(
              n.Z,
              {
                onClick: () => {
                  c(!0);
                },
              },
              '\u7f16\u8f91\u4fe1\u606f',
            ),
            m.createElement(
              o.Z,
              { visible: t },
              m.createElement(
                a.Z,
                null,
                m.createElement(a.Z.Item, { name: 'name' }, m.createElement(l.Z, null)),
              ),
            ),
          );
        };
      r['default'] = c;
    },
    72294: function (e, r, t) {
      'use strict';
      t.r(r);
      t(13753);
      var o = t(48429),
        a = (t(14643), t(38488)),
        l = t(67294),
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
            l.createElement(
              'section',
              null,
              l.createElement(o.Z, { onClick: () => m() }, '\u70b9\u51fb\u8bf7\u6c42\u6570\u636e'),
              l.createElement(
                'main',
                null,
                '\u8bf7\u6c42\u7ed3\u679c\uff1a',
                l.createElement('code', null, t ? 'loading ...' : JSON.stringify(r, null, 2)),
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
      t(52222);
      var o = t(65507),
        a = t(13378),
        l = (t(67604), t(64687)),
        n = t(52663),
        s = t(3911),
        m = (t(67331), t(33034)),
        i = (t(74393), t(8578)),
        c = (t(65679), t(36775)),
        p = (t(59560), t(47153)),
        d = (t(90140), t(69984)),
        u = (t(97140), t(81469)),
        f = (t(44862), t(42091)),
        h = (t(11826), t(38654)),
        b = (t(68137), t(76563)),
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
              return y.createElement(b.Z, a);
            case g.InputNumber:
              return y.createElement(h.Z, a);
            case g.Checkbox:
              return y.createElement(f.Z, a);
            case g.CheckboxGroup:
              return y.createElement(f.Z.Group, a);
            case g.Select:
              return y.createElement(u.Z, a);
            case g.Radio:
              return y.createElement(d.ZP, a);
            case g.RadioGroup:
              return y.createElement(d.ZP.Group, a);
            case g.Switch:
              return y.createElement(p.Z, a);
            case g.TimePicker:
              return y.createElement(c.Z, a);
            case g.TimeRangePicker:
              return y.createElement(c.Z.RangePicker, a);
            case g.DatePicker:
              return y.createElement(i.Z, a);
            case g.DateRangePicker:
              return y.createElement(i.Z.RangePicker, a);
            case g.Slider:
              return y.createElement(m.Z, a);
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
                  var m,
                    i = e.key,
                    c = e.itemTitle,
                    p = e.itemColProps,
                    d = e.formItemProps,
                    u = (0, s.Z)(e, P);
                  return y.createElement(
                    o.Z,
                    (0, a.Z)(
                      {
                        key:
                          i ||
                          (null === d || void 0 === d || null === (m = d.name) || void 0 === m
                            ? void 0
                            : m.toString()) ||
                          r,
                      },
                      p || t || {},
                    ),
                    c,
                    y.createElement(l.Z.Item, d, j((0, n.Z)({}, u))),
                  );
                }),
          );
        },
        k = (t(5317), t(87555)),
        C = (t(25324), t(45733)),
        I = (t(13753), t(48429)),
        v = t(38573),
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
            m = e.rowProps,
            i = e.showExpend,
            c = e.showSubmit,
            p = e.showRest,
            d = e.actionBar,
            u = e.formItemsConfig,
            f = e.foldNumber,
            h = void 0 === f ? 2 : f,
            b = e.actionColProps,
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
            G = (0, s.Z)(e, E),
            A = l.Z.useForm(r),
            q = (0, v.Z)(A, 1),
            D = q[0],
            O = (0, y.useState)(!0),
            _ = (0, v.Z)(O, 2),
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
              (Q.current = (0, n.Z)((0, n.Z)({}, Q.current), e || {})), M && M(e, r);
            },
            K = (0, y.useMemo)(() => (V ? u : u.slice(0, h)), [h, u, V]);
          return y.createElement(
            l.Z,
            (0, a.Z)({ form: D, onValuesChange: J }, G),
            y.createElement(
              k.Z,
              m || {},
              y.createElement(Z, { formItemsConfig: K, colProps: t || {} }),
              y.createElement(
                o.Z,
                b || t || {},
                d ||
                  ((i || p || c) &&
                    y.createElement(
                      C.Z,
                      null,
                      c &&
                        y.createElement(
                          I.Z,
                          (0, a.Z)({ type: 'primary', htmlType: 'submit' }, L || {}),
                          R,
                        ),
                      p && y.createElement(I.Z, (0, a.Z)({ onClick: H }, B || {}), S),
                      i &&
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
        T = (t(68782), t(42658)),
        S = ['detail', 'placeholder', 'keyMapLabel', 'keyMapItemProps'],
        x = (e) => {
          var r = e.detail,
            t = e.placeholder,
            o = e.keyMapLabel,
            l = e.keyMapItemProps,
            m = (0, s.Z)(e, S),
            i = (0, y.useMemo)(
              () =>
                Object.keys(o || {}).filter((e) => r && Object.prototype.hasOwnProperty.call(r, e)),
              [],
            );
          return y.createElement(
            T.Z,
            m,
            i.map((e) => {
              var s,
                m = (0, n.Z)(
                  (0, n.Z)({}, (null === l || void 0 === l ? void 0 : l[e]) || {}),
                  {},
                  { label: o[e] },
                );
              return (
                o[e] &&
                y.createElement(
                  T.Z.Item,
                  (0, a.Z)({ key: e }, m),
                  y.createElement(y.Fragment, null, null !== (s = r[e]) && void 0 !== s ? s : t),
                )
              );
            }),
          );
        },
        R = (t(99517), t(87292)),
        z = (t(64527), t(72067)),
        F = (e) => {
          var r = e.tableProps,
            t = e.searchBarProps,
            o = e.searchCardProps,
            a = e.tableCardProps,
            l = e.spaceProps,
            s = (0, n.Z)({ direction: 'vertical', style: { width: '100%' } }, l || {}),
            m = (0, n.Z)({ showSubmit: !0, showRest: !0 }, t || { formItemsConfig: [] }),
            i = (0, n.Z)({ style: { marginTop: 16 } }, a);
          return y.createElement(
            C.Z,
            s,
            y.createElement(z.Z, o || {}, y.createElement(w, m)),
            y.createElement(z.Z, i, y.createElement(R.Z, r)),
          );
        },
        N = (e, r) => {
          var t = (0, y.useState)(!1),
            o = (0, v.Z)(t, 2),
            a = o[0],
            l = o[1],
            n = (0, y.useState)(),
            s = (0, v.Z)(n, 2),
            m = s[0],
            i = s[1],
            c = (0, y.useState)(),
            p = (0, v.Z)(c, 2),
            d = p[0],
            u = p[1],
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
            { lazyService: Z, data: m, error: d, loading: a, setLoading: l }
          );
        },
        M = (t(26780), t(14643), t(38488)),
        L = ['loading', 'data', 'lazyService'],
        B = (e) => {
          var r = e.queryListService,
            t = e.formatSubmitValue,
            o = e.onSuccess,
            a = e.onError,
            l = e.spaceProps,
            m = e.tableProps,
            i = e.tableCardProps,
            c = e.formItemsConfig,
            p = void 0 === c ? [] : c,
            d = e.defaulParams,
            u = e.formaResult,
            f = e.actionColProps,
            h = e.colProps,
            b = e.rowProps,
            P = N(r, {
              defaulParams: d,
              onSuccess(e) {
                null === o || void 0 === o || o(e);
              },
              onError(e) {
                a ? a(e) : M.ZP.error('\u8bf7\u6c42\u5217\u8868\u6570\u636e\u51fa\u9519');
              },
              formaResult: u,
            }),
            g = P.loading,
            j = P.data,
            Z = P.lazyService,
            k = (0, s.Z)(P, L),
            C = (0, y.useMemo)(
              () =>
                y.createElement(F, {
                  tableProps: (0, n.Z)((0, n.Z)({}, m), {}, { loading: g, dataSource: j }),
                  tableCardProps: i,
                  spaceProps: l,
                  searchBarProps: {
                    onFinish: (e) => {
                      Z(t ? t(e) : e);
                    },
                    formItemsConfig: p,
                    onReset: () => {
                      Z(d);
                    },
                    colProps: h,
                    rowProps: b,
                    actionColProps: f,
                  },
                }),
              [l, m, i, p],
            );
          return (0, n.Z)(
            (0, n.Z)({ loading: g, dataSource: j, queryList: Z }, k),
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
