(self['webpackChunkart_antd_react'] = self['webpackChunkart_antd_react'] || []).push([
  [336],
  {
    24390: function () {},
    86845: function () {},
    22231: function (e, t, r) {
      'use strict';
      r.d(t, {
        m: function () {
          return n.m;
        },
      });
      var n = r(9684);
      r(72255);
    },
    65971: function (e, t, r) {
      'use strict';
      function n() {
        var e = a(r(67294));
        return (
          (n = function () {
            return e;
          }),
          e
        );
      }
      function o() {
        var e = r(96089);
        return (
          (o = function () {
            return e;
          }),
          e
        );
      }
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(r), !0).forEach(function (t) {
                c(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : i(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      function c(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var l = function (e) {
          return e.render();
        },
        s = function (e, t) {
          var r = [],
            a = e.match.params.uuid,
            i = void 0 === e.location.query.wrapper,
            c = t[a];
          if (c) {
            var s = u(
              u({}, c.previewerProps),
              {},
              { hideActions: (c.previewerProps.hideActions || []).concat(['EXTERNAL']) },
            );
            void 0 !== e.location.query.capture &&
              ((s.motions = (s.motions || []).slice()),
              s.motions.unshift('autoplay'),
              s.motions.every(function (e) {
                return !e.startsWith('capture');
              }) && s.motions.push('capture:[id|=root]')),
              (r = i
                ? [
                    n()['default'].createElement(l, {
                      render: function () {
                        return (
                          (0, o().useMotions)(
                            s.motions || [],
                            'undefined' !== typeof window ? document.documentElement : null,
                          ),
                          n()['default'].createElement(
                            'div',
                            {},
                            n()['default'].createElement(c.component),
                          )
                        );
                      },
                    }),
                  ]
                : [s, n()['default'].createElement(c.component)]);
          }
          return r;
        };
      t.default = s;
    },
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
        i = r(22231),
        u = r(96089),
        c = r(65659);
      r(24390);
      function l() {
        return (
          (l = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          l.apply(this, arguments)
        );
      }
      var s = function (e) {
        return n.createElement('div', l({ className: '__dumi-default-alert' }, e));
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
            i = !0,
            u = !1;
          try {
            for (r = r.call(e); !(i = (n = r.next()).done); i = !0)
              if ((a.push(n.value), t && a.length === t)) break;
          } catch (c) {
            (u = !0), (o = c);
          } finally {
            try {
              i || null == r['return'] || r['return']();
            } finally {
              if (u) throw o;
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
            l,
            f = (0, n.useRef)(),
            m = (0, n.useContext)(u.context),
            p = m.locale,
            v = (0, u.useLocaleProps)(p, e),
            y = (0, u.useDemoUrl)(v.identifier),
            h = v.demoUrl || y,
            E =
              (null === i.m || void 0 === i.m ? void 0 : i.m.location.hash) ===
              '#'.concat(v.identifier),
            _ = 1 === Object.keys(v.sources).length,
            g = (0, u.useCodeSandbox)(
              (null === (t = v.hideActions) || void 0 === t ? void 0 : t.includes('CSB'))
                ? null
                : v,
            ),
            w = (0, u.useRiddle)(
              (null === (r = v.hideActions) || void 0 === r ? void 0 : r.includes('RIDDLE'))
                ? null
                : v,
            ),
            O = (0, u.useMotions)(v.motions || [], f.current),
            k = d(O, 2),
            j = k[0],
            C = k[1],
            S = (0, u.useCopy)(),
            N = d(S, 2),
            P = N[0],
            A = N[1],
            x = (0, n.useState)(function () {
              return v.sources._ ? '_' : Object.keys(v.sources)[0];
            }),
            R = d(x, 2),
            B = R[0],
            D = R[1],
            M = (0, n.useState)(b(B, v.sources[B])),
            L = d(M, 2),
            T = L[0],
            I = L[1],
            U = (0, n.useState)(Boolean(v.defaultShowCode)),
            K = d(U, 2),
            F = K[0],
            $ = K[1],
            q = (0, n.useState)(Math.random()),
            X = d(q, 2),
            H = X[0],
            J = X[1],
            Z = v.sources[B][T] || v.sources[B].content,
            z = (0, u.useTSPlaygroundUrl)(p, Z),
            G = (0, n.useRef)(),
            V = (0, u.usePrefersColor)(),
            W = d(V, 1),
            Q = W[0],
            Y = v.actionBarRender,
            ee =
              void 0 === Y
                ? function (e) {
                    return e;
                  }
                : Y;
          function te(e) {
            D(e), I(b(e, v.sources[e]));
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
                      ref: G,
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
                v.title && n.createElement(u.AnchorLink, { to: '#'.concat(v.identifier) }, v.title),
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
                        disabled: C,
                        onClick: function () {
                          return j();
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
                    !(null === (l = v.hideActions) || void 0 === l
                      ? void 0
                      : l.includes('EXTERNAL')) &&
                      n.createElement(
                        u.Link,
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
                      'data-status': A,
                      onClick: function () {
                        return P(Z);
                      },
                    }),
                    'tsx' === T &&
                      F &&
                      n.createElement(
                        u.Link,
                        { target: '_blank', to: z },
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
                        F ? ' __dumi-default-btn-expand' : '',
                      ),
                      role: 'source',
                      type: 'button',
                      onClick: function () {
                        return $(!F);
                      },
                    }),
                  ),
                ),
              ),
              F &&
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
                    n.createElement(c.Z, { code: Z, lang: T, showCopy: !1 }),
                  ),
                ),
            )
          );
        },
        E = h;
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
        var i = function (e, t) {
            return (
              void 0 === e && (e = []),
              void 0 === t && (t = []),
              e.length !== t.length ||
                e.some(function (e, r) {
                  return !Object.is(e, t[r]);
                })
            );
          },
          u = { error: null },
          c = (function (e) {
            function t() {
              for (var t, r = arguments.length, n = new Array(r), o = 0; o < r; o++)
                n[o] = arguments[o];
              return (
                (t = e.call.apply(e, [this].concat(n)) || this),
                (t.state = u),
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
                this.setState(u);
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
                  i(e.resetKeys, a) &&
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
                  var i = { error: e, resetErrorBoundary: this.resetErrorBoundary };
                  if (n.isValidElement(a)) return a;
                  if ('function' === typeof r) return r(i);
                  if (o) return n.createElement(o, i);
                  throw new Error(
                    'react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop',
                  );
                }
                return this.props.children;
              }),
              t
            );
          })(n.Component);
        function l(e, t) {
          var r = function (r) {
              return n.createElement(c, t, n.createElement(e, r));
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
        (e.ErrorBoundary = c),
          (e.useErrorHandler = s),
          (e.withErrorBoundary = l),
          Object.defineProperty(e, '__esModule', { value: !0 });
      });
    },
  },
]);
