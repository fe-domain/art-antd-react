import { defineConfig } from 'dumi';

export default defineConfig({
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
      { title: 'about', link: '/about' },
      { title: '组件', link: '/components' },
      { title: 'hooks', link: '/hooks' },
      {
        title: 'Gitee',
        link: 'https://gitee.com/quankehao/art-antd-react',
      },
      {
        title: 'GitHub',
        link: 'https://github.com/oneQorg/art-antd-react',
      },
    ],
  },
  navs: [
    {
      title: 'about',
      link: '/about',
    },
    {
      title: 'components',
      link: '/components',
    },
    {
      title: 'hooks',
      link: '/hooks',
    },
    {
      title: 'Gitee',
      link: 'https://gitee.com/quankehao/art-antd-react',
    },
    {
      title: 'GitHub',
      link: 'https://github.com/oneQorg/art-antd-react',
    },
  ],
});
