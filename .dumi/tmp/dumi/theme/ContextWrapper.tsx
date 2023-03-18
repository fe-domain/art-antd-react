// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import { history, useOutlet } from 'dumi';
import React, { useEffect, useRef, useState } from 'react';
import { locales } from '../locales/config';
import { components, demos } from '../meta';
import { SiteContext } from '/Users/jakequc/Desktop/code-space/gitee/art-antd-react/node_modules/.pnpm/dumi@2.1.14_3wjs623rhauwfddtd2ethvqjym/node_modules/dumi/dist/client/theme-api/context.js';

const entryExports = {};

export default function DumiContextWrapper() {
  const outlet = useOutlet();
  const [loading, setLoading] = useState(true);
  const prev = useRef(history.location.pathname);

  useEffect(() => {
    return history.listen((next) => {
      if (next.location.pathname !== prev.current) {
        prev.current = next.location.pathname;

        // mark loading when route change, page component will set false when loaded
        setLoading(true);

        // scroll to top when route changed
        document.documentElement.scrollTo(0, 0);
      }
    });
  }, []);

  return (
    <SiteContext.Provider
      value={{
        pkg: {
          name: 'art-antd-react',
          description:
            'A library of components to help you develop web pages quickly',
          version: '1.8.10',
          license: 'MIT',
          repository: {
            type: 'gitee',
            url: 'https://gitee.com/quankehao/art-antd-react',
          },
          authors: ['jakequc@163.com'],
        },
        entryExports,
        demos,
        components,
        locales,
        loading,
        setLoading,
        themeConfig: {
          footer:
            'Copyright © 2023 | Powered by <a href="https://d.umijs.org" target="_blank" rel="noreferrer">dumi</a>',
          prefersColor: { default: 'light', switch: true },
          name: 'ArtAntd',
          title: 'art-antd-react',
          base: '/art-antd-react/',
          publicPath: '/art-antd-react/',
          logo: 'https://raw.githubusercontent.com/oneQorg/art-antd-react/master/public/logo.png',
          webpack5: {},
          dynamicImport: {},
          extraBabelPlugins: [
            [
              'babel-plugin-import',
              { libraryName: 'antd', libraryDirectory: 'es', style: true },
            ],
          ],
          exportStatic: {},
          mode: 'site',
          mfsu: {},
          nav: {
            'zh-CN': [
              { title: 'about', link: '/about/quickstart' },
              { title: 'components', link: '/components/form-modal' },
              { title: 'hooks', link: '/hooks/use-request' },
              {
                title: 'gitee',
                link: 'https://gitee.com/quankehao/art-antd-react',
              },
              {
                title: 'gitHub',
                link: 'https://github.com/oneQorg/art-antd-react',
              },
            ],
          },
          navs: [
            {
              title: 'gitee',
              link: 'https://gitee.com/quankehao/art-antd-react',
            },
            {
              title: 'gitHub',
              link: 'https://github.com/oneQorg/art-antd-react',
            },
          ],
        },
      }}
    >
      {outlet}
    </SiteContext.Provider>
  );
}
