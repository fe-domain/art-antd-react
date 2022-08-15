(self['webpackChunkart_antd_react'] = self['webpackChunkart_antd_react'] || []).push([
  [645],
  {
    24390: function () {},
    86845: function () {},
    8036: function () {},
    22231: function (e, t, n) {
      'use strict';
      n.d(t, {
        m: function () {
          return r.m;
        },
      });
      var r = n(9684);
      n(72255);
    },
    65697: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n(67294),
        l = n(96089),
        a = n(50886),
        o = n(4187),
        c = r.memo((e) => {
          var t = e.demos,
            n = t['art-antd-react-userequestdemo1'].component;
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(
              r.Fragment,
              null,
              r.createElement(
                'div',
                { className: 'markdown' },
                r.createElement(
                  'h2',
                  { id: 'userequest' },
                  r.createElement(
                    l.AnchorLink,
                    { to: '#userequest', 'aria-hidden': 'true', tabIndex: -1 },
                    r.createElement('span', { className: 'icon icon-link' }),
                  ),
                  'useRequest',
                ),
                r.createElement('p', null, '\u8bf7\u6c42 hooks'),
                r.createElement(
                  'p',
                  null,
                  '\u51cf\u53bb\u9891\u7e41\u7684 setLoading, setData, setError \u7684\u64cd\u4f5c, \u8bf7\u6c42 hooks',
                ),
                r.createElement(
                  'h2',
                  { id: '\u4f55\u65f6\u4f7f\u7528' },
                  r.createElement(
                    l.AnchorLink,
                    { to: '#\u4f55\u65f6\u4f7f\u7528', 'aria-hidden': 'true', tabIndex: -1 },
                    r.createElement('span', { className: 'icon icon-link' }),
                  ),
                  '\u4f55\u65f6\u4f7f\u7528',
                ),
                r.createElement(
                  'p',
                  null,
                  '\u5e38\u89c1\u7684 React \u9879\u76ee\u7f51\u7edc\u8bf7\u6c42\u573a\u666f, loading\u3001error\u3001lazy \u8bf7\u6c42\uff0c\u683c\u5f0f\u5316\u8fd4\u56de\u7684\u6570\u636e',
                ),
                r.createElement(
                  'h2',
                  { id: '\u4ee3\u7801\u6f14\u793a' },
                  r.createElement(
                    l.AnchorLink,
                    { to: '#\u4ee3\u7801\u6f14\u793a', 'aria-hidden': 'true', tabIndex: -1 },
                    r.createElement('span', { className: 'icon icon-link' }),
                  ),
                  '\u4ee3\u7801\u6f14\u793a',
                ),
                r.createElement(
                  'h3',
                  { id: '\u57fa\u672c\u4f7f\u7528' },
                  r.createElement(
                    l.AnchorLink,
                    { to: '#\u57fa\u672c\u4f7f\u7528', 'aria-hidden': 'true', tabIndex: -1 },
                    r.createElement('span', { className: 'icon icon-link' }),
                  ),
                  '\u57fa\u672c\u4f7f\u7528',
                ),
              ),
              r.createElement(
                a.default,
                t['art-antd-react-userequestdemo1'].previewerProps,
                r.createElement(n, null),
              ),
              r.createElement(
                'div',
                { className: 'markdown' },
                r.createElement(
                  'h3',
                  { id: 'result' },
                  r.createElement(
                    l.AnchorLink,
                    { to: '#result', 'aria-hidden': 'true', tabIndex: -1 },
                    r.createElement('span', { className: 'icon icon-link' }),
                  ),
                  'Result',
                ),
                r.createElement(
                  o.Z,
                  null,
                  r.createElement(
                    'thead',
                    null,
                    r.createElement(
                      'tr',
                      null,
                      r.createElement('th', null, '\u53c2\u6570'),
                      r.createElement('th', null, '\u8bf4\u660e'),
                      r.createElement('th', null, '\u7c7b\u578b'),
                    ),
                  ),
                  r.createElement(
                    'tbody',
                    null,
                    r.createElement(
                      'tr',
                      null,
                      r.createElement('td', null, 'data'),
                      r.createElement('td', null, 'request \u8fd4\u56de\u7684\u6570\u636e'),
                      r.createElement(
                        'td',
                        null,
                        r.createElement('code', null, 'TData'),
                        ' | ',
                        r.createElement('code', null, 'undefined'),
                      ),
                    ),
                    r.createElement(
                      'tr',
                      null,
                      r.createElement('td', null, 'error'),
                      r.createElement('td', null, 'request \u629b\u51fa\u7684\u5f02\u5e38'),
                      r.createElement(
                        'td',
                        null,
                        r.createElement('code', null, 'Error'),
                        ' | ',
                        r.createElement('code', null, 'undefined'),
                      ),
                    ),
                    r.createElement(
                      'tr',
                      null,
                      r.createElement('td', null, 'loading'),
                      r.createElement('td', null, 'request \u662f\u5426\u6b63\u5728\u6267\u884c'),
                      r.createElement('td', null, r.createElement('code', null, 'boolean')),
                    ),
                    r.createElement(
                      'tr',
                      null,
                      r.createElement('td', null, 'params'),
                      r.createElement(
                        'td',
                        null,
                        'lazyService([1,2,3]),\u5411 \u67e5\u8be2\u65b9\u6cd5\u4f20\u9012\u53c2\u6570',
                      ),
                      r.createElement('td', null, r.createElement('code', null, 'Params')),
                    ),
                    r.createElement(
                      'tr',
                      null,
                      r.createElement('td', null, 'lazyService'),
                      r.createElement(
                        'td',
                        null,
                        r.createElement(
                          'ul',
                          null,
                          r.createElement(
                            'li',
                            null,
                            ' \u624b\u52a8\u89e6\u53d1 request \u6267\u884c\uff0c\u53ef\u4f20\u53c2\u6570',
                          ),
                          r.createElement(
                            'li',
                            null,
                            '\u5f02\u5e38\u81ea\u52a8\u5904\u7406\uff0c\u901a\u8fc7 ',
                            r.createElement('code', null, 'onError'),
                            ' \u53cd\u9988',
                          ),
                        ),
                      ),
                      r.createElement(
                        'td',
                        null,
                        r.createElement('code', null, '(params: Params) => void'),
                      ),
                    ),
                  ),
                ),
                r.createElement(
                  'h3',
                  { id: 'options' },
                  r.createElement(
                    l.AnchorLink,
                    { to: '#options', 'aria-hidden': 'true', tabIndex: -1 },
                    r.createElement('span', { className: 'icon icon-link' }),
                  ),
                  'Options',
                ),
                r.createElement(
                  o.Z,
                  null,
                  r.createElement(
                    'thead',
                    null,
                    r.createElement(
                      'tr',
                      null,
                      r.createElement('th', null, '\u53c2\u6570'),
                      r.createElement('th', null, '\u8bf4\u660e'),
                      r.createElement('th', null, '\u7c7b\u578b'),
                      r.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                    ),
                  ),
                  r.createElement(
                    'tbody',
                    null,
                    r.createElement(
                      'tr',
                      null,
                      r.createElement('td', null, 'lazy'),
                      r.createElement(
                        'td',
                        null,
                        r.createElement(
                          'ul',
                          null,
                          r.createElement(
                            'li',
                            null,
                            ' \u9ed8\u8ba4 ',
                            r.createElement('code', null, 'false'),
                            '\u3002 \u5373\u5728\u521d\u59cb\u5316\u65f6\u81ea\u52a8\u6267\u884c service\u3002',
                          ),
                          r.createElement(
                            'li',
                            null,
                            '\u5982\u679c\u8bbe\u7f6e\u4e3a ',
                            r.createElement('code', null, 'true'),
                            '\uff0c\u5219\u9700\u8981\u624b\u52a8\u8c03\u7528 ',
                            r.createElement('code', null, 'lazyService'),
                            ' \u89e6\u53d1\u6267\u884c\u3002 ',
                          ),
                        ),
                      ),
                      r.createElement('td', null, r.createElement('code', null, 'boolean')),
                      r.createElement('td', null, r.createElement('code', null, 'false')),
                    ),
                    r.createElement(
                      'tr',
                      null,
                      r.createElement('td', null, 'defaulParams'),
                      r.createElement(
                        'td',
                        null,
                        '\u9996\u6b21\u9ed8\u8ba4\u6267\u884c\u65f6\uff0c\u4f20\u9012\u7ed9 request \u7684\u53c2\u6570',
                      ),
                      r.createElement('td', null, r.createElement('code', null, 'Params')),
                      r.createElement('td', null, '-'),
                    ),
                    r.createElement(
                      'tr',
                      null,
                      r.createElement('td', null, 'onSuccess'),
                      r.createElement('td', null, 'request resolve \u65f6\u89e6\u53d1'),
                      r.createElement(
                        'td',
                        null,
                        r.createElement('code', null, '(data: TData, params: Params) => void'),
                      ),
                      r.createElement('td', null, '-'),
                    ),
                    r.createElement(
                      'tr',
                      null,
                      r.createElement('td', null, 'onError'),
                      r.createElement('td', null, 'request reject \u65f6\u89e6\u53d1'),
                      r.createElement(
                        'td',
                        null,
                        r.createElement('code', null, '(e: Error, params: Params) => void'),
                      ),
                      r.createElement('td', null, '-'),
                    ),
                    r.createElement(
                      'tr',
                      null,
                      r.createElement('td', null, 'formaResult'),
                      r.createElement(
                        'td',
                        null,
                        '\u5bf9\u8bf7\u6c42\u5230\u7684\u6570\u636e\u505a format \u64cd\u4f5c',
                      ),
                      r.createElement(
                        'td',
                        null,
                        r.createElement('code', null, 'formaResult?: (res: any) => Res'),
                      ),
                      r.createElement('td', null, '-'),
                    ),
                  ),
                ),
              ),
            ),
          );
        });
      t['default'] = (e) => {
        var t = r.useContext(l.context),
          n = t.demos;
        return (
          r.useEffect(() => {
            var t;
            null !== e &&
              void 0 !== e &&
              null !== (t = e.location) &&
              void 0 !== t &&
              t.hash &&
              l.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)));
          }, []),
          r.createElement(c, { demos: n })
        );
      };
    },
    50886: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          default: function () {
            return b;
          },
        });
      var r = n(67294),
        l = n(42886),
        a = n(52444),
        o = n(22231),
        c = n(96089),
        u = n(65659);
      n(24390);
      function i() {
        return (
          (i = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          i.apply(this, arguments)
        );
      }
      var s = function (e) {
        return r.createElement('div', i({ className: '__dumi-default-alert' }, e));
      };
      n(86845);
      function d(e, t) {
        return h(e) || p(e, t) || f(e, t) || m();
      }
      function m() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function f(e, t) {
        if (e) {
          if ('string' === typeof e) return E(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? E(e, t)
              : void 0
          );
        }
      }
      function E(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function p(e, t) {
        var n =
          null == e
            ? null
            : ('undefined' !== typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
        if (null != n) {
          var r,
            l,
            a = [],
            o = !0,
            c = !1;
          try {
            for (n = n.call(e); !(o = (r = n.next()).done); o = !0)
              if ((a.push(r.value), t && a.length === t)) break;
          } catch (u) {
            (c = !0), (l = u);
          } finally {
            try {
              o || null == n['return'] || n['return']();
            } finally {
              if (c) throw l;
            }
          }
          return a;
        }
      }
      function h(e) {
        if (Array.isArray(e)) return e;
      }
      function v(e, t) {
        var n,
          r = null === (n = e.match(/\.(\w+)$/)) || void 0 === n ? void 0 : n[1];
        return r || (r = t.tsx ? 'tsx' : 'jsx'), r;
      }
      var y = function (e) {
          var t,
            n,
            i,
            m = (0, r.useRef)(),
            f = (0, r.useContext)(c.context),
            E = f.locale,
            p = (0, c.useLocaleProps)(E, e),
            h = (0, c.useDemoUrl)(p.identifier),
            y = p.demoUrl || h,
            b =
              (null === o.m || void 0 === o.m ? void 0 : o.m.location.hash) ===
              '#'.concat(p.identifier),
            _ = 1 === Object.keys(p.sources).length,
            k = (0, c.useCodeSandbox)(
              (null === (t = p.hideActions) || void 0 === t ? void 0 : t.includes('CSB'))
                ? null
                : p,
            ),
            g = (0, c.useRiddle)(
              (null === (n = p.hideActions) || void 0 === n ? void 0 : n.includes('RIDDLE'))
                ? null
                : p,
            ),
            w = (0, c.useMotions)(p.motions || [], m.current),
            S = d(w, 2),
            N = S[0],
            A = S[1],
            C = (0, c.useCopy)(),
            O = d(C, 2),
            x = O[0],
            j = O[1],
            R = (0, r.useState)(function () {
              return p.sources._ ? '_' : Object.keys(p.sources)[0];
            }),
            L = d(R, 2),
            I = L[0],
            P = L[1],
            q = (0, r.useState)(v(I, p.sources[I])),
            B = d(q, 2),
            T = B[0],
            D = B[1],
            M = (0, r.useState)(Boolean(p.defaultShowCode)),
            z = d(M, 2),
            U = z[0],
            F = z[1],
            K = (0, r.useState)(Math.random()),
            Z = d(K, 2),
            $ = Z[0],
            H = Z[1],
            J = p.sources[I][T] || p.sources[I].content,
            W = (0, c.useTSPlaygroundUrl)(E, J),
            X = (0, r.useRef)(),
            G = (0, c.usePrefersColor)(),
            V = d(G, 1),
            Q = V[0],
            Y = p.actionBarRender,
            ee =
              void 0 === Y
                ? function (e) {
                    return e;
                  }
                : Y;
          function te(e) {
            P(e), D(v(e, p.sources[e]));
          }
          return (
            (0, r.useEffect)(
              function () {
                H(Math.random());
              },
              [Q],
            ),
            r.createElement(
              'div',
              {
                style: p.style,
                className: [
                  p.className,
                  '__dumi-default-previewer',
                  b ? '__dumi-default-previewer-target' : '',
                ]
                  .filter(Boolean)
                  .join(' '),
                id: p.identifier,
                'data-debug': p.debug || void 0,
                'data-iframe': p.iframe || void 0,
              },
              p.iframe &&
                r.createElement('div', { className: '__dumi-default-previewer-browser-nav' }),
              r.createElement(
                'div',
                {
                  ref: m,
                  className: '__dumi-default-previewer-demo',
                  style: {
                    transform: p.transform ? 'translate(0, 0)' : void 0,
                    padding: p.compact || (p.iframe && !1 !== p.compact) ? '0' : void 0,
                    background: p.background,
                  },
                },
                p.iframe
                  ? r.createElement('iframe', {
                      title: 'dumi-previewer',
                      style: { height: String(p.iframe).replace(/(\d)$/, '$1px') },
                      key: $,
                      src: y,
                      ref: X,
                    })
                  : r.createElement(
                      a.ErrorBoundary,
                      {
                        fallbackRender: function (e) {
                          var t = e.error;
                          return r.createElement(
                            s,
                            { type: 'error' },
                            r.createElement('h4', null, t.message || 'This demo has been crashed.'),
                            t.stack &&
                              r.createElement(
                                'details',
                                null,
                                r.createElement('summary', null, 'Error stack'),
                                r.createElement('pre', null, t.stack),
                              ),
                          );
                        },
                      },
                      p.children,
                    ),
              ),
              r.createElement(
                'div',
                { className: '__dumi-default-previewer-desc', 'data-title': p.title },
                p.title && r.createElement(c.AnchorLink, { to: '#'.concat(p.identifier) }, p.title),
                p.description &&
                  r.createElement('div', { dangerouslySetInnerHTML: { __html: p.description } }),
              ),
              r.createElement(
                'div',
                { className: '__dumi-default-previewer-actions' },
                ee(
                  r.createElement(
                    r.Fragment,
                    null,
                    k &&
                      r.createElement('button', {
                        title: 'Open demo on CodeSandbox.io',
                        className: '__dumi-default-icon',
                        role: 'codesandbox',
                        onClick: k,
                      }),
                    g &&
                      r.createElement('button', {
                        title: 'Open demo on Riddle',
                        className: '__dumi-default-icon',
                        role: 'riddle',
                        onClick: g,
                      }),
                    p.motions &&
                      r.createElement('button', {
                        title: 'Execute motions',
                        className: '__dumi-default-icon',
                        role: 'motions',
                        disabled: A,
                        onClick: function () {
                          return N();
                        },
                      }),
                    p.iframe &&
                      r.createElement('button', {
                        title: 'Reload demo iframe page',
                        className: '__dumi-default-icon',
                        role: 'refresh',
                        onClick: function () {
                          return H(Math.random());
                        },
                      }),
                    !(null === (i = p.hideActions) || void 0 === i
                      ? void 0
                      : i.includes('EXTERNAL')) &&
                      r.createElement(
                        c.Link,
                        { target: '_blank', to: y },
                        r.createElement('button', {
                          title: 'Open demo in new tab',
                          className: '__dumi-default-icon',
                          role: 'open-demo',
                          type: 'button',
                        }),
                      ),
                    r.createElement('span', null),
                    r.createElement('button', {
                      title: 'Copy source code',
                      className: '__dumi-default-icon',
                      role: 'copy',
                      'data-status': j,
                      onClick: function () {
                        return x(J);
                      },
                    }),
                    'tsx' === T &&
                      U &&
                      r.createElement(
                        c.Link,
                        { target: '_blank', to: W },
                        r.createElement('button', {
                          title: 'Get JSX via TypeScript Playground',
                          className: '__dumi-default-icon',
                          role: 'change-tsx',
                          type: 'button',
                        }),
                      ),
                    r.createElement('button', {
                      title: 'Toggle source code panel',
                      className: '__dumi-default-icon'.concat(
                        U ? ' __dumi-default-btn-expand' : '',
                      ),
                      role: 'source',
                      type: 'button',
                      onClick: function () {
                        return F(!U);
                      },
                    }),
                  ),
                ),
              ),
              U &&
                r.createElement(
                  'div',
                  { className: '__dumi-default-previewer-source-wrapper' },
                  !_ &&
                    r.createElement(
                      l.Z,
                      {
                        className: '__dumi-default-previewer-source-tab',
                        prefixCls: '__dumi-default-tabs',
                        moreIcon: '\xb7\xb7\xb7',
                        defaultActiveKey: I,
                        onChange: te,
                      },
                      Object.keys(p.sources).map(function (e) {
                        return r.createElement(l.J, {
                          tab: '_' === e ? 'index.'.concat(v(e, p.sources[e])) : e,
                          key: e,
                        });
                      }),
                    ),
                  r.createElement(
                    'div',
                    { className: '__dumi-default-previewer-source' },
                    r.createElement(u.Z, { code: J, lang: T, showCopy: !1 }),
                  ),
                ),
            )
          );
        },
        b = y;
    },
    4187: function (e, t, n) {
      'use strict';
      var r = n(67294),
        l = n(97397),
        a = n.n(l);
      n(8036);
      function o(e, t) {
        return d(e) || s(e, t) || u(e, t) || c();
      }
      function c() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function u(e, t) {
        if (e) {
          if ('string' === typeof e) return i(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? i(e, t)
              : void 0
          );
        }
      }
      function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function s(e, t) {
        var n =
          null == e
            ? null
            : ('undefined' !== typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
        if (null != n) {
          var r,
            l,
            a = [],
            o = !0,
            c = !1;
          try {
            for (n = n.call(e); !(o = (r = n.next()).done); o = !0)
              if ((a.push(r.value), t && a.length === t)) break;
          } catch (u) {
            (c = !0), (l = u);
          } finally {
            try {
              o || null == n['return'] || n['return']();
            } finally {
              if (c) throw l;
            }
          }
          return a;
        }
      }
      function d(e) {
        if (Array.isArray(e)) return e;
      }
      var m = function (e) {
        var t = e.children,
          n = (0, r.useRef)(),
          l = (0, r.useState)(!1),
          c = o(l, 2),
          u = c[0],
          i = c[1],
          s = (0, r.useState)(!1),
          d = o(s, 2),
          m = d[0],
          f = d[1];
        return (
          (0, r.useEffect)(function () {
            var e = n.current,
              t = a()(function () {
                i(e.scrollLeft > 0), f(e.scrollLeft < e.scrollWidth - e.offsetWidth);
              }, 100);
            return (
              t(),
              e.addEventListener('scroll', t),
              window.addEventListener('resize', t),
              function () {
                e.removeEventListener('scroll', t), window.removeEventListener('resize', t);
              }
            );
          }, []),
          r.createElement(
            'div',
            { className: '__dumi-default-table' },
            r.createElement(
              'div',
              {
                className: '__dumi-default-table-content',
                ref: n,
                'data-left-folded': u || void 0,
                'data-right-folded': m || void 0,
              },
              r.createElement('table', null, t),
            ),
          )
        );
      };
      t['Z'] = m;
    },
    52444: function (e, t, n) {
      (function (e, r) {
        r(t, n(67294));
      })(0, function (e, t) {
        'use strict';
        function n(e) {
          if (e && e.__esModule) return e;
          var t = Object.create(null);
          return (
            e &&
              Object.keys(e).forEach(function (n) {
                if ('default' !== n) {
                  var r = Object.getOwnPropertyDescriptor(e, n);
                  Object.defineProperty(
                    t,
                    n,
                    r.get
                      ? r
                      : {
                          enumerable: !0,
                          get: function () {
                            return e[n];
                          },
                        },
                  );
                }
              }),
            (t['default'] = e),
            Object.freeze(t)
          );
        }
        var r = n(t);
        function l(e, t) {
          return (
            (l =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              }),
            l(e, t)
          );
        }
        function a(e, t) {
          (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), l(e, t);
        }
        var o = function (e, t) {
            return (
              void 0 === e && (e = []),
              void 0 === t && (t = []),
              e.length !== t.length ||
                e.some(function (e, n) {
                  return !Object.is(e, t[n]);
                })
            );
          },
          c = { error: null },
          u = (function (e) {
            function t() {
              for (var t, n = arguments.length, r = new Array(n), l = 0; l < n; l++)
                r[l] = arguments[l];
              return (
                (t = e.call.apply(e, [this].concat(r)) || this),
                (t.state = c),
                (t.resetErrorBoundary = function () {
                  for (var e, n = arguments.length, r = new Array(n), l = 0; l < n; l++)
                    r[l] = arguments[l];
                  null == t.props.onReset || (e = t.props).onReset.apply(e, r), t.reset();
                }),
                t
              );
            }
            a(t, e),
              (t.getDerivedStateFromError = function (e) {
                return { error: e };
              });
            var n = t.prototype;
            return (
              (n.reset = function () {
                this.setState(c);
              }),
              (n.componentDidCatch = function (e, t) {
                var n, r;
                null == (n = (r = this.props).onError) || n.call(r, e, t);
              }),
              (n.componentDidUpdate = function (e, t) {
                var n,
                  r,
                  l = this.state.error,
                  a = this.props.resetKeys;
                null !== l &&
                  null !== t.error &&
                  o(e.resetKeys, a) &&
                  (null == (n = (r = this.props).onResetKeysChange) || n.call(r, e.resetKeys, a),
                  this.reset());
              }),
              (n.render = function () {
                var e = this.state.error,
                  t = this.props,
                  n = t.fallbackRender,
                  l = t.FallbackComponent,
                  a = t.fallback;
                if (null !== e) {
                  var o = { error: e, resetErrorBoundary: this.resetErrorBoundary };
                  if (r.isValidElement(a)) return a;
                  if ('function' === typeof n) return n(o);
                  if (l) return r.createElement(l, o);
                  throw new Error(
                    'react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop',
                  );
                }
                return this.props.children;
              }),
              t
            );
          })(r.Component);
        function i(e, t) {
          var n = function (n) {
              return r.createElement(u, t, r.createElement(e, n));
            },
            l = e.displayName || e.name || 'Unknown';
          return (n.displayName = 'withErrorBoundary(' + l + ')'), n;
        }
        function s(e) {
          var t = r.useState(null),
            n = t[0],
            l = t[1];
          if (null != e) throw e;
          if (null != n) throw n;
          return l;
        }
        (e.ErrorBoundary = u),
          (e.useErrorHandler = s),
          (e.withErrorBoundary = i),
          Object.defineProperty(e, '__esModule', { value: !0 });
      });
    },
  },
]);
