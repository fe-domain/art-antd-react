import { defineConfig } from 'dumi';

const GiteeLinkItem = {
  title: 'gitee',
  link: 'https://gitee.com/quankehao/art-antd-react',
};

const GithubLinkItem = {
  title: 'gitHub',
  link: 'https://github.com/oneQorg/art-antd-react',
};

export default defineConfig({
  outputPath: 'docs-dist',
  hash: true,
  base: './docs',
  resolve: {
    docDirs: ['docs'],
  },
  themeConfig: {
    name: 'ArtAntd',
    title: 'art-antd-react',
    favicon: '/logo.ico',
    logo: '/logo.png',
    base: '/art-antd-react/',
    publicPath: '/art-antd-react/',
    outputPath: 'docs-dist',
    webpack5: {},
    dynamicImport: {},
    extraBabelPlugins: [
      [
        'babel-plugin-import',
        {
          libraryName: 'antd',
          libraryDirectory: 'es',
          style: true,
        },
      ],
    ],
    exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
    mode: 'site',
    // more config: https://d.umijs.org/config

    mfsu: {},
    nav: {
      'zh-CN': [
        { title: 'about', link: '/about/quickstart' },
        { title: 'components', link: '/components/form-modal' },
        { title: 'hooks', link: '/hooks/use-request' },
        GiteeLinkItem,
        GithubLinkItem,
      ],
    },
    navs: [GiteeLinkItem, GithubLinkItem],
  },
});
