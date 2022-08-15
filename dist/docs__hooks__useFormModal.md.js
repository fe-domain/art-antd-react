(self['webpackChunkart_antd_react'] = self['webpackChunkart_antd_react'] || []).push([
  [875],
  {
    8036: function () {},
    50246: function (e, n, t) {
      'use strict';
      t.r(n);
      var l = t(67294),
        r = t(96089),
        a = t(65659),
        o = t(4187),
        c = l.memo((e) => {
          e.demos;
          return l.createElement(
            l.Fragment,
            null,
            l.createElement(
              'div',
              { className: 'markdown' },
              l.createElement(
                'h2',
                { id: 'useformmodal' },
                l.createElement(
                  r.AnchorLink,
                  { to: '#useformmodal', 'aria-hidden': 'true', tabIndex: -1 },
                  l.createElement('span', { className: 'icon icon-link' }),
                ),
                'useFormModal',
              ),
              l.createElement('p', null, '\u914d\u7f6e\u5316\u8868\u5355\u5f39\u6846'),
              l.createElement(
                'p',
                null,
                '\u5c06 antd \u7684\u8868\u5355 \u548c \u5f39\u6846 \u8fdb\u884c\u5c01\u88c5\uff0c\u63d0\u4ea4\u7684\u65f6\u5019\u81ea\u52a8 loading \u5b8c\u6210\u4e4b\u540e \u4ea4\u7531\u4f7f\u7528\u8005\u51b3\u5b9a\u662f\u5426\u5173\u95ed\u5f39\u6846\u901a\u8fc7\u914d\u7f6e\u5316\u5373\u53ef\u89e3\u51b3\u8868\u5355 modal \u7684\u60c5\u51b5\u3002',
              ),
              l.createElement(
                'h2',
                { id: '\u4f55\u65f6\u4f7f\u7528' },
                l.createElement(
                  r.AnchorLink,
                  { to: '#\u4f55\u65f6\u4f7f\u7528', 'aria-hidden': 'true', tabIndex: -1 },
                  l.createElement('span', { className: 'icon icon-link' }),
                ),
                '\u4f55\u65f6\u4f7f\u7528',
              ),
              l.createElement(
                'p',
                null,
                '\u5f53 modal \u4e2d\u6709\u8868\u5355\u9879\u64cd\u4f5c\u7684\u65f6\u5019\uff0c\u63d0\u4ea4\u540e\u81ea\u52a8\u6dfb\u52a0 loading \u529f\u80fd\uff0c\u4e0d\u7528\u91cd\u590d\u7684\u5199 Modal \u548c Form \u8868\u5355\u9879',
              ),
              l.createElement(
                'h2',
                { id: '\u4ee3\u7801\u6f14\u793a' },
                l.createElement(
                  r.AnchorLink,
                  { to: '#\u4ee3\u7801\u6f14\u793a', 'aria-hidden': 'true', tabIndex: -1 },
                  l.createElement('span', { className: 'icon icon-link' }),
                ),
                '\u4ee3\u7801\u6f14\u793a',
              ),
              l.createElement(
                'h3',
                { id: '\u57fa\u672c\u4f7f\u7528' },
                l.createElement(
                  r.AnchorLink,
                  { to: '#\u57fa\u672c\u4f7f\u7528', 'aria-hidden': 'true', tabIndex: -1 },
                  l.createElement('span', { className: 'icon icon-link' }),
                ),
                '\u57fa\u672c\u4f7f\u7528',
              ),
              l.createElement(a.Z, {
                code: "import React, { useState } from 'react';\n// import { Button, Form, Input, message, Modal } from 'antd';\n// import { FormItemConfig, RenderType, useFormModal } from 'art-antd-react';\n//  \u5b89\u88dd\u4e86 art-antd-react \u4ee5\u540e antd \u76f4\u63a5\u5bfc\u51fa\u7684 \u7c7b\u578b\u6216\u7ec4\u4ef6 \u53ef\u4ee5\u76f4\u63a5\u4ece art-antd-react \u4e2d\u5bfc\u51fa\nimport { FormItemConfig, RenderType, useFormModal, Button, message } from 'art-antd-react';\n\nconst Demo1 = () => {\n  const [visible, setVisible] = useState(false);\n\n  const formItemsConfig: FormItemConfig[] = [\n    {\n      renderType: RenderType.Input,\n      formItemProps: {\n        label: 'Name',\n        name: 'name',\n      },\n    },\n    {\n      renderType: RenderType.InputNumber,\n      formItemProps: {\n        label: 'Age',\n        name: 'age',\n      },\n      formItemChildProps: {\n        placeholder: '\u8bf7\u8f93\u5165\u5e74\u9f84',\n      },\n    },\n    {\n      renderType: RenderType.Select,\n      formItemProps: {\n        label: 'Gender',\n        name: 'gender',\n      },\n      formItemChildProps: {\n        options: [\n          {\n            label: '\u7537',\n            value: '\u7537',\n          },\n          {\n            label: '\u5973',\n            value: '\u5973',\n          },\n        ],\n      },\n    },\n    {\n      renderType: RenderType.Input,\n      formItemProps: {\n        label: 'Hobby',\n        name: 'hobby',\n      },\n    },\n    {\n      renderType: RenderType.Input,\n      formItemProps: {\n        label: 'Description',\n        name: 'description',\n      },\n    },\n    {\n      renderType: RenderType.Input,\n      formItemProps: {\n        label: 'BestFirend',\n        name: 'bestFirend',\n      },\n    },\n  ];\n\n  const { formModal, formInstance } = useFormModal({\n    visible, // \u51b3\u5b9a\u4e86\u662f\u5426\u51fa\u73b0\u5f39\u6846\n    rowProps: { gutter: 8 },\n    colProps: { span: 24 },\n    formItemsConfig: [],\n    title: '\u7f16\u8f91\u4e2a\u4eba\u4fe1\u606f',\n    serviceFn: () => {\n      return new Promise((resolve) => {\n        setTimeout(() => {\n          resolve('\u8bf7\u6c42\u670d\u52a1\u7aef\u6a21\u62df');\n        }, 3000);\n      });\n    },\n    onSuccess: () => {\n      message.success('\u64cd\u4f5c\u6210\u529f');\n      setVisible(false);\n      console.log('\u8bf7\u6c42\u4e4b\u540e\u4f60\u53ef\u4ee5\u505a\u4efb\u4f55\u884c\u4e3a\u64cd\u4f5c');\n    },\n    onCancel: () => {\n      message.success('\u53d6\u6d88\u7f16\u8f91');\n      setVisible(false);\n    },\n    formatSubmitValue: (values: any) => {\n      console.log('\u4f60\u53ef\u4ee5\u5bf9\u8981\u63d0\u4ea4\u7684\u6570\u636e\u8fdb\u884c\u5904\u7406');\n      return {\n        ...values,\n        other: '12332',\n      };\n    },\n  });\n\n  return (\n    <>\n      <Button\n        onClick={() => {\n          formInstance.setFieldsValue({\n            name: 'jakequc',\n            age: 124,\n          });\n          setVisible(true);\n        }}\n      >\n        \u7f16\u8f91\u4fe1\u606f\n      </Button>\n      <Modal visible={visible}>\n        <Form>\n          <Form.Item name=\"name\">\n            <Input />\n          </Form.Item>\n        </Form>\n      </Modal>\n    </>\n  );\n};\n\nexport default Demo1;",
                lang: 'ts',
              }),
              l.createElement(
                'h3',
                { id: 'result-hook-\u8fd4\u56de\u7ed3\u679c' },
                l.createElement(
                  r.AnchorLink,
                  {
                    to: '#result-hook-\u8fd4\u56de\u7ed3\u679c',
                    'aria-hidden': 'true',
                    tabIndex: -1,
                  },
                  l.createElement('span', { className: 'icon icon-link' }),
                ),
                'Result hook \u8fd4\u56de\u7ed3\u679c',
              ),
              l.createElement(
                o.Z,
                null,
                l.createElement(
                  'thead',
                  null,
                  l.createElement(
                    'tr',
                    null,
                    l.createElement('th', null, '\u53c2\u6570'),
                    l.createElement('th', null, '\u8bf4\u660e'),
                    l.createElement('th', null, '\u7c7b\u578b'),
                    l.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                  ),
                ),
                l.createElement(
                  'tbody',
                  null,
                  l.createElement(
                    'tr',
                    null,
                    l.createElement('td', null, 'formModal'),
                    l.createElement('td', null, '\u8868\u5355\u5f39\u6846\u7684\u5143\u7d20'),
                    l.createElement('td', null, 'React.ReactElement'),
                    l.createElement('td', null, '-'),
                  ),
                  l.createElement(
                    'tr',
                    null,
                    l.createElement('td', null, 'formInstance'),
                    l.createElement(
                      'td',
                      null,
                      '\u5f53\u524d\u8868\u5355\u7684\u5b9e\u4f8b\uff0c\u53ef\u4ee5\u7528\u6765\u91cd\u7f6e\u8868\u5355\u7b49\u529f\u80fd\uff0c\u540c antd \u7684 Form \u7684\u5b9e\u4f8b',
                    ),
                    l.createElement('td', null, 'FormInstance'),
                    l.createElement('td', null, '-'),
                  ),
                ),
              ),
              l.createElement(
                'h3',
                { id: 'options' },
                l.createElement(
                  r.AnchorLink,
                  { to: '#options', 'aria-hidden': 'true', tabIndex: -1 },
                  l.createElement('span', { className: 'icon icon-link' }),
                ),
                'Options',
              ),
              l.createElement(
                'p',
                null,
                '\u8bf4\u660e\uff1a \u8be5 hooks \u7684\u5165\u53c2\u7c7b\u578b\u7ee7\u627f\u4e8e ant design \u7684 ',
                l.createElement(
                  r.Link,
                  { to: 'https://ant-design.gitee.io/components/modal-cn/' },
                  'ModalProps',
                ),
                ' \u6545\u6240\u6709 Modal \u7684 api \u5747\u53ef\u900f\u4f20\u7ed9 \u8be5 hooks \u7684\u53c2\u6570',
              ),
              l.createElement(
                o.Z,
                null,
                l.createElement(
                  'thead',
                  null,
                  l.createElement(
                    'tr',
                    null,
                    l.createElement('th', null, '\u53c2\u6570'),
                    l.createElement('th', null, '\u8bf4\u660e'),
                    l.createElement('th', null, '\u7c7b\u578b'),
                    l.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                  ),
                ),
                l.createElement(
                  'tbody',
                  null,
                  l.createElement(
                    'tr',
                    null,
                    l.createElement('td', null, 'form'),
                    l.createElement(
                      'td',
                      null,
                      'modal \u6846\u4e2d\u7684 form \u8868\u5355\u5b9e\u4f8b\uff0c\u53ef\u9009',
                    ),
                    l.createElement('td', null),
                    l.createElement('td', null, 'formItemsConfig'),
                  ),
                  l.createElement(
                    'tr',
                    null,
                    l.createElement('td', null, 'colProps'),
                    l.createElement(
                      'td',
                      null,
                      '\u5b9a\u4e49\u6bcf\u4e00\u5217\u7684\u5e03\u5c40,\u540c antd ',
                      l.createElement(
                        r.Link,
                        { to: 'https://ant-design.gitee.io/components/grid-cn/#Col' },
                        'ColProps',
                      ),
                    ),
                    l.createElement(
                      'td',
                      null,
                      l.createElement(
                        r.Link,
                        { to: 'https://ant-design.gitee.io/components/grid-cn/#Col' },
                        'ColProps',
                      ),
                    ),
                    l.createElement('td', null, '-'),
                  ),
                  l.createElement(
                    'tr',
                    null,
                    l.createElement('td', null, 'rowProps'),
                    l.createElement(
                      'td',
                      null,
                      '\u5b9a\u4e49\u884c\u7684\u5e03\u5c40, \u540c antd ',
                      l.createElement(
                        r.Link,
                        { to: 'https://ant-design.gitee.io/components/grid-cn/#Row' },
                        'RowProps',
                      ),
                    ),
                    l.createElement(
                      'td',
                      null,
                      l.createElement(
                        r.Link,
                        { to: 'https://ant-design.gitee.io/components/grid-cn/#Row' },
                        'RowProps',
                      ),
                    ),
                    l.createElement('td', null, '-'),
                  ),
                  l.createElement(
                    'tr',
                    null,
                    l.createElement('td', null, 'formItemsConfig'),
                    l.createElement('td', null, 'modal \u6846\u4e2d\u8868\u5355\u9879\u914d\u7f6e'),
                    l.createElement('td', null, l.createElement('code', null, ' FormItemConfig[]')),
                    l.createElement('td', null, '-'),
                  ),
                  l.createElement(
                    'tr',
                    null,
                    l.createElement('td', null, 'formatSubmitValue'),
                    l.createElement(
                      'td',
                      null,
                      '\u8868\u5355\u63d0\u4ea4\u9700\u8981\u5bf9\u8868\u5355\u6570\u636e\u8fdb\u884c\u683c\u5f0f\u5316\u540e\u653e\u5165 serviceFn \u8bf7\u6c42\u4e2d\uff0c\u5982\u679c\u6ca1\u6709\u4f20\u9012\u5219\u4e0d\u5bf9\u8868\u5355\u6570\u636e\u8fdb\u884c\u683c\u5f0f\u5316',
                    ),
                    l.createElement(
                      'td',
                      null,
                      l.createElement('code', null, '(formValue: Value) => unknown'),
                    ),
                    l.createElement('td', null, '-'),
                  ),
                  l.createElement(
                    'tr',
                    null,
                    l.createElement('td', null, 'serviceFn'),
                    l.createElement(
                      'td',
                      null,
                      '\u8868\u5355\u63d0\u4ea4\u9700\u8981\u8c03\u7528\u7684\u51fd\u6570\uff0c\u4f1a\u9ed8\u8ba4\u5c06\u5f53\u524d\u8868\u5355\u7684\u6570\u636e\u4f5c\u4e3a\u5165\u53c2\u653e\u5165\u8be5\u65b9\u6cd5\u4e2d',
                    ),
                    l.createElement(
                      'td',
                      null,
                      l.createElement('code', null, ' RequestService<Value, Res>'),
                    ),
                    l.createElement('td', null, '-'),
                  ),
                  l.createElement(
                    'tr',
                    null,
                    l.createElement('td', null, 'onSuccess'),
                    l.createElement(
                      'td',
                      null,
                      '\u63d0\u4ea4\u8868\u5355\u6210\u529f\u540e\u9700\u8981\u8c03\u7528\u7684\u65b9\u6cd5\uff0c\u5982\u679c\u4e0d\u4f20\u9012\u5219 \u9ed8\u8ba4 \u63d0\u793a ',
                      l.createElement('code', null, '\u64cd\u4f5c\u6210\u529f'),
                    ),
                    l.createElement(
                      'td',
                      null,
                      l.createElement('code', null, 'onSuccess?: (data?: Res) => void;'),
                    ),
                    l.createElement('td', null, '-'),
                  ),
                  l.createElement(
                    'tr',
                    null,
                    l.createElement('td', null, 'onError'),
                    l.createElement(
                      'td',
                      null,
                      '\u63d0\u4ea4\u8868\u5355\u62a5\u9519\u540e\u9700\u8981\u8c03\u7528\u7684\u65b9\u6cd5\uff0c\u5982\u679c\u4e0d\u4f20\u9012\u5219 \u9ed8\u8ba4 \u63d0\u793a ',
                      l.createElement('code', null, '\u64cd\u4f5c\u5931\u8d25'),
                    ),
                    l.createElement(
                      'td',
                      null,
                      l.createElement('code', null, 'onSuccess?: (data?: Res) => void;'),
                    ),
                    l.createElement('td', null, '-'),
                  ),
                  l.createElement(
                    'tr',
                    null,
                    l.createElement('td', null, 'onCancel'),
                    l.createElement(
                      'td',
                      null,
                      '\u70b9\u51fb\u53d6\u6d88\u540e\u9700\u8981\u6267\u884c\u7684\u884c\u4e3a',
                    ),
                    l.createElement(
                      'td',
                      null,
                      l.createElement('code', null, 'onCancel?: () => void;'),
                    ),
                    l.createElement('td', null, '-'),
                  ),
                ),
              ),
            ),
          );
        });
      n['default'] = (e) => {
        var n = l.useContext(r.context),
          t = n.demos;
        return (
          l.useEffect(() => {
            var n;
            null !== e &&
              void 0 !== e &&
              null !== (n = e.location) &&
              void 0 !== n &&
              n.hash &&
              r.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)));
          }, []),
          l.createElement(c, { demos: t })
        );
      };
    },
    4187: function (e, n, t) {
      'use strict';
      var l = t(67294),
        r = t(97397),
        a = t.n(r);
      t(8036);
      function o(e, n) {
        return s(e) || d(e, n) || m(e, n) || c();
      }
      function c() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function m(e, n) {
        if (e) {
          if ('string' === typeof e) return u(e, n);
          var t = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === t && e.constructor && (t = e.constructor.name),
            'Map' === t || 'Set' === t
              ? Array.from(e)
              : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
              ? u(e, n)
              : void 0
          );
        }
      }
      function u(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, l = new Array(n); t < n; t++) l[t] = e[t];
        return l;
      }
      function d(e, n) {
        var t =
          null == e
            ? null
            : ('undefined' !== typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
        if (null != t) {
          var l,
            r,
            a = [],
            o = !0,
            c = !1;
          try {
            for (t = t.call(e); !(o = (l = t.next()).done); o = !0)
              if ((a.push(l.value), n && a.length === n)) break;
          } catch (m) {
            (c = !0), (r = m);
          } finally {
            try {
              o || null == t['return'] || t['return']();
            } finally {
              if (c) throw r;
            }
          }
          return a;
        }
      }
      function s(e) {
        if (Array.isArray(e)) return e;
      }
      var i = function (e) {
        var n = e.children,
          t = (0, l.useRef)(),
          r = (0, l.useState)(!1),
          c = o(r, 2),
          m = c[0],
          u = c[1],
          d = (0, l.useState)(!1),
          s = o(d, 2),
          i = s[0],
          E = s[1];
        return (
          (0, l.useEffect)(function () {
            var e = t.current,
              n = a()(function () {
                u(e.scrollLeft > 0), E(e.scrollLeft < e.scrollWidth - e.offsetWidth);
              }, 100);
            return (
              n(),
              e.addEventListener('scroll', n),
              window.addEventListener('resize', n),
              function () {
                e.removeEventListener('scroll', n), window.removeEventListener('resize', n);
              }
            );
          }, []),
          l.createElement(
            'div',
            { className: '__dumi-default-table' },
            l.createElement(
              'div',
              {
                className: '__dumi-default-table-content',
                ref: t,
                'data-left-folded': m || void 0,
                'data-right-folded': i || void 0,
              },
              l.createElement('table', null, n),
            ),
          )
        );
      };
      n['Z'] = i;
    },
  },
]);