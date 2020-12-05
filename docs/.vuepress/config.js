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
      { text: 'SpringAnalysis', link: '/spring-analysis/' },
      { text: 'External', link: 'https://www.vuepress.cn' },
    ],
    sidebar: {
      '/spring-analysis/': getSpringAnalysis()
    },
    smoothScroll: true
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    '@vuepress/nprogress'
  ]
}

function getSpringAnalysis () {
  return [
    '',
    'Spring',
    ['spring-aop', 'spring-aop'],
    ['spring-boot', 'spring-boot'],
    ['spring-context', 'spring-context'],
    ['spring-mvc', 'spring-mvc'],
    ['spring-task', 'spring-task'],
    ['spring-transaction', 'spring-transaction'],
    ['guava-cache', 'guava-cache']
  ]
}
