(self['webpackChunkart_antd_react'] = self['webpackChunkart_antd_react'] || []).push([
  [386],
  {
    22231: function (e, t, l) {
      'use strict';
      l.d(t, {
        m: function () {
          return n.m;
        },
      });
      var n = l(9684);
      l(72255);
    },
    4512: function (e, t, l) {
      'use strict';
      l.r(t);
      var n = l(67294),
        a = l(96089),
        r = l(50886),
        c = l(4187),
        m = n.memo((e) => {
          var t = e.demos,
            l = t['docs-useconfiglistpagedemo1'].component;
          return n.createElement(
            n.Fragment,
            null,
            n.createElement(
              n.Fragment,
              null,
              n.createElement(
                'div',
                { className: 'markdown' },
                n.createElement(
                  'h2',
                  { id: 'useconfiglistpage' },
                  n.createElement(
                    a.AnchorLink,
                    { to: '#useconfiglistpage', 'aria-hidden': 'true', tabIndex: -1 },
                    n.createElement('span', { className: 'icon icon-link' }),
                  ),
                  'useConfigListPage',
                ),
                n.createElement('p', null, '\u5217\u8868\u9875\u914d\u7f6e'),
                n.createElement(
                  'p',
                  null,
                  '\u4f7f\u5f97\u5217\u8868\u9875\u9762\u914d\u7f6e\u5316\u64cd\u4f5c\uff0c\u81ea\u52a8\u5904\u7406 loading\u3001\u6a21\u677f\u5316\u5217\u8868\u9875\u9762\uff0c\u914d\u7f6e\u5373\u53ef\u751f\u6210\u9875\u9762',
                ),
                n.createElement(
                  'h2',
                  { id: '\u4f55\u65f6\u4f7f\u7528' },
                  n.createElement(
                    a.AnchorLink,
                    { to: '#\u4f55\u65f6\u4f7f\u7528', 'aria-hidden': 'true', tabIndex: -1 },
                    n.createElement('span', { className: 'icon icon-link' }),
                  ),
                  '\u4f55\u65f6\u4f7f\u7528',
                ),
                n.createElement(
                  'p',
                  null,
                  '\u5e38\u89c1\u7684 React \u9879\u76ee\u5217\u8868\u9875\u9762\u7684\u914d\u7f6e\uff0c\u64cd\u4f5c\uff0c\u4f7f\u5f97\u6e32\u67d3\u4e0e\u903b\u8f91\u5206\u79bb',
                ),
                n.createElement(
                  'h2',
                  { id: '\u4ee3\u7801\u6f14\u793a' },
                  n.createElement(
                    a.AnchorLink,
                    { to: '#\u4ee3\u7801\u6f14\u793a', 'aria-hidden': 'true', tabIndex: -1 },
                    n.createElement('span', { className: 'icon icon-link' }),
                  ),
                  '\u4ee3\u7801\u6f14\u793a',
                ),
                n.createElement(
                  'h3',
                  { id: '\u57fa\u672c\u4f7f\u7528' },
                  n.createElement(
                    a.AnchorLink,
                    { to: '#\u57fa\u672c\u4f7f\u7528', 'aria-hidden': 'true', tabIndex: -1 },
                    n.createElement('span', { className: 'icon icon-link' }),
                  ),
                  '\u57fa\u672c\u4f7f\u7528',
                ),
              ),
              n.createElement(
                r.default,
                t['docs-useconfiglistpagedemo1'].previewerProps,
                n.createElement(l, null),
              ),
              n.createElement(
                'div',
                { className: 'markdown' },
                n.createElement(
                  'h3',
                  { id: 'result-\u8fd4\u56de\u7684\u7ed3\u679c' },
                  n.createElement(
                    a.AnchorLink,
                    {
                      to: '#result-\u8fd4\u56de\u7684\u7ed3\u679c',
                      'aria-hidden': 'true',
                      tabIndex: -1,
                    },
                    n.createElement('span', { className: 'icon icon-link' }),
                  ),
                  'Result \u8fd4\u56de\u7684\u7ed3\u679c',
                ),
                n.createElement(
                  c.Z,
                  null,
                  n.createElement(
                    'thead',
                    null,
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('th', null, '\u53c2\u6570'),
                      n.createElement('th', null, '\u8bf4\u660e'),
                      n.createElement('th', null, '\u7c7b\u578b'),
                      n.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                    ),
                  ),
                  n.createElement(
                    'tbody',
                    null,
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'dataSource'),
                      n.createElement(
                        'td',
                        null,
                        '\u67e5\u8be2\u5230\u7684\u5217\u8868\u6570\u636e',
                      ),
                      n.createElement('td', null, n.createElement('code', null, 'Res'), ' | -'),
                      n.createElement('td', null, '-'),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'error'),
                      n.createElement(
                        'td',
                        null,
                        '\u8bf7\u6c42\u5217\u8868\u6570\u636e\u629b\u51fa\u7684\u5f02\u5e38',
                      ),
                      n.createElement(
                        'td',
                        null,
                        n.createElement('code', null, 'Error'),
                        ' | ',
                        n.createElement('code', null, 'undefined'),
                      ),
                      n.createElement('td', null, '-'),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'loading'),
                      n.createElement('td', null, 'request \u662f\u5426\u6b63\u5728\u6267\u884c'),
                      n.createElement('td', null, n.createElement('code', null, 'boolean')),
                      n.createElement('td', null, '-'),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'queryList'),
                      n.createElement('td', null, '\u518d\u6b21\u8bf7\u6c42\u7684\u51fd\u6570'),
                      n.createElement(
                        'td',
                        null,
                        n.createElement('code', null, '(params: Params) => void'),
                      ),
                      n.createElement('td', null, '-'),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'listContainer'),
                      n.createElement('td', null, '\u5217\u8868\u9875\u6e32\u67d3 UI'),
                      n.createElement('td', null, 'React.ReactElement'),
                      n.createElement('td', null, '-'),
                    ),
                  ),
                ),
                n.createElement(
                  'h3',
                  { id: 'options' },
                  n.createElement(
                    a.AnchorLink,
                    { to: '#options', 'aria-hidden': 'true', tabIndex: -1 },
                    n.createElement('span', { className: 'icon icon-link' }),
                  ),
                  'Options',
                ),
                n.createElement(
                  c.Z,
                  null,
                  n.createElement(
                    'thead',
                    null,
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('th', null, '\u53c2\u6570'),
                      n.createElement('th', null, '\u8bf4\u660e'),
                      n.createElement('th', null, '\u7c7b\u578b'),
                      n.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                    ),
                  ),
                  n.createElement(
                    'tbody',
                    null,
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'queryListService'),
                      n.createElement('td', null, '\u8bf7\u6c42\u5217\u8868\u7684\u65b9\u6cd5'),
                      n.createElement(
                        'td',
                        null,
                        n.createElement('code', null, 'RequestService<Param, Res>'),
                      ),
                      n.createElement('td', null, '-'),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'formatSubmitValue'),
                      n.createElement(
                        'td',
                        null,
                        '\u67e5\u8be2\u5217\u8868\u65f6\u5bf9\u641c\u7d22\u8868\u5355\u7684\u6570\u636e\u8fdb\u884c\u683c\u5f0f\u5316\uff0c\u6ca1\u6709\u6b64\u53c2\u6570\u65f6\u4e0d\u8fdb\u884c\u683c\u5f0f\u5316\u64cd\u4f5c',
                      ),
                      n.createElement(
                        'td',
                        null,
                        n.createElement('code', null, '(formValue: Param) => unknown'),
                      ),
                      n.createElement('td', null, '-'),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'formItemsConfig'),
                      n.createElement(
                        'td',
                        null,
                        '\u641c\u7d22\u8868\u5355\u9879\u7684\u914d\u7f6e',
                      ),
                      n.createElement(
                        'td',
                        null,
                        n.createElement(
                          a.AnchorLink,
                          { to: '/components/form-items-builder#formitemconfig-api' },
                          'FormItemsConfig API',
                        ),
                        '[]',
                      ),
                      n.createElement('td', null, '[]'),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'lazy'),
                      n.createElement(
                        'td',
                        null,
                        n.createElement(
                          'ul',
                          null,
                          n.createElement(
                            'li',
                            null,
                            ' \u9ed8\u8ba4 ',
                            n.createElement('code', null, 'false'),
                            '\u3002 \u5373\u5728\u521d\u59cb\u5316\u65f6\u81ea\u52a8\u6267\u884c service\u3002',
                          ),
                          n.createElement(
                            'li',
                            null,
                            '\u5982\u679c\u8bbe\u7f6e\u4e3a ',
                            n.createElement('code', null, 'true'),
                            '\uff0c\u5219\u9700\u8981\u624b\u52a8\u8c03\u7528 ',
                            n.createElement('code', null, 'lazyService'),
                            ' \u89e6\u53d1\u6267\u884c\u3002 ',
                          ),
                        ),
                      ),
                      n.createElement('td', null, n.createElement('code', null, 'boolean')),
                      n.createElement('td', null, n.createElement('code', null, 'false')),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'defaulParams'),
                      n.createElement(
                        'td',
                        null,
                        '\u9996\u6b21\u9ed8\u8ba4\u6267\u884c\u65f6\uff0c\u4f20\u9012\u7ed9 queryListService \u7684\u53c2\u6570',
                      ),
                      n.createElement('td', null, n.createElement('code', null, 'Params')),
                      n.createElement('td', null, '-'),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'onSuccess'),
                      n.createElement('td', null, 'request resolve \u65f6\u89e6\u53d1'),
                      n.createElement(
                        'td',
                        null,
                        n.createElement('code', null, '(data: TData, params: Params) => void'),
                      ),
                      n.createElement('td', null, '-'),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'onError'),
                      n.createElement('td', null, 'request reject \u65f6\u89e6\u53d1'),
                      n.createElement(
                        'td',
                        null,
                        n.createElement('code', null, '(e: Error, params: Params) => void'),
                      ),
                      n.createElement('td', null, '-'),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'formaResult'),
                      n.createElement(
                        'td',
                        null,
                        '\u5bf9\u8bf7\u6c42\u5230\u7684\u6570\u636e\u505a format \u64cd\u4f5c',
                      ),
                      n.createElement(
                        'td',
                        null,
                        n.createElement('code', null, 'formaResult?: (res: any) => Res'),
                      ),
                      n.createElement('td', null, '-'),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'spaceProps'),
                      n.createElement(
                        'td',
                        null,
                        '\u5305\u88f9\u5217\u8868\u9875\u9762 Space \u7684\u914d\u7f6e\uff0c\u540c antd \u7684 ',
                        n.createElement(
                          a.Link,
                          { to: 'https://ant-design.gitee.io/components/space-cn/#API' },
                          'Space API',
                        ),
                      ),
                      n.createElement(
                        'td',
                        null,
                        n.createElement(
                          a.Link,
                          { to: 'https://ant-design.gitee.io/components/space-cn/#API' },
                          'SpaceProps',
                        ),
                      ),
                      n.createElement('td', null, '-'),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'tableProps'),
                      n.createElement(
                        'td',
                        null,
                        '\u8868\u683c\u5217\u8868\u7684 Table \u7684\u914d\u7f6e\uff0c\u540c antd \u7684 ',
                        n.createElement(
                          a.Link,
                          { to: 'https://ant-design.gitee.io/components/table-cn/#API' },
                          'Table API',
                        ),
                      ),
                      n.createElement(
                        'td',
                        null,
                        n.createElement(
                          a.Link,
                          { to: 'https://ant-design.gitee.io/components/table-cn/#API' },
                          'TableProps',
                        ),
                      ),
                      n.createElement('td', null, '-'),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'tableCardProps'),
                      n.createElement(
                        'td',
                        null,
                        '\u5305\u88f9\u8868\u683c\u5217\u8868\u7684 Card \u7684\u914d\u7f6e\uff0c\u540c antd \u7684 ',
                        n.createElement(
                          a.Link,
                          { to: 'https://ant-design.gitee.io/components/card-cn/#API' },
                          'Card API',
                        ),
                      ),
                      n.createElement(
                        'td',
                        null,
                        n.createElement(
                          a.Link,
                          { to: 'https://ant-design.gitee.io/components/card-cn/#API' },
                          'CardProps',
                        ),
                      ),
                      n.createElement('td', null, '-'),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'colProps'),
                      n.createElement(
                        'td',
                        null,
                        '\u5b9a\u4e49\u6bcf\u4e00\u5217\u7684\u5e03\u5c40,\u540c antd ',
                        n.createElement(
                          a.Link,
                          { to: 'https://ant-design.gitee.io/components/grid-cn/#Col' },
                          'ColProps',
                        ),
                      ),
                      n.createElement(
                        'td',
                        null,
                        n.createElement(
                          a.Link,
                          { to: 'https://ant-design.gitee.io/components/grid-cn/#Col' },
                          'ColProps',
                        ),
                      ),
                      n.createElement('td', null, '-'),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'rowProps'),
                      n.createElement(
                        'td',
                        null,
                        '\u5b9a\u4e49\u884c\u7684\u5e03\u5c40, \u540c antd ',
                        n.createElement(
                          a.Link,
                          { to: 'https://ant-design.gitee.io/components/grid-cn/#Row' },
                          'RowProps',
                        ),
                      ),
                      n.createElement(
                        'td',
                        null,
                        n.createElement(
                          a.Link,
                          { to: 'https://ant-design.gitee.io/components/grid-cn/#Row' },
                          'RowProps',
                        ),
                      ),
                      n.createElement('td', null, '-'),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'actionColProps'),
                      n.createElement(
                        'td',
                        null,
                        '\u64cd\u4f5c\u680f\u7684\u7684 col \u5e03\u5c40\uff0c \u548c antd \u7684 Col API \u76f8\u540c\uff0c\u4f18\u5148\u7ea7\u9ad8\u4e8e colProps,\u540c antd ',
                        n.createElement(
                          a.Link,
                          { to: 'https://ant-design.gitee.io/components/grid-cn/#Col' },
                          'ColProps',
                        ),
                      ),
                      n.createElement(
                        'td',
                        null,
                        n.createElement(
                          a.Link,
                          { to: 'https://ant-design.gitee.io/components/grid-cn/#Col' },
                          'ColProps',
                        ),
                      ),
                      n.createElement('td', null, '-'),
                    ),
                  ),
                ),
              ),
            ),
          );
        });
      t['default'] = (e) => {
        var t = n.useContext(a.context),
          l = t.demos;
        return (
          n.useEffect(() => {
            var t;
            null !== e &&
              void 0 !== e &&
              null !== (t = e.location) &&
              void 0 !== t &&
              t.hash &&
              a.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)));
          }, []),
          n.createElement(m, { demos: l })
        );
      };
    },
  },
]);
