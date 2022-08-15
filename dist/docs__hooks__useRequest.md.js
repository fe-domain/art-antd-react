(self['webpackChunkart_antd_react'] = self['webpackChunkart_antd_react'] || []).push([
  [645],
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
    65697: function (e, t, l) {
      'use strict';
      l.r(t);
      var n = l(67294),
        a = l(96089),
        r = l(50886),
        c = l(4187),
        m = n.memo((e) => {
          var t = e.demos,
            l = t['docs-userequestdemo1'].component;
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
                  { id: 'userequest' },
                  n.createElement(
                    a.AnchorLink,
                    { to: '#userequest', 'aria-hidden': 'true', tabIndex: -1 },
                    n.createElement('span', { className: 'icon icon-link' }),
                  ),
                  'useRequest',
                ),
                n.createElement('p', null, '\u8bf7\u6c42 hooks'),
                n.createElement(
                  'p',
                  null,
                  '\u51cf\u53bb\u9891\u7e41\u7684 setLoading, setData, setError \u7684\u64cd\u4f5c, \u8bf7\u6c42 hooks',
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
                  '\u5e38\u89c1\u7684 React \u9879\u76ee\u7f51\u7edc\u8bf7\u6c42\u573a\u666f, loading\u3001error\u3001lazy \u8bf7\u6c42\uff0c\u683c\u5f0f\u5316\u8fd4\u56de\u7684\u6570\u636e',
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
                t['docs-userequestdemo1'].previewerProps,
                n.createElement(l, null),
              ),
              n.createElement(
                'div',
                { className: 'markdown' },
                n.createElement(
                  'h3',
                  { id: 'result' },
                  n.createElement(
                    a.AnchorLink,
                    { to: '#result', 'aria-hidden': 'true', tabIndex: -1 },
                    n.createElement('span', { className: 'icon icon-link' }),
                  ),
                  'Result',
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
                    ),
                  ),
                  n.createElement(
                    'tbody',
                    null,
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'data'),
                      n.createElement('td', null, 'request \u8fd4\u56de\u7684\u6570\u636e'),
                      n.createElement(
                        'td',
                        null,
                        n.createElement('code', null, 'TData'),
                        ' | ',
                        n.createElement('code', null, 'undefined'),
                      ),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'error'),
                      n.createElement('td', null, 'request \u629b\u51fa\u7684\u5f02\u5e38'),
                      n.createElement(
                        'td',
                        null,
                        n.createElement('code', null, 'Error'),
                        ' | ',
                        n.createElement('code', null, 'undefined'),
                      ),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'loading'),
                      n.createElement('td', null, 'request \u662f\u5426\u6b63\u5728\u6267\u884c'),
                      n.createElement('td', null, n.createElement('code', null, 'boolean')),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'params'),
                      n.createElement(
                        'td',
                        null,
                        'lazyService([1,2,3]),\u5411 \u67e5\u8be2\u65b9\u6cd5\u4f20\u9012\u53c2\u6570',
                      ),
                      n.createElement('td', null, n.createElement('code', null, 'Params')),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'lazyService'),
                      n.createElement(
                        'td',
                        null,
                        n.createElement(
                          'ul',
                          null,
                          n.createElement(
                            'li',
                            null,
                            ' \u624b\u52a8\u89e6\u53d1 request \u6267\u884c\uff0c\u53ef\u4f20\u53c2\u6570',
                          ),
                          n.createElement(
                            'li',
                            null,
                            '\u5f02\u5e38\u81ea\u52a8\u5904\u7406\uff0c\u901a\u8fc7 ',
                            n.createElement('code', null, 'onError'),
                            ' \u53cd\u9988',
                          ),
                        ),
                      ),
                      n.createElement(
                        'td',
                        null,
                        n.createElement('code', null, '(params: Params) => void'),
                      ),
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
                        '\u9996\u6b21\u9ed8\u8ba4\u6267\u884c\u65f6\uff0c\u4f20\u9012\u7ed9 request \u7684\u53c2\u6570',
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
