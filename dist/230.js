(self['webpackChunkart_antd_react'] = self['webpackChunkart_antd_react'] || []).push([
  [230],
  {
    24390: function () {},
    86845: function () {},
    8036: function () {},
    50886: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          default: function () {
            return E;
          },
        });
      var n = r(67294),
        o = r(42886),
        a = r(52444),
        l = r(22231),
        i = r(96089),
        u = r(65659);
      r(24390);
      function c() {
        return (
          (c = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          c.apply(this, arguments)
        );
      }
      var s = function (e) {
        return n.createElement('div', c({ className: '__dumi-default-alert' }, e));
      };
      r(86845);
      function d(e, t) {
        return y(e) || v(e, t) || m(e, t) || f();
      }
      function f() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function m(e, t) {
        if (e) {
          if ('string' === typeof e) return p(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === r && e.constructor && (r = e.constructor.name),
            'Map' === r || 'Set' === r
              ? Array.from(e)
              : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? p(e, t)
              : void 0
          );
        }
      }
      function p(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function v(e, t) {
        var r =
          null == e
            ? null
            : ('undefined' !== typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
        if (null != r) {
          var n,
            o,
            a = [],
            l = !0,
            i = !1;
          try {
            for (r = r.call(e); !(l = (n = r.next()).done); l = !0)
              if ((a.push(n.value), t && a.length === t)) break;
          } catch (u) {
            (i = !0), (o = u);
          } finally {
            try {
              l || null == r['return'] || r['return']();
            } finally {
              if (i) throw o;
            }
          }
          return a;
        }
      }
      function y(e) {
        if (Array.isArray(e)) return e;
      }
      function b(e, t) {
        var r,
          n = null === (r = e.match(/\.(\w+)$/)) || void 0 === r ? void 0 : r[1];
        return n || (n = t.tsx ? 'tsx' : 'jsx'), n;
      }
      var h = function (e) {
          var t,
            r,
            c,
            f = (0, n.useRef)(),
            m = (0, n.useContext)(i.context),
            p = m.locale,
            v = (0, i.useLocaleProps)(p, e),
            y = (0, i.useDemoUrl)(v.identifier),
            h = v.demoUrl || y,
            E =
              (null === l.m || void 0 === l.m ? void 0 : l.m.location.hash) ===
              '#'.concat(v.identifier),
            _ = 1 === Object.keys(v.sources).length,
            g = (0, i.useCodeSandbox)(
              (null === (t = v.hideActions) || void 0 === t ? void 0 : t.includes('CSB'))
                ? null
                : v,
            ),
            w = (0, i.useRiddle)(
              (null === (r = v.hideActions) || void 0 === r ? void 0 : r.includes('RIDDLE'))
                ? null
                : v,
            ),
            k = (0, i.useMotions)(v.motions || [], f.current),
            S = d(k, 2),
            C = S[0],
            O = S[1],
            j = (0, i.useCopy)(),
            N = d(j, 2),
            A = N[0],
            x = N[1],
            R = (0, n.useState)(function () {
              return v.sources._ ? '_' : Object.keys(v.sources)[0];
            }),
            L = d(R, 2),
            B = L[0],
            I = L[1],
            M = (0, n.useState)(b(B, v.sources[B])),
            P = d(M, 2),
            T = P[0],
            D = P[1],
            U = (0, n.useState)(Boolean(v.defaultShowCode)),
            K = d(U, 2),
            $ = K[0],
            F = K[1],
            z = (0, n.useState)(Math.random()),
            Z = d(z, 2),
            H = Z[0],
            J = Z[1],
            W = v.sources[B][T] || v.sources[B].content,
            X = (0, i.useTSPlaygroundUrl)(p, W),
            q = (0, n.useRef)(),
            G = (0, i.usePrefersColor)(),
            V = d(G, 1),
            Q = V[0],
            Y = v.actionBarRender,
            ee =
              void 0 === Y
                ? function (e) {
                    return e;
                  }
                : Y;
          function te(e) {
            I(e), D(b(e, v.sources[e]));
          }
          return (
            (0, n.useEffect)(
              function () {
                J(Math.random());
              },
              [Q],
            ),
            n.createElement(
              'div',
              {
                style: v.style,
                className: [
                  v.className,
                  '__dumi-default-previewer',
                  E ? '__dumi-default-previewer-target' : '',
                ]
                  .filter(Boolean)
                  .join(' '),
                id: v.identifier,
                'data-debug': v.debug || void 0,
                'data-iframe': v.iframe || void 0,
              },
              v.iframe &&
                n.createElement('div', { className: '__dumi-default-previewer-browser-nav' }),
              n.createElement(
                'div',
                {
                  ref: f,
                  className: '__dumi-default-previewer-demo',
                  style: {
                    transform: v.transform ? 'translate(0, 0)' : void 0,
                    padding: v.compact || (v.iframe && !1 !== v.compact) ? '0' : void 0,
                    background: v.background,
                  },
                },
                v.iframe
                  ? n.createElement('iframe', {
                      title: 'dumi-previewer',
                      style: { height: String(v.iframe).replace(/(\d)$/, '$1px') },
                      key: H,
                      src: h,
                      ref: q,
                    })
                  : n.createElement(
                      a.ErrorBoundary,
                      {
                        fallbackRender: function (e) {
                          var t = e.error;
                          return n.createElement(
                            s,
                            { type: 'error' },
                            n.createElement('h4', null, t.message || 'This demo has been crashed.'),
                            t.stack &&
                              n.createElement(
                                'details',
                                null,
                                n.createElement('summary', null, 'Error stack'),
                                n.createElement('pre', null, t.stack),
                              ),
                          );
                        },
                      },
                      v.children,
                    ),
              ),
              n.createElement(
                'div',
                { className: '__dumi-default-previewer-desc', 'data-title': v.title },
                v.title && n.createElement(i.AnchorLink, { to: '#'.concat(v.identifier) }, v.title),
                v.description &&
                  n.createElement('div', { dangerouslySetInnerHTML: { __html: v.description } }),
              ),
              n.createElement(
                'div',
                { className: '__dumi-default-previewer-actions' },
                ee(
                  n.createElement(
                    n.Fragment,
                    null,
                    g &&
                      n.createElement('button', {
                        title: 'Open demo on CodeSandbox.io',
                        className: '__dumi-default-icon',
                        role: 'codesandbox',
                        onClick: g,
                      }),
                    w &&
                      n.createElement('button', {
                        title: 'Open demo on Riddle',
                        className: '__dumi-default-icon',
                        role: 'riddle',
                        onClick: w,
                      }),
                    v.motions &&
                      n.createElement('button', {
                        title: 'Execute motions',
                        className: '__dumi-default-icon',
                        role: 'motions',
                        disabled: O,
                        onClick: function () {
                          return C();
                        },
                      }),
                    v.iframe &&
                      n.createElement('button', {
                        title: 'Reload demo iframe page',
                        className: '__dumi-default-icon',
                        role: 'refresh',
                        onClick: function () {
                          return J(Math.random());
                        },
                      }),
                    !(null === (c = v.hideActions) || void 0 === c
                      ? void 0
                      : c.includes('EXTERNAL')) &&
                      n.createElement(
                        i.Link,
                        { target: '_blank', to: h },
                        n.createElement('button', {
                          title: 'Open demo in new tab',
                          className: '__dumi-default-icon',
                          role: 'open-demo',
                          type: 'button',
                        }),
                      ),
                    n.createElement('span', null),
                    n.createElement('button', {
                      title: 'Copy source code',
                      className: '__dumi-default-icon',
                      role: 'copy',
                      'data-status': x,
                      onClick: function () {
                        return A(W);
                      },
                    }),
                    'tsx' === T &&
                      $ &&
                      n.createElement(
                        i.Link,
                        { target: '_blank', to: X },
                        n.createElement('button', {
                          title: 'Get JSX via TypeScript Playground',
                          className: '__dumi-default-icon',
                          role: 'change-tsx',
                          type: 'button',
                        }),
                      ),
                    n.createElement('button', {
                      title: 'Toggle source code panel',
                      className: '__dumi-default-icon'.concat(
                        $ ? ' __dumi-default-btn-expand' : '',
                      ),
                      role: 'source',
                      type: 'button',
                      onClick: function () {
                        return F(!$);
                      },
                    }),
                  ),
                ),
              ),
              $ &&
                n.createElement(
                  'div',
                  { className: '__dumi-default-previewer-source-wrapper' },
                  !_ &&
                    n.createElement(
                      o.Z,
                      {
                        className: '__dumi-default-previewer-source-tab',
                        prefixCls: '__dumi-default-tabs',
                        moreIcon: '\xb7\xb7\xb7',
                        defaultActiveKey: B,
                        onChange: te,
                      },
                      Object.keys(v.sources).map(function (e) {
                        return n.createElement(o.J, {
                          tab: '_' === e ? 'index.'.concat(b(e, v.sources[e])) : e,
                          key: e,
                        });
                      }),
                    ),
                  n.createElement(
                    'div',
                    { className: '__dumi-default-previewer-source' },
                    n.createElement(u.Z, { code: W, lang: T, showCopy: !1 }),
                  ),
                ),
            )
          );
        },
        E = h;
    },
    4187: function (e, t, r) {
      'use strict';
      var n = r(67294),
        o = r(97397),
        a = r.n(o);
      r(8036);
      function l(e, t) {
        return d(e) || s(e, t) || u(e, t) || i();
      }
      function i() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function u(e, t) {
        if (e) {
          if ('string' === typeof e) return c(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === r && e.constructor && (r = e.constructor.name),
            'Map' === r || 'Set' === r
              ? Array.from(e)
              : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? c(e, t)
              : void 0
          );
        }
      }
      function c(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function s(e, t) {
        var r =
          null == e
            ? null
            : ('undefined' !== typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
        if (null != r) {
          var n,
            o,
            a = [],
            l = !0,
            i = !1;
          try {
            for (r = r.call(e); !(l = (n = r.next()).done); l = !0)
              if ((a.push(n.value), t && a.length === t)) break;
          } catch (u) {
            (i = !0), (o = u);
          } finally {
            try {
              l || null == r['return'] || r['return']();
            } finally {
              if (i) throw o;
            }
          }
          return a;
        }
      }
      function d(e) {
        if (Array.isArray(e)) return e;
      }
      var f = function (e) {
        var t = e.children,
          r = (0, n.useRef)(),
          o = (0, n.useState)(!1),
          i = l(o, 2),
          u = i[0],
          c = i[1],
          s = (0, n.useState)(!1),
          d = l(s, 2),
          f = d[0],
          m = d[1];
        return (
          (0, n.useEffect)(function () {
            var e = r.current,
              t = a()(function () {
                c(e.scrollLeft > 0), m(e.scrollLeft < e.scrollWidth - e.offsetWidth);
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
          n.createElement(
            'div',
            { className: '__dumi-default-table' },
            n.createElement(
              'div',
              {
                className: '__dumi-default-table-content',
                ref: r,
                'data-left-folded': u || void 0,
                'data-right-folded': f || void 0,
              },
              n.createElement('table', null, t),
            ),
          )
        );
      };
      t['Z'] = f;
    },
    52444: function (e, t, r) {
      (function (e, n) {
        n(t, r(67294));
      })(0, function (e, t) {
        'use strict';
        function r(e) {
          if (e && e.__esModule) return e;
          var t = Object.create(null);
          return (
            e &&
              Object.keys(e).forEach(function (r) {
                if ('default' !== r) {
                  var n = Object.getOwnPropertyDescriptor(e, r);
                  Object.defineProperty(
                    t,
                    r,
                    n.get
                      ? n
                      : {
                          enumerable: !0,
                          get: function () {
                            return e[r];
                          },
                        },
                  );
                }
              }),
            (t['default'] = e),
            Object.freeze(t)
          );
        }
        var n = r(t);
        function o(e, t) {
          return (
            (o =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              }),
            o(e, t)
          );
        }
        function a(e, t) {
          (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), o(e, t);
        }
        var l = function (e, t) {
            return (
              void 0 === e && (e = []),
              void 0 === t && (t = []),
              e.length !== t.length ||
                e.some(function (e, r) {
                  return !Object.is(e, t[r]);
                })
            );
          },
          i = { error: null },
          u = (function (e) {
            function t() {
              for (var t, r = arguments.length, n = new Array(r), o = 0; o < r; o++)
                n[o] = arguments[o];
              return (
                (t = e.call.apply(e, [this].concat(n)) || this),
                (t.state = i),
                (t.resetErrorBoundary = function () {
                  for (var e, r = arguments.length, n = new Array(r), o = 0; o < r; o++)
                    n[o] = arguments[o];
                  null == t.props.onReset || (e = t.props).onReset.apply(e, n), t.reset();
                }),
                t
              );
            }
            a(t, e),
              (t.getDerivedStateFromError = function (e) {
                return { error: e };
              });
            var r = t.prototype;
            return (
              (r.reset = function () {
                this.setState(i);
              }),
              (r.componentDidCatch = function (e, t) {
                var r, n;
                null == (r = (n = this.props).onError) || r.call(n, e, t);
              }),
              (r.componentDidUpdate = function (e, t) {
                var r,
                  n,
                  o = this.state.error,
                  a = this.props.resetKeys;
                null !== o &&
                  null !== t.error &&
                  l(e.resetKeys, a) &&
                  (null == (r = (n = this.props).onResetKeysChange) || r.call(n, e.resetKeys, a),
                  this.reset());
              }),
              (r.render = function () {
                var e = this.state.error,
                  t = this.props,
                  r = t.fallbackRender,
                  o = t.FallbackComponent,
                  a = t.fallback;
                if (null !== e) {
                  var l = { error: e, resetErrorBoundary: this.resetErrorBoundary };
                  if (n.isValidElement(a)) return a;
                  if ('function' === typeof r) return r(l);
                  if (o) return n.createElement(o, l);
                  throw new Error(
                    'react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop',
                  );
                }
                return this.props.children;
              }),
              t
            );
          })(n.Component);
        function c(e, t) {
          var r = function (r) {
              return n.createElement(u, t, n.createElement(e, r));
            },
            o = e.displayName || e.name || 'Unknown';
          return (r.displayName = 'withErrorBoundary(' + o + ')'), r;
        }
        function s(e) {
          var t = n.useState(null),
            r = t[0],
            o = t[1];
          if (null != e) throw e;
          if (null != r) throw r;
          return o;
        }
        (e.ErrorBoundary = u),
          (e.useErrorHandler = s),
          (e.withErrorBoundary = c),
          Object.defineProperty(e, '__esModule', { value: !0 });
      });
    },
  },
]);
