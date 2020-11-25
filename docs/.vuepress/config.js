const baseName = process.env.baseName;
module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  base: baseName || '/',
  head: [
    ['link', { rel: 'icon', href: '/6.png' }]
  ],
  themeConfig: {
    repo: 'qq523407234/myvuepress',
    docsBranch: 'main',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'LaLaLa', link: '/lalala/' },
      { text: 'External', link: 'https://www.vuepress.cn' },
    ],
    sidebar: [
      '/lalala/',
      '/test',
    ],
    smoothScroll: true
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    '@vuepress/nprogress'
  ]
}
