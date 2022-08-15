(self['webpackChunkart_antd_react'] = self['webpackChunkart_antd_react'] || []).push([
  [935],
  {
    35956: function (e, t, n) {
      'use strict';
      n.r(t);
      var a = n(67294),
        r = n(96089),
        l = n(65659),
        c = a.memo((e) => {
          e.demos;
          return a.createElement(
            a.Fragment,
            null,
            a.createElement(
              'div',
              { className: 'markdown' },
              a.createElement(
                'h2',
                { id: 'hello-art-react-antd' },
                a.createElement(
                  r.AnchorLink,
                  { to: '#hello-art-react-antd', 'aria-hidden': 'true', tabIndex: -1 },
                  a.createElement('span', { className: 'icon icon-link' }),
                ),
                'Hello art-react-antd!',
              ),
              a.createElement(
                'h1',
                { id: 'art-antd-react' },
                a.createElement(
                  r.AnchorLink,
                  { to: '#art-antd-react', 'aria-hidden': 'true', tabIndex: -1 },
                  a.createElement('span', { className: 'icon icon-link' }),
                ),
                'art-antd-react',
              ),
              a.createElement(
                'h3',
                {
                  id: '\u57fa\u4e8e-ant-design-\u5f00\u53d1\u7684\u914d\u7f6e\u5316\u7ec4\u4ef6\u65e8\u5728\u901a\u8fc7\u914d\u7f6e\u5316\u5f00\u53d1\u505a\u66f4\u5feb\u66f4\u9ad8\u6548\u66f4\u5feb\u4e50\u7684\u505a\u4e00\u4e2a\u524d\u7aef\u5f00\u53d1\u827a\u672f\u5bb6',
                },
                a.createElement(
                  r.AnchorLink,
                  {
                    to: '#\u57fa\u4e8e-ant-design-\u5f00\u53d1\u7684\u914d\u7f6e\u5316\u7ec4\u4ef6\u65e8\u5728\u901a\u8fc7\u914d\u7f6e\u5316\u5f00\u53d1\u505a\u66f4\u5feb\u66f4\u9ad8\u6548\u66f4\u5feb\u4e50\u7684\u505a\u4e00\u4e2a\u524d\u7aef\u5f00\u53d1\u827a\u672f\u5bb6',
                    'aria-hidden': 'true',
                    tabIndex: -1,
                  },
                  a.createElement('span', { className: 'icon icon-link' }),
                ),
                '\u57fa\u4e8e ',
                a.createElement(
                  r.Link,
                  { to: 'https://ant-design.gitee.io/components/overview-cn/' },
                  'Ant Design',
                ),
                ' \u5f00\u53d1\u7684\u914d\u7f6e\u5316\u7ec4\u4ef6\uff0c\u65e8\u5728\u901a\u8fc7\u914d\u7f6e\u5316\u5f00\u53d1\u3001\u505a\u66f4\u5feb\u66f4\u9ad8\u6548\u66f4\u5feb\u4e50\u7684\u505a\u4e00\u4e2a\u524d\u7aef\u5f00\u53d1\u827a\u672f\u5bb6',
              ),
              a.createElement('p', null, '\u4f55\u65f6\u4f7f\u7528\u8be5\u7ec4\u4ef6\u5e93\uff1a'),
              a.createElement(
                'ul',
                null,
                a.createElement('li', null, '\u914d\u7f6e\u5316\u5f00\u53d1\u8868\u5355'),
                a.createElement(
                  'li',
                  null,
                  '\u914d\u7f6e\u5316\u5c55\u793a\u8be6\u60c5\u4fe1\u606f',
                ),
                a.createElement(
                  'li',
                  null,
                  '\u901a\u8fc7 hooks \u6765\u5f00\u53d1\u6a21\u677f\u9875\u9762',
                ),
                a.createElement(
                  'li',
                  null,
                  '\u901a\u8fc7 hooks \u6765\u914d\u7f6e\u5316\u8868\u5355\u5f39\u6846',
                ),
                a.createElement(
                  'li',
                  null,
                  'useRequest \u8bf7\u6c42\u6570\u636e\u81ea\u52a8 loading\u3001\u5904\u7406 error\u3001format \u8fd4\u56de\u6570\u636e\u3001\u624b\u52a8\u81ea\u52a8\u8bf7\u6c42\u6570\u636e',
                ),
                a.createElement(
                  'li',
                  null,
                  '\u5feb\u901f\u4f7f\u7528 antd \u642d\u5efa\u4e00\u4e2a react demo\uff08\u65e0\u9700\u914d\u7f6e\uff09\uff0c\u5f00\u7bb1\u5373\u7528 antd \u7ec4\u4ef6',
                ),
              ),
              a.createElement(
                'h3',
                { id: 'getting-started' },
                a.createElement(
                  r.AnchorLink,
                  { to: '#getting-started', 'aria-hidden': 'true', tabIndex: -1 },
                  a.createElement('span', { className: 'icon icon-link' }),
                ),
                'Getting Started',
              ),
              a.createElement(l.Z, {
                code: 'npm i art-antd-react\n# or\nyarn add art-antd-react\n\n# \u5728\u5165\u53e3\u5f15\u5165\u4ee5\u4e0b\u6587\u4ef6(\u8fd9\u662fantd\u7684\u9ed8\u8ba4\u4e3b\u9898\u6837\u5f0f\uff0c\u5982\u679c\u8981\u5f15\u5165\u5176\u4ed6\u4e3b\u9898\u6837\u5f0f\u53ef\u4ee5\u5728\u9879\u76ee\u4e2d\u6309\u7167 https://ant-design.gitee.io/docs/react/use-with-create-react-app-cn \u8986\u76d6\u5373\u53ef) \nimport "art-antd-react/dist/esm/styles/defaultAntdCss.css"',
                lang: 'shell',
              }),
            ),
          );
        });
      t['default'] = (e) => {
        var t = a.useContext(r.context),
          n = t.demos;
        return (
          a.useEffect(() => {
            var t;
            null !== e &&
              void 0 !== e &&
              null !== (t = e.location) &&
              void 0 !== t &&
              t.hash &&
              r.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)));
          }, []),
          a.createElement(c, { demos: n })
        );
      };
    },
  },
]);
