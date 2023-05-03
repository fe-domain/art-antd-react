import { defineConfig } from 'dumi';

const GiteeRepositoryItem = {
  title: 'gitee',
  link: 'https://gitee.com/fedomain/art-antd-react',
};

const GithubRepositoryItem = {
  title: 'github',
  link: 'https://github.com/fe-domain/art-antd-react',
};

// // 站点配置
// const GiteeSiteItem = {
//   title: 'githubSite',
//   link: 'https://oneqorg.github.io/art-antd-react',
// };

// const GithubSiteItem = {
//   title: 'giteeSite',
//   link: 'https://quankehao.gitee.io/art-antd-react',
// };

export default defineConfig({
  outputPath: 'docs-dist',
  hash: true,
  base: '/art-antd-react/',
  publicPath: '/art-antd-react/',
  favicons: [
    'https://raw.githubusercontent.com/oneQorg/art-antd-react/master/public/logo.ico',
  ],
  resolve: {
    docDirs: ['docs'],
  },
  themeConfig: {
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
        { title: 'components', link: '/components/sending-btn' },
        { title: 'hooks', link: '/hooks/use-request' },
        GiteeRepositoryItem,
        GithubRepositoryItem,
      ],
    },
    navs: [GiteeRepositoryItem, GithubRepositoryItem],
  },
});
