const baseName = process.env.baseName;
module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  base: baseName || '/',
  head: [
    ['link', { rel: 'icon', href: '/6.png' }]
  ]
}
