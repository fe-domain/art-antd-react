(self['webpackChunkart_antd_react'] = self['webpackChunkart_antd_react'] || []).push([
  [302],
  {
    46507: function (e) {
      function t(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
    },
    21364: function (e) {
      function t(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function n(e, n, r) {
        return (
          n && t(e.prototype, n),
          r && t(e, r),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          e
        );
      }
      (e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports);
    },
    33657: function (e) {
      function t(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
    },
    76248: function (e, t, n) {
      'use strict';
      function r(e) {
        return (
          (r =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          r(e)
        );
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var o = l(n(67294)),
        i = n(36549),
        u = a(n(97397));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function c(e) {
        if ('function' !== typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (c = function (e) {
          return e ? n : t;
        })(e);
      }
      function l(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ('object' !== r(e) && 'function' !== typeof e)) return { default: e };
        var n = c(t);
        if (n && n.has(e)) return n.get(e);
        var o = {},
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var u in e)
          if ('default' !== u && Object.prototype.hasOwnProperty.call(e, u)) {
            var a = i ? Object.getOwnPropertyDescriptor(e, u) : null;
            a && (a.get || a.set) ? Object.defineProperty(o, u, a) : (o[u] = e[u]);
          }
        return (o['default'] = e), n && n.set(e, o), o;
      }
      function f() {
        return (
          (f = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          f.apply(this, arguments)
        );
      }
      function s(e, t) {
        return m(e) || v(e, t) || p(e, t) || d();
      }
      function d() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function p(e, t) {
        if (e) {
          if ('string' === typeof e) return y(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? y(e, t)
              : void 0
          );
        }
      }
      function y(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function v(e, t) {
        var n =
          null == e
            ? null
            : ('undefined' !== typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
        if (null != n) {
          var r,
            o,
            i = [],
            u = !0,
            a = !1;
          try {
            for (n = n.call(e); !(u = (r = n.next()).done); u = !0)
              if ((i.push(r.value), t && i.length === t)) break;
          } catch (c) {
            (a = !0), (o = c);
          } finally {
            try {
              u || null == n['return'] || n['return']();
            } finally {
              if (a) throw o;
            }
          }
          return i;
        }
      }
      function m(e) {
        if (Array.isArray(e)) return e;
      }
      function h(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function b(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function g(e, t, n) {
        return (
          t && b(e.prototype, t),
          n && b(e, n),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          e
        );
      }
      var w = new ((function () {
        function e() {
          h(this, e),
            (this.anchors = []),
            (this.listeners = []),
            (this.listener = void 0),
            (this.listener = (0, u['default'])(this._matchActiveAnchor.bind(this), 200));
        }
        return (
          g(e, [
            {
              key: '_matchActiveAnchor',
              value: function () {
                var e = this,
                  t = this.anchors.findIndex(function (t, n) {
                    return t.getBoundingClientRect().top > 128 || n === e.anchors.length - 1;
                  }),
                  n = this.anchors[Math.max(0, t - 1)],
                  r = n.parentElement.id;
                this.listeners.forEach(function (e) {
                  return e(r);
                });
              },
            },
            {
              key: 'watch',
              value: function (e) {
                0 === this.anchors.length &&
                  'undefined' !== typeof window &&
                  window.addEventListener('scroll', this.listener),
                  this.anchors.push(e),
                  this.listener();
              },
            },
            {
              key: 'unwatch',
              value: function (e) {
                this.anchors.splice(
                  this.anchors.findIndex(function (t) {
                    return t === e;
                  }),
                  1,
                ),
                  0 === this.anchors.length &&
                    'undefined' !== typeof window &&
                    window.removeEventListener('scroll', this.listener);
              },
            },
            {
              key: 'listen',
              value: function (e) {
                this.listeners.push(e);
              },
            },
            {
              key: 'unlisten',
              value: function (e) {
                this.listeners.splice(
                  this.listeners.findIndex(function (t) {
                    return t === e;
                  }),
                  1,
                );
              },
            },
          ]),
          e
        );
      })())();
      function O(e) {
        return e.offsetTop + (e.offsetParent ? O(e.offsetParent) : 0);
      }
      var j = function e(t) {
        var n,
          r = (null === (n = t.to.match(/(#[^&?]*)/)) || void 0 === n ? void 0 : n[1]) || '',
          u = (0, o.useRef)(null),
          a = (0, o.useState)(!1),
          c = s(a, 2),
          l = c[0],
          d = c[1];
        return (
          (0, o.useEffect)(function () {
            var e, t;
            if (
              ['H1', 'H2', 'H3'].includes(
                null === (e = u.current) ||
                  void 0 === e ||
                  null === (t = e.parentElement) ||
                  void 0 === t
                  ? void 0
                  : t.tagName,
              ) &&
              u.current.parentElement.id
            ) {
              var n = u.current;
              return (
                w.watch(n),
                function () {
                  w.unwatch(n);
                }
              );
            }
            var o = function (e) {
              d(r === '#'.concat(e));
            };
            return (
              w.listen(o),
              function () {
                return w.unlisten(o);
              }
            );
          }, []),
          o['default'].createElement(
            i.NavLink,
            f({}, t, {
              ref: u,
              onClick: function () {
                return e.scrollToAnchor(r.substring(1));
              },
              isActive: function () {
                return l;
              },
            }),
          )
        );
      };
      j.scrollToAnchor = function (e) {
        window.requestAnimationFrame(function () {
          var t = document.getElementById(decodeURIComponent(e));
          t && window.scrollTo(0, O(t) - 100);
        });
      };
      var A = j;
      t.default = A;
    },
    82239: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = t.LinkWrapper = void 0);
      var r = u(n(67294)),
        o = n(36549),
        i = ['to'];
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function a() {
        return (
          (a = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          a.apply(this, arguments)
        );
      }
      function c(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = l(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
        }
        return o;
      }
      function l(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o;
      }
      var f = function (e) {
        return function (t) {
          var n = t.to,
            o = c(t, i),
            u = /^(\w+:)?\/\/|^(mailto|tel):/.test(n) || !n,
            l = r['default'].isValidElement(o.children);
          return r['default'].createElement(
            e,
            a(
              {
                to: n || '',
                component: u
                  ? function () {
                      return r['default'].createElement(
                        'a',
                        { target: '_blank', rel: 'noopener noreferrer', href: n },
                        o.children,
                        n &&
                          !l &&
                          r['default'].createElement(
                            'svg',
                            {
                              xmlns: 'http://www.w3.org/2000/svg',
                              'aria-hidden': 'true',
                              x: '0px',
                              y: '0px',
                              viewBox: '0 0 100 100',
                              width: '15',
                              height: '15',
                              className: '__dumi-default-external-link-icon',
                            },
                            r['default'].createElement('path', {
                              fill: 'currentColor',
                              d: 'M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z',
                            }),
                            r['default'].createElement('polygon', {
                              fill: 'currentColor',
                              points:
                                '45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9',
                            }),
                          ),
                      );
                    }
                  : void 0,
              },
              o,
              u
                ? {}
                : {
                    onClick: function () {
                      var e;
                      window.scrollTo({ top: 0 });
                      for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                        n[r] = arguments[r];
                      null === (e = o.onClick) || void 0 === e || e.apply(this, n);
                    },
                  },
            ),
          );
        };
      };
      t.LinkWrapper = f;
      var s = f(o.Link);
      t.default = s;
    },
    12469: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var r = n(36549),
        o = n(82239),
        i = (0, o.LinkWrapper)(r.NavLink);
      t.default = i;
    },
    96433: function (e, t, n) {
      'use strict';
      function r() {
        var e = o(n(67294));
        return (
          (r = function () {
            return e;
          }),
          e
        );
      }
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var i = r()['default'].createContext({
        config: {
          mode: 'doc',
          title: '',
          navs: {},
          menus: {},
          locales: [],
          repository: { branch: 'master' },
          theme: {},
        },
        meta: { title: '' },
        menu: [],
        nav: [],
        base: '',
        routes: [],
        apis: {},
        demos: {},
      });
      t.default = i;
    },
    69724: function (e, t, n) {
      'use strict';
      var r = n(66933).default;
      function o() {
        var e = n(67294);
        return (
          (o = function () {
            return e;
          }),
          e
        );
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var i = u(n(96433));
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function a(e, t) {
        return d(e) || s(e, t) || l(e, t) || c();
      }
      function c() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function l(e, t) {
        if (e) {
          if ('string' === typeof e) return f(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? f(e, t)
              : void 0
          );
        }
      }
      function f(e, t) {
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
            o,
            i = [],
            u = !0,
            a = !1;
          try {
            for (n = n.call(e); !(u = (r = n.next()).done); u = !0)
              if ((i.push(r.value), t && i.length === t)) break;
          } catch (c) {
            (a = !0), (o = c);
          } finally {
            try {
              u || null == n['return'] || n['return']();
            } finally {
              if (a) throw o;
            }
          }
          return i;
        }
      }
      function d(e) {
        if (Array.isArray(e)) return e;
      }
      function p(e, t, n) {
        return Object.entries(e[t]).reduce(function (e, t) {
          var o = r(t, 2),
            i = o[0],
            u = o[1];
          return (
            (e[i] = u.map(function (e) {
              var t = { description: e.description };
              return (
                Object.keys(e).forEach(function (r) {
                  if (r.startsWith('description.')) {
                    var o = r.match(/^description\.(.*)$/),
                      i = a(o, 2),
                      u = i[1];
                    u && u === n && (t.description = e[r]);
                  } else t[r] = e[r];
                }),
                t
              );
            })),
            e
          );
        }, {});
      }
      var y = function (e) {
        var t = (0, o().useContext)(i['default']),
          n = t.locale,
          r = t.apis,
          u = (0, o().useState)(p(r, e, n)),
          c = a(u, 2),
          l = c[0],
          f = c[1];
        return (
          (0, o().useEffect)(
            function () {
              f(p(r, e, n));
            },
            [r, e, n],
          ),
          l
        );
      };
      t.default = y;
    },
    23749: function (e, t, n) {
      'use strict';
      var r = n(66933).default;
      function o() {
        var e = n(67294);
        return (
          (o = function () {
            return e;
          }),
          e
        );
      }
      function i() {
        var e = n(73269);
        return (
          (i = function () {
            return e;
          }),
          e
        );
      }
      function u(e, t) {
        return s(e) || f(e, t) || c(e, t) || a();
      }
      function a() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function c(e, t) {
        if (e) {
          if ('string' === typeof e) return l(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? l(e, t)
              : void 0
          );
        }
      }
      function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function f(e, t) {
        var n =
          null == e
            ? null
            : ('undefined' !== typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
        if (null != n) {
          var r,
            o,
            i = [],
            u = !0,
            a = !1;
          try {
            for (n = n.call(e); !(u = (r = n.next()).done); u = !0)
              if ((i.push(r.value), t && i.length === t)) break;
          } catch (c) {
            (a = !0), (o = c);
          } finally {
            try {
              u || null == n['return'] || n['return']();
            } finally {
              if (a) throw o;
            }
          }
          return i;
        }
      }
      function s(e) {
        if (Array.isArray(e)) return e;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var d = 'https://codesandbox.io/api/v1/sandboxes/define',
        p = function (e, t) {
          return 'react-dom' === e
            ? "/**\n* This is an auto-generated demo by dumi\n* if you think it is not working as expected,\n* please report the issue at\n* https://github.com/umijs/dumi/issues\n**/\n    \nimport React from 'react';\nimport ReactDOM from 'react-dom';\n".concat(
                t,
                "\nimport App from './App';\n    \nReactDOM.render(\n  <App />,\n  document.getElementById('root'),\n);",
              )
            : 'react-dom/client' === e
            ? '/**\n* This is an auto-generated demo by dumi\n* if you think it is not working as expected,\n* please report the issue at\n* https://github.com/umijs/dumi/issues\n**/\nimport React from \'react\';\nimport { createRoot } from "react-dom/client";\n'.concat(
                t,
                '\nimport App from "./App";\n\nconst rootElement = document.getElementById("root");\nconst root = createRoot(rootElement);\n\nroot.render(<App />);',
              )
            : void 0;
        },
        y = function (e) {
          return e.includes("import React from 'react';")
            ? e
            : "import React from 'react';\n".concat(e);
        };
      function v(e) {
        var t = document.createElement('span');
        t.innerHTML = e;
        var n = t.textContent;
        return t.remove(), n;
      }
      function m(e) {
        var t,
          n = Boolean(e.sources._.tsx),
          o = n ? '.tsx' : '.jsx',
          u = {},
          a = {},
          c = Object.values(e.dependencies).filter(function (e) {
            return e.css;
          }),
          l = 'App'.concat(o),
          f = 'index'.concat(o);
        return (
          Object.entries(e.dependencies).forEach(function (e) {
            var t = r(e, 2),
              n = t[0],
              o = t[1].version;
            a[n] = o;
          }),
          a['react-dom'] || (a['react-dom'] = a.react || 'latest'),
          (u['sandbox.config.json'] = {
            content: JSON.stringify(
              { template: n ? 'create-react-app-typescript' : 'create-react-app' },
              null,
              2,
            ),
            isBinary: !1,
          }),
          (u['package.json'] = {
            content: JSON.stringify(
              {
                name: e.title,
                description: v(e.description) || 'An auto-generated demo by dumi',
                main: f,
                dependencies: a,
                devDependencies: n ? { typescript: '^3' } : {},
              },
              null,
              2,
            ),
            isBinary: !1,
          }),
          (u['index.html'] = {
            content: '<div style="margin: 16px;" id="root"></div>',
            isBinary: !1,
          }),
          (u[f] = {
            content: p(
              (null === a || void 0 === a || null === (t = a['react-dom']) || void 0 === t
                ? void 0
                : t.startsWith('18.')) || 'latest' === a.react
                ? 'react-dom/client'
                : 'react-dom',
              c
                .map(function (e) {
                  var t = e.css;
                  return "import '".concat(t, "';");
                })
                .join('\n'),
            ),
            isBinary: !1,
          }),
          Object.entries(e.sources).forEach(function (e) {
            var t = r(e, 2),
              n = t[0],
              o = t[1],
              i = o.tsx,
              a = o.jsx,
              c = o.content;
            u['_' === n ? l : n] = { content: y(i || a || c), isBinary: !1 };
          }),
          (0, i().getParameters)({ files: u })
        );
      }
      var h = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d,
          n = (0, o().useState)(),
          r = u(n, 2),
          i = r[0],
          a = r[1];
        return (
          (0, o().useEffect)(
            function () {
              if (e) {
                var n = document.createElement('form'),
                  r = document.createElement('input'),
                  o = m(e);
                return (
                  (n.method = 'POST'),
                  (n.target = '_blank'),
                  (n.style.display = 'none'),
                  (n.action = t),
                  n.appendChild(r),
                  n.setAttribute('data-demo', e.title || ''),
                  (r.name = 'parameters'),
                  (r.value = o),
                  document.body.appendChild(n),
                  a(function () {
                    return function () {
                      return n.submit();
                    };
                  }),
                  function () {
                    return n.remove();
                  }
                );
              }
            },
            [e],
          ),
          i
        );
      };
      t.default = h;
    },
    45649: function (e, t, n) {
      'use strict';
      function r() {
        var e = n(67294);
        return (
          (r = function () {
            return e;
          }),
          e
        );
      }
      function o() {
        var e = i(n(31342));
        return (
          (o = function () {
            return e;
          }),
          e
        );
      }
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function u(e, t) {
        return s(e) || f(e, t) || c(e, t) || a();
      }
      function a() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function c(e, t) {
        if (e) {
          if ('string' === typeof e) return l(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? l(e, t)
              : void 0
          );
        }
      }
      function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function f(e, t) {
        var n =
          null == e
            ? null
            : ('undefined' !== typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
        if (null != n) {
          var r,
            o,
            i = [],
            u = !0,
            a = !1;
          try {
            for (n = n.call(e); !(u = (r = n.next()).done); u = !0)
              if ((i.push(r.value), t && i.length === t)) break;
          } catch (c) {
            (a = !0), (o = c);
          } finally {
            try {
              u || null == n['return'] || n['return']();
            } finally {
              if (a) throw o;
            }
          }
          return i;
        }
      }
      function s(e) {
        if (Array.isArray(e)) return e;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var d = function () {
        var e = (0, r().useState)(),
          t = u(e, 2),
          n = t[0],
          i = t[1],
          a = (0, r().useState)('ready'),
          c = u(a, 2),
          l = c[0],
          f = c[1],
          s = (0, r().useCallback)(function (e) {
            (0, o()['default'])(e),
              f('copied'),
              clearTimeout(n),
              i(
                setTimeout(function () {
                  f('ready');
                }, 2e3),
              );
          }, []);
        return [s, l];
      };
      t.default = d;
    },
    45284: function (e, t, n) {
      'use strict';
      function r() {
        var e = n(67294);
        return (
          (r = function () {
            return e;
          }),
          e
        );
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.getDemoUrl = t.getDemoRouteName = t.default = void 0);
      var o = i(n(96433));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function u(e, t) {
        return s(e) || f(e, t) || c(e, t) || a();
      }
      function a() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function c(e, t) {
        if (e) {
          if ('string' === typeof e) return l(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? l(e, t)
              : void 0
          );
        }
      }
      function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function f(e, t) {
        var n =
          null == e
            ? null
            : ('undefined' !== typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
        if (null != n) {
          var r,
            o,
            i = [],
            u = !0,
            a = !1;
          try {
            for (n = n.call(e); !(u = (r = n.next()).done); u = !0)
              if ((i.push(r.value), t && i.length === t)) break;
          } catch (c) {
            (a = !0), (o = c);
          } finally {
            try {
              u || null == n['return'] || n['return']();
            } finally {
              if (a) throw o;
            }
          }
          return i;
        }
      }
      function s(e) {
        if (Array.isArray(e)) return e;
      }
      function d() {
        return 'BASEMENT' === { NODE_ENV: 'production' }.PLATFORM_TYPE;
      }
      var p = function () {
        return d() ? '_demos' : '~demos';
      };
      t.getDemoRouteName = p;
      var y = function (e, t) {
        var n,
          r = window,
          o = r.location,
          i = o.href,
          a = o.origin,
          c = i.split(/#\//),
          l = u(c, 2),
          f = l[0],
          s = l[1],
          d = 'string' === typeof s;
        return [
          d ? ''.concat(f, '#') : a,
          ''
            .concat((null === (n = window) || void 0 === n ? void 0 : n.routerBase) || '', '/')
            .replace(/\/\/$/, '/'),
          p(),
          '/',
          e,
          ''.concat(t ? '.html' : ''),
        ].join('');
      };
      t.getDemoUrl = y;
      var v = function (e) {
        var t = (0, r().useContext)(o['default']),
          n = t.config,
          i = (0, r().useState)(''),
          a = u(i, 2),
          c = a[0],
          l = a[1];
        return (
          (0, r().useEffect)(
            function () {
              l(e ? y(e, n.exportStatic && n.exportStatic.htmlSuffix) : null);
            },
            [e, n],
          ),
          c
        );
      };
      t.default = v;
    },
    20107: function (e, t, n) {
      'use strict';
      function r() {
        var e = n(67294);
        return (
          (r = function () {
            return e;
          }),
          e
        );
      }
      function o(e, t) {
        return l(e) || c(e, t) || u(e, t) || i();
      }
      function i() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function u(e, t) {
        if (e) {
          if ('string' === typeof e) return a(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? a(e, t)
              : void 0
          );
        }
      }
      function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function c(e, t) {
        var n =
          null == e
            ? null
            : ('undefined' !== typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
        if (null != n) {
          var r,
            o,
            i = [],
            u = !0,
            a = !1;
          try {
            for (n = n.call(e); !(u = (r = n.next()).done); u = !0)
              if ((i.push(r.value), t && i.length === t)) break;
          } catch (c) {
            (a = !0), (o = c);
          } finally {
            try {
              u || null == n['return'] || n['return']();
            } finally {
              if (a) throw o;
            }
          }
          return i;
        }
      }
      function l(e) {
        if (Array.isArray(e)) return e;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var f = function (e, t) {
        var n = function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            var r = {};
            return (
              Object.keys(t[1]).forEach(function (e) {
                var n = (e.match(/^(.+)\.([^_]+)$/) || []).slice(1),
                  i = o(n, 2),
                  u = i[0],
                  a = i[1];
                (a && a !== t[0]) || (r[u || e] = t[1][e]);
              }),
              r
            );
          },
          i = (0, r().useState)(n(e, t)),
          u = o(i, 2),
          a = u[0],
          c = u[1];
        return (
          (0, r().useEffect)(
            function () {
              c(n(e, t));
            },
            [e, t],
          ),
          a
        );
      };
      t.default = f;
    },
    99897: function (e, t, n) {
      'use strict';
      function r() {
        var e = n(67294);
        return (
          (r = function () {
            return e;
          }),
          e
        );
      }
      function o(e, t) {
        return l(e) || c(e, t) || u(e, t) || i();
      }
      function i() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function u(e, t) {
        if (e) {
          if ('string' === typeof e) return a(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? a(e, t)
              : void 0
          );
        }
      }
      function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function c(e, t) {
        var n =
          null == e
            ? null
            : ('undefined' !== typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
        if (null != n) {
          var r,
            o,
            i = [],
            u = !0,
            a = !1;
          try {
            for (n = n.call(e); !(u = (r = n.next()).done); u = !0)
              if ((i.push(r.value), t && i.length === t)) break;
          } catch (c) {
            (a = !0), (o = c);
          } finally {
            try {
              u || null == n['return'] || n['return']();
            } finally {
              if (a) throw o;
            }
          }
          return i;
        }
      }
      function l(e) {
        if (Array.isArray(e)) return e;
      }
      function f(e, t, n) {
        var r,
          i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        if (i < t.length) {
          var u = t[i],
            a = function () {
              return f(e, t, n, i + 1);
            },
            c = u.match(/^([^:]+):?(.*)$/) || [],
            l = o(c, 3),
            s = l[1],
            d = l[2];
          switch (s) {
            case 'autoplay':
              a();
              break;
            case 'click':
              var p = d.match(/^(global\()?(.+?)\)?$/) || [],
                y = o(p, 3),
                v = y[1],
                m = y[2],
                h = v ? document : e;
              null === (r = h.querySelector(m)) || void 0 === r || r.click(), a();
              break;
            case 'timeout':
              setTimeout(a, Number(d));
              break;
            case 'capture':
              window.postMessage({ type: 'dumi:capture-element', value: d }, '*'), a();
              break;
            default:
              console.warn("[dumi: motion] unknown motion '".concat(u, "', skip.")), a();
          }
        } else n();
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var s = function (e, t) {
        var n = (0, r().useState)(!1),
          i = o(n, 2),
          u = i[0],
          a = i[1],
          c = (0, r().useCallback)(
            function () {
              u ||
                (f(t, e, function () {
                  a(!1);
                }),
                a(!0));
            },
            [e, t, u],
          );
        return (
          (0, r().useEffect)(
            function () {
              'autoplay' === e[0] && t && c();
            },
            [e, t],
          ),
          [c, u]
        );
      };
      t.default = s;
    },
    94918: function (e, t, n) {
      'use strict';
      var r = n(46507).default,
        o = n(21364).default;
      function i() {
        var e = n(67294);
        return (
          (i = function () {
            return e;
          }),
          e
        );
      }
      function u(e, t) {
        return s(e) || f(e, t) || c(e, t) || a();
      }
      function a() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function c(e, t) {
        if (e) {
          if ('string' === typeof e) return l(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? l(e, t)
              : void 0
          );
        }
      }
      function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function f(e, t) {
        var n =
          null == e
            ? null
            : ('undefined' !== typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
        if (null != n) {
          var r,
            o,
            i = [],
            u = !0,
            a = !1;
          try {
            for (n = n.call(e); !(u = (r = n.next()).done); u = !0)
              if ((i.push(r.value), t && i.length === t)) break;
          } catch (c) {
            (a = !0), (o = c);
          } finally {
            try {
              u || null == n['return'] || n['return']();
            } finally {
              if (a) throw o;
            }
          }
          return i;
        }
      }
      function s(e) {
        if (Array.isArray(e)) return e;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var d,
        p = 'data-prefers-color',
        y = 'dumi:prefers-color',
        v = (function () {
          function e() {
            var t = this;
            r(this, e),
              (this.color = void 0),
              (this.callbacks = []),
              (this.color = localStorage.getItem(y) || document.documentElement.getAttribute(p)),
              ['light', 'dark'].forEach(function (e) {
                var n = t.getColorMedia(e),
                  r = function (n) {
                    n.matches &&
                      'auto' === t.color &&
                      (document.documentElement.setAttribute(p, e), t.applyCallbacks());
                  };
                n.addEventListener
                  ? n.addEventListener('change', r)
                  : n.addListener && n.addListener(r);
              });
          }
          return (
            o(e, [
              {
                key: 'getColorMedia',
                value: function (e) {
                  return window.matchMedia('(prefers-color-scheme: '.concat(e, ')'));
                },
              },
              {
                key: 'isColorMode',
                value: function (e) {
                  return this.getColorMedia(e).matches;
                },
              },
              {
                key: 'applyCallbacks',
                value: function () {
                  var e = this;
                  this.callbacks.forEach(function (t) {
                    return t(e.color);
                  });
                },
              },
              {
                key: 'listen',
                value: function (e) {
                  this.callbacks.push(e);
                },
              },
              {
                key: 'unlisten',
                value: function (e) {
                  this.callbacks.splice(this.callbacks.indexOf(e), 1);
                },
              },
              {
                key: 'set',
                value: function (e) {
                  return (
                    (this.color = e),
                    localStorage.setItem(y, e),
                    this.applyCallbacks(),
                    'auto' === e
                      ? document.documentElement.setAttribute(
                          p,
                          this.isColorMode('dark') ? 'dark' : 'light',
                        )
                      : document.documentElement.setAttribute(p, e),
                    e
                  );
                },
              },
            ]),
            e
          );
        })(),
        m = function () {
          var e = (0, i().useState)(),
            t = u(e, 2),
            n = t[0],
            r = t[1],
            o = (0, i().useCallback)(function (e) {
              d.set(e);
            }, []);
          return (
            (0, i().useEffect)(function () {
              return (
                (d = d || new v()),
                d.listen(r),
                r(d.color),
                function () {
                  return d.unlisten(r);
                }
              );
            }, []),
            [n, o]
          );
        };
      t.default = m;
    },
    34759: function (e, t, n) {
      'use strict';
      var r = n(33657).default,
        o = n(66933).default;
      function i() {
        var e = n(67294);
        return (
          (i = function () {
            return e;
          }),
          e
        );
      }
      function u(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                c(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function c(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function l(e, t) {
        return y(e) || p(e, t) || s(e, t) || f();
      }
      function f() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function s(e, t) {
        if (e) {
          if ('string' === typeof e) return d(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? d(e, t)
              : void 0
          );
        }
      }
      function d(e, t) {
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
            o,
            i = [],
            u = !0,
            a = !1;
          try {
            for (n = n.call(e); !(u = (r = n.next()).done); u = !0)
              if ((i.push(r.value), t && i.length === t)) break;
          } catch (c) {
            (a = !0), (o = c);
          } finally {
            try {
              u || null == n['return'] || n['return']();
            } finally {
              if (a) throw o;
            }
          }
          return i;
        }
      }
      function y(e) {
        if (Array.isArray(e)) return e;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var v,
        m = 'https://riddle.alibaba-inc.com/riddles/define',
        h = function () {
          var e = (0, i().useState)(Boolean(v)),
            t = l(e, 2),
            n = t[0],
            r = t[1];
          return (
            (0, i().useEffect)(function () {
              if (void 0 === v) {
                var e = document.createElement('img');
                setTimeout(function () {
                  (e.src = ''), e.remove();
                }, 200),
                  (e.onload = function () {
                    (v = !0), r(!0), e.remove();
                  }),
                  (e.src =
                    'https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png');
              }
            }, []),
            n
          );
        };
      function b(e) {
        var t = e.sources._.tsx || e.sources._.jsx;
        return (
          (t = t
            .replace(/^/, "import ReactDOM from 'react-dom';\n")
            .replace('export default', 'const DumiDemo =')
            .concat('\nReactDOM.render(<DumiDemo />, mountNode);')),
          t
        );
      }
      var g = function (e) {
        var t = (0, i().useState)(),
          n = l(t, 2),
          u = n[0],
          c = n[1],
          f = h();
        return (
          (0, i().useEffect)(
            function () {
              if (e && f && 1 === Object.keys(e.sources).length) {
                var t,
                  n = document.createElement('form'),
                  i = document.createElement('input');
                return (
                  (n.method = 'POST'),
                  (n.target = '_blank'),
                  (n.style.display = 'none'),
                  (n.action = m),
                  n.appendChild(i),
                  n.setAttribute('data-demo', e.title || ''),
                  (i.name = 'data'),
                  (i.value = JSON.stringify({
                    title: e.titlle,
                    js: b(e),
                    css: Object.entries(e.dependencies)
                      .filter(function (e) {
                        var t = o(e, 2),
                          n = t[1];
                        return n.css;
                      })
                      .map(function (e) {
                        var t = o(e, 2),
                          n = t[0],
                          r = t[1],
                          i = r.version,
                          u = r.css;
                        return "@import '~".concat(
                          u.replace(new RegExp('^('.concat(n, ')')), '$1@'.concat(i)),
                          "';",
                        );
                      })
                      .concat(
                        e.background ? 'body {\n  background: '.concat(e.background, ';\n}') : '',
                      )
                      .join('\n'),
                    json: JSON.stringify(
                      {
                        description: e.description,
                        dependencies: Object.entries(e.dependencies).reduce(
                          function (e, t) {
                            var n = o(t, 2),
                              i = n[0],
                              u = n[1].version;
                            return a(a({}, e), {}, r({}, i, u));
                          },
                          {
                            'react-dom':
                              (null === (t = e.dependencies.react) || void 0 === t
                                ? void 0
                                : t.version) || 'latest',
                          },
                        ),
                      },
                      null,
                      2,
                    ),
                  })),
                  document.body.appendChild(n),
                  c(function () {
                    return function () {
                      return n.submit();
                    };
                  }),
                  function () {
                    return n.remove();
                  }
                );
              }
            },
            [e, f],
          ),
          u
        );
      };
      t.default = g;
    },
    47148: function (e, t, n) {
      'use strict';
      var r = n(30352).default;
      function o() {
        var e = n(67294);
        return (
          (o = function () {
            return e;
          }),
          e
        );
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var i = n(96089);
      function u(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                c(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function c(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function l(e, t) {
        return y(e) || p(e, t) || s(e, t) || f();
      }
      function f() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function s(e, t) {
        if (e) {
          if ('string' === typeof e) return d(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? d(e, t)
              : void 0
          );
        }
      }
      function d(e, t) {
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
            o,
            i = [],
            u = !0,
            a = !1;
          try {
            for (n = n.call(e); !(u = (r = n.next()).done); u = !0)
              if ((i.push(r.value), t && i.length === t)) break;
          } catch (c) {
            (a = !0), (o = c);
          } finally {
            try {
              u || null == n['return'] || n['return']();
            } finally {
              if (a) throw o;
            }
          }
          return i;
        }
      }
      function y(e) {
        if (Array.isArray(e)) return e;
      }
      var v = function (e) {
          var t = (0, o().useContext)(i.context),
            n = t.locale,
            u = t.routes,
            a = t.config.locales,
            c = (0, o().useState)([]),
            f = l(c, 2),
            s = f[0],
            d = f[1],
            p = (0, o().useState)([]),
            y = l(p, 2),
            v = y[0],
            m = y[1];
          return (
            (0, o().useEffect)(
              function () {
                d(
                  u
                    .filter(function (e) {
                      var t = e.title,
                        r = e.meta,
                        o = (null === r || void 0 === r ? void 0 : r.locale) === n,
                        i =
                          !(null === r || void 0 === r ? void 0 : r.locale) &&
                          (!a.length || n === a[0].name);
                      return t && (i || o);
                    })
                    .reduce(function (e, t) {
                      var n,
                        o,
                        i,
                        u = {
                          title:
                            (null === (n = t.meta) || void 0 === n ? void 0 : n.title) || t.title,
                          path: t.path,
                        };
                      return (
                        (null === (o = t.meta) || void 0 === o ? void 0 : o.group) &&
                          (u.parent = t.meta.group),
                        e.push(u),
                        e.push.apply(
                          e,
                          r(
                            ((null === (i = t.meta) || void 0 === i ? void 0 : i.slugs) || [])
                              .filter(function (e) {
                                var n,
                                  r = e.value;
                                return (
                                  r !==
                                  ((null === (n = t.meta) || void 0 === n ? void 0 : n.title) ||
                                    t.title)
                                );
                              })
                              .map(function (e) {
                                return {
                                  title: e.value,
                                  path: ''.concat(t.path, '#').concat(e.heading),
                                  parent: u,
                                };
                              }),
                          ),
                        ),
                        e
                      );
                    }, []),
                );
              },
              [u.length, n],
            ),
            (0, o().useEffect)(
              function () {
                var t = null === e || void 0 === e ? void 0 : e.trim().toUpperCase();
                if (t) {
                  for (var n = [], r = 0; r < s.length; r += 1)
                    s[r].title.toUpperCase().indexOf(t) > -1 && n.push(s[r]);
                  m(n);
                } else m([]);
              },
              [e, s.length],
            ),
            v
          );
        },
        m = function () {
          var e = (0, o().useContext)(i.context),
            t = e.config.algolia,
            n = (0, o().useCallback)(
              function (e) {
                window.docsearch(a({ inputSelector: e }, t));
              },
              [t],
            );
          return n;
        },
        h = function (e) {
          var t = (0, o().useContext)(i.context),
            n = t.config,
            r = v(e),
            u = m();
          return n.algolia ? u : r;
        };
      t.default = h;
    },
    8104: function (e, t, n) {
      'use strict';
      function r() {
        var e = n(67294);
        return (
          (r = function () {
            return e;
          }),
          e
        );
      }
      function o() {
        var e = i(n(82477));
        return (
          (o = function () {
            return e;
          }),
          e
        );
      }
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function u(e, t) {
        return s(e) || f(e, t) || c(e, t) || a();
      }
      function a() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function c(e, t) {
        if (e) {
          if ('string' === typeof e) return l(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? l(e, t)
              : void 0
          );
        }
      }
      function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function f(e, t) {
        var n =
          null == e
            ? null
            : ('undefined' !== typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
        if (null != n) {
          var r,
            o,
            i = [],
            u = !0,
            a = !1;
          try {
            for (n = n.call(e); !(u = (r = n.next()).done); u = !0)
              if ((i.push(r.value), t && i.length === t)) break;
          } catch (c) {
            (a = !0), (o = c);
          } finally {
            try {
              u || null == n['return'] || n['return']();
            } finally {
              if (a) throw o;
            }
          }
          return i;
        }
      }
      function s(e) {
        if (Array.isArray(e)) return e;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var d = {
          'zh-CN': 'https://www.typescriptlang.org/zh/play',
          'en-US': 'https://www.typescriptlang.org/play',
        },
        p = function (e, t) {
          var n = function () {
              var e = /^zh|cn$/.test(arguments.length <= 0 ? void 0 : arguments[0])
                ? d['zh-CN']
                : d['en-US'];
              return ''
                .concat(e, '?skipLibCheck=true&jsx=1#code/')
                .concat(
                  o()['default'].compressToEncodedURIComponent(
                    arguments.length <= 1 ? void 0 : arguments[1],
                  ),
                );
            },
            i = (0, r().useState)(n(e, t)),
            a = u(i, 2),
            c = a[0],
            l = a[1];
          return (
            (0, r().useEffect)(
              function () {
                l(n(e, t));
              },
              [e, t],
            ),
            c
          );
        };
      t.default = p;
    },
    96089: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'AnchorLink', {
          enumerable: !0,
          get: function () {
            return u['default'];
          },
        }),
        Object.defineProperty(t, 'Link', {
          enumerable: !0,
          get: function () {
            return o['default'];
          },
        }),
        Object.defineProperty(t, 'NavLink', {
          enumerable: !0,
          get: function () {
            return i['default'];
          },
        }),
        Object.defineProperty(t, 'context', {
          enumerable: !0,
          get: function () {
            return r['default'];
          },
        }),
        Object.defineProperty(t, 'getDemoUrl', {
          enumerable: !0,
          get: function () {
            return p.getDemoUrl;
          },
        }),
        Object.defineProperty(t, 'useApiData', {
          enumerable: !0,
          get: function () {
            return y['default'];
          },
        }),
        Object.defineProperty(t, 'useCodeSandbox', {
          enumerable: !0,
          get: function () {
            return s['default'];
          },
        }),
        Object.defineProperty(t, 'useCopy', {
          enumerable: !0,
          get: function () {
            return c['default'];
          },
        }),
        Object.defineProperty(t, 'useDemoUrl', {
          enumerable: !0,
          get: function () {
            return p['default'];
          },
        }),
        Object.defineProperty(t, 'useLocaleProps', {
          enumerable: !0,
          get: function () {
            return d['default'];
          },
        }),
        Object.defineProperty(t, 'useMotions', {
          enumerable: !0,
          get: function () {
            return f['default'];
          },
        }),
        Object.defineProperty(t, 'usePrefersColor', {
          enumerable: !0,
          get: function () {
            return m['default'];
          },
        }),
        Object.defineProperty(t, 'useRiddle', {
          enumerable: !0,
          get: function () {
            return l['default'];
          },
        }),
        Object.defineProperty(t, 'useSearch', {
          enumerable: !0,
          get: function () {
            return a['default'];
          },
        }),
        Object.defineProperty(t, 'useTSPlaygroundUrl', {
          enumerable: !0,
          get: function () {
            return v['default'];
          },
        });
      var r = g(n(96433)),
        o = g(n(82239)),
        i = g(n(12469)),
        u = g(n(76248)),
        a = g(n(47148)),
        c = g(n(45649)),
        l = g(n(34759)),
        f = g(n(99897)),
        s = g(n(23749)),
        d = g(n(20107)),
        p = b(n(45284)),
        y = g(n(69724)),
        v = g(n(8104)),
        m = g(n(94918));
      function h(e) {
        if ('function' !== typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (h = function (e) {
          return e ? n : t;
        })(e);
      }
      function b(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ('object' !== typeof e && 'function' !== typeof e)) return { default: e };
        var n = h(t);
        if (n && n.has(e)) return n.get(e);
        var r = {},
          o = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var i in e)
          if ('default' !== i && Object.prototype.hasOwnProperty.call(e, i)) {
            var u = o ? Object.getOwnPropertyDescriptor(e, i) : null;
            u && (u.get || u.set) ? Object.defineProperty(r, i, u) : (r[i] = e[i]);
          }
        return (r['default'] = e), n && n.set(e, r), r;
      }
      function g(e) {
        return e && e.__esModule ? e : { default: e };
      }
    },
    98010: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.getParameters = void 0);
      var r = n(82477);
      function o(e) {
        return r.compressToBase64(e).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
      }
      function i(e) {
        return o(JSON.stringify(e));
      }
      t.getParameters = i;
    },
    73269: function (e, t, n) {
      'use strict';
      (t.__esModule = !0), (t.getParameters = void 0);
      var r = n(98010);
      t.getParameters = r.getParameters;
    },
    31342: function (e) {
      'use strict';
      var t = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = t.target,
          r = void 0 === n ? document.body : n,
          o = document.createElement('textarea'),
          i = document.activeElement;
        (o.value = e),
          o.setAttribute('readonly', ''),
          (o.style.contain = 'strict'),
          (o.style.position = 'absolute'),
          (o.style.left = '-9999px'),
          (o.style.fontSize = '12pt');
        var u = document.getSelection(),
          a = !1;
        u.rangeCount > 0 && (a = u.getRangeAt(0)),
          r.append(o),
          o.select(),
          (o.selectionStart = 0),
          (o.selectionEnd = e.length);
        var c = !1;
        try {
          c = document.execCommand('copy');
        } catch (l) {}
        return o.remove(), a && (u.removeAllRanges(), u.addRange(a)), i && i.focus(), c;
      };
      (e.exports = t), (e.exports.default = t);
    },
    97397: function (e, t, n) {
      var r = 'Expected a function',
        o = NaN,
        i = '[object Symbol]',
        u = /^\s+|\s+$/g,
        a = /^[-+]0x[0-9a-f]+$/i,
        c = /^0b[01]+$/i,
        l = /^0o[0-7]+$/i,
        f = parseInt,
        s = 'object' == typeof n.g && n.g && n.g.Object === Object && n.g,
        d = 'object' == typeof self && self && self.Object === Object && self,
        p = s || d || Function('return this')(),
        y = Object.prototype,
        v = y.toString,
        m = Math.max,
        h = Math.min,
        b = function () {
          return p.Date.now();
        };
      function g(e, t, n) {
        var o,
          i,
          u,
          a,
          c,
          l,
          f = 0,
          s = !1,
          d = !1,
          p = !0;
        if ('function' != typeof e) throw new TypeError(r);
        function y(t) {
          var n = o,
            r = i;
          return (o = i = void 0), (f = t), (a = e.apply(r, n)), a;
        }
        function v(e) {
          return (f = e), (c = setTimeout(j, t)), s ? y(e) : a;
        }
        function g(e) {
          var n = e - l,
            r = e - f,
            o = t - n;
          return d ? h(o, u - r) : o;
        }
        function w(e) {
          var n = e - l,
            r = e - f;
          return void 0 === l || n >= t || n < 0 || (d && r >= u);
        }
        function j() {
          var e = b();
          if (w(e)) return A(e);
          c = setTimeout(j, g(e));
        }
        function A(e) {
          return (c = void 0), p && o ? y(e) : ((o = i = void 0), a);
        }
        function k() {
          void 0 !== c && clearTimeout(c), (f = 0), (o = l = i = c = void 0);
        }
        function x() {
          return void 0 === c ? a : A(b());
        }
        function _() {
          var e = b(),
            n = w(e);
          if (((o = arguments), (i = this), (l = e), n)) {
            if (void 0 === c) return v(l);
            if (d) return (c = setTimeout(j, t)), y(l);
          }
          return void 0 === c && (c = setTimeout(j, t)), a;
        }
        return (
          (t = S(t) || 0),
          O(n) &&
            ((s = !!n.leading),
            (d = 'maxWait' in n),
            (u = d ? m(S(n.maxWait) || 0, t) : u),
            (p = 'trailing' in n ? !!n.trailing : p)),
          (_.cancel = k),
          (_.flush = x),
          _
        );
      }
      function w(e, t, n) {
        var o = !0,
          i = !0;
        if ('function' != typeof e) throw new TypeError(r);
        return (
          O(n) &&
            ((o = 'leading' in n ? !!n.leading : o), (i = 'trailing' in n ? !!n.trailing : i)),
          g(e, t, { leading: o, maxWait: t, trailing: i })
        );
      }
      function O(e) {
        var t = typeof e;
        return !!e && ('object' == t || 'function' == t);
      }
      function j(e) {
        return !!e && 'object' == typeof e;
      }
      function A(e) {
        return 'symbol' == typeof e || (j(e) && v.call(e) == i);
      }
      function S(e) {
        if ('number' == typeof e) return e;
        if (A(e)) return o;
        if (O(e)) {
          var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
          e = O(t) ? t + '' : t;
        }
        if ('string' != typeof e) return 0 === e ? e : +e;
        e = e.replace(u, '');
        var n = c.test(e);
        return n || l.test(e) ? f(e.slice(2), n ? 2 : 8) : a.test(e) ? o : +e;
      }
      e.exports = w;
    },
    82477: function (e, t, n) {
      var r,
        o = (function () {
          var e = String.fromCharCode,
            t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
            n = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$',
            r = {};
          function o(e, t) {
            if (!r[e]) {
              r[e] = {};
              for (var n = 0; n < e.length; n++) r[e][e.charAt(n)] = n;
            }
            return r[e][t];
          }
          var i = {
            compressToBase64: function (e) {
              if (null == e) return '';
              var n = i._compress(e, 6, function (e) {
                return t.charAt(e);
              });
              switch (n.length % 4) {
                default:
                case 0:
                  return n;
                case 1:
                  return n + '===';
                case 2:
                  return n + '==';
                case 3:
                  return n + '=';
              }
            },
            decompressFromBase64: function (e) {
              return null == e
                ? ''
                : '' == e
                ? null
                : i._decompress(e.length, 32, function (n) {
                    return o(t, e.charAt(n));
                  });
            },
            compressToUTF16: function (t) {
              return null == t
                ? ''
                : i._compress(t, 15, function (t) {
                    return e(t + 32);
                  }) + ' ';
            },
            decompressFromUTF16: function (e) {
              return null == e
                ? ''
                : '' == e
                ? null
                : i._decompress(e.length, 16384, function (t) {
                    return e.charCodeAt(t) - 32;
                  });
            },
            compressToUint8Array: function (e) {
              for (
                var t = i.compress(e), n = new Uint8Array(2 * t.length), r = 0, o = t.length;
                r < o;
                r++
              ) {
                var u = t.charCodeAt(r);
                (n[2 * r] = u >>> 8), (n[2 * r + 1] = u % 256);
              }
              return n;
            },
            decompressFromUint8Array: function (t) {
              if (null === t || void 0 === t) return i.decompress(t);
              for (var n = new Array(t.length / 2), r = 0, o = n.length; r < o; r++)
                n[r] = 256 * t[2 * r] + t[2 * r + 1];
              var u = [];
              return (
                n.forEach(function (t) {
                  u.push(e(t));
                }),
                i.decompress(u.join(''))
              );
            },
            compressToEncodedURIComponent: function (e) {
              return null == e
                ? ''
                : i._compress(e, 6, function (e) {
                    return n.charAt(e);
                  });
            },
            decompressFromEncodedURIComponent: function (e) {
              return null == e
                ? ''
                : '' == e
                ? null
                : ((e = e.replace(/ /g, '+')),
                  i._decompress(e.length, 32, function (t) {
                    return o(n, e.charAt(t));
                  }));
            },
            compress: function (t) {
              return i._compress(t, 16, function (t) {
                return e(t);
              });
            },
            _compress: function (e, t, n) {
              if (null == e) return '';
              var r,
                o,
                i,
                u = {},
                a = {},
                c = '',
                l = '',
                f = '',
                s = 2,
                d = 3,
                p = 2,
                y = [],
                v = 0,
                m = 0;
              for (i = 0; i < e.length; i += 1)
                if (
                  ((c = e.charAt(i)),
                  Object.prototype.hasOwnProperty.call(u, c) || ((u[c] = d++), (a[c] = !0)),
                  (l = f + c),
                  Object.prototype.hasOwnProperty.call(u, l))
                )
                  f = l;
                else {
                  if (Object.prototype.hasOwnProperty.call(a, f)) {
                    if (f.charCodeAt(0) < 256) {
                      for (r = 0; r < p; r++)
                        (v <<= 1), m == t - 1 ? ((m = 0), y.push(n(v)), (v = 0)) : m++;
                      for (o = f.charCodeAt(0), r = 0; r < 8; r++)
                        (v = (v << 1) | (1 & o)),
                          m == t - 1 ? ((m = 0), y.push(n(v)), (v = 0)) : m++,
                          (o >>= 1);
                    } else {
                      for (o = 1, r = 0; r < p; r++)
                        (v = (v << 1) | o),
                          m == t - 1 ? ((m = 0), y.push(n(v)), (v = 0)) : m++,
                          (o = 0);
                      for (o = f.charCodeAt(0), r = 0; r < 16; r++)
                        (v = (v << 1) | (1 & o)),
                          m == t - 1 ? ((m = 0), y.push(n(v)), (v = 0)) : m++,
                          (o >>= 1);
                    }
                    s--, 0 == s && ((s = Math.pow(2, p)), p++), delete a[f];
                  } else
                    for (o = u[f], r = 0; r < p; r++)
                      (v = (v << 1) | (1 & o)),
                        m == t - 1 ? ((m = 0), y.push(n(v)), (v = 0)) : m++,
                        (o >>= 1);
                  s--, 0 == s && ((s = Math.pow(2, p)), p++), (u[l] = d++), (f = String(c));
                }
              if ('' !== f) {
                if (Object.prototype.hasOwnProperty.call(a, f)) {
                  if (f.charCodeAt(0) < 256) {
                    for (r = 0; r < p; r++)
                      (v <<= 1), m == t - 1 ? ((m = 0), y.push(n(v)), (v = 0)) : m++;
                    for (o = f.charCodeAt(0), r = 0; r < 8; r++)
                      (v = (v << 1) | (1 & o)),
                        m == t - 1 ? ((m = 0), y.push(n(v)), (v = 0)) : m++,
                        (o >>= 1);
                  } else {
                    for (o = 1, r = 0; r < p; r++)
                      (v = (v << 1) | o),
                        m == t - 1 ? ((m = 0), y.push(n(v)), (v = 0)) : m++,
                        (o = 0);
                    for (o = f.charCodeAt(0), r = 0; r < 16; r++)
                      (v = (v << 1) | (1 & o)),
                        m == t - 1 ? ((m = 0), y.push(n(v)), (v = 0)) : m++,
                        (o >>= 1);
                  }
                  s--, 0 == s && ((s = Math.pow(2, p)), p++), delete a[f];
                } else
                  for (o = u[f], r = 0; r < p; r++)
                    (v = (v << 1) | (1 & o)),
                      m == t - 1 ? ((m = 0), y.push(n(v)), (v = 0)) : m++,
                      (o >>= 1);
                s--, 0 == s && ((s = Math.pow(2, p)), p++);
              }
              for (o = 2, r = 0; r < p; r++)
                (v = (v << 1) | (1 & o)),
                  m == t - 1 ? ((m = 0), y.push(n(v)), (v = 0)) : m++,
                  (o >>= 1);
              while (1) {
                if (((v <<= 1), m == t - 1)) {
                  y.push(n(v));
                  break;
                }
                m++;
              }
              return y.join('');
            },
            decompress: function (e) {
              return null == e
                ? ''
                : '' == e
                ? null
                : i._decompress(e.length, 32768, function (t) {
                    return e.charCodeAt(t);
                  });
            },
            _decompress: function (t, n, r) {
              var o,
                i,
                u,
                a,
                c,
                l,
                f,
                s = [],
                d = 4,
                p = 4,
                y = 3,
                v = '',
                m = [],
                h = { val: r(0), position: n, index: 1 };
              for (o = 0; o < 3; o += 1) s[o] = o;
              (u = 0), (c = Math.pow(2, 2)), (l = 1);
              while (l != c)
                (a = h.val & h.position),
                  (h.position >>= 1),
                  0 == h.position && ((h.position = n), (h.val = r(h.index++))),
                  (u |= (a > 0 ? 1 : 0) * l),
                  (l <<= 1);
              switch (u) {
                case 0:
                  (u = 0), (c = Math.pow(2, 8)), (l = 1);
                  while (l != c)
                    (a = h.val & h.position),
                      (h.position >>= 1),
                      0 == h.position && ((h.position = n), (h.val = r(h.index++))),
                      (u |= (a > 0 ? 1 : 0) * l),
                      (l <<= 1);
                  f = e(u);
                  break;
                case 1:
                  (u = 0), (c = Math.pow(2, 16)), (l = 1);
                  while (l != c)
                    (a = h.val & h.position),
                      (h.position >>= 1),
                      0 == h.position && ((h.position = n), (h.val = r(h.index++))),
                      (u |= (a > 0 ? 1 : 0) * l),
                      (l <<= 1);
                  f = e(u);
                  break;
                case 2:
                  return '';
              }
              (s[3] = f), (i = f), m.push(f);
              while (1) {
                if (h.index > t) return '';
                (u = 0), (c = Math.pow(2, y)), (l = 1);
                while (l != c)
                  (a = h.val & h.position),
                    (h.position >>= 1),
                    0 == h.position && ((h.position = n), (h.val = r(h.index++))),
                    (u |= (a > 0 ? 1 : 0) * l),
                    (l <<= 1);
                switch ((f = u)) {
                  case 0:
                    (u = 0), (c = Math.pow(2, 8)), (l = 1);
                    while (l != c)
                      (a = h.val & h.position),
                        (h.position >>= 1),
                        0 == h.position && ((h.position = n), (h.val = r(h.index++))),
                        (u |= (a > 0 ? 1 : 0) * l),
                        (l <<= 1);
                    (s[p++] = e(u)), (f = p - 1), d--;
                    break;
                  case 1:
                    (u = 0), (c = Math.pow(2, 16)), (l = 1);
                    while (l != c)
                      (a = h.val & h.position),
                        (h.position >>= 1),
                        0 == h.position && ((h.position = n), (h.val = r(h.index++))),
                        (u |= (a > 0 ? 1 : 0) * l),
                        (l <<= 1);
                    (s[p++] = e(u)), (f = p - 1), d--;
                    break;
                  case 2:
                    return m.join('');
                }
                if ((0 == d && ((d = Math.pow(2, y)), y++), s[f])) v = s[f];
                else {
                  if (f !== p) return null;
                  v = i + i.charAt(0);
                }
                m.push(v),
                  (s[p++] = i + v.charAt(0)),
                  d--,
                  (i = v),
                  0 == d && ((d = Math.pow(2, y)), y++);
              }
            },
          };
          return i;
        })();
      (r = function () {
        return o;
      }.call(t, n, t, e)),
        void 0 === r || (e.exports = r);
    },
  },
]);
