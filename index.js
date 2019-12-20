const Renderer = require('./render')

const r = new Renderer({
  title: 'HTML Router Template',
  desc: 'HTML Template for the router worker',
  author: 'Nikz Jon',
  content: {
    home: {
      heading: 'Home',
      desc: 'This the home page of the template',
      url: ''
    },
    features: {
      heading: 'Features',
      desc: 'These are the features of the template',
      url: '#'
    },
    contact: {
      heading: 'Contact',
      desc: 'This is the contact page of the template',
      url: '#'
    },
  },
  menu: [
    { name: 'Home', url: '' },
    { name: 'Features', url: 'features' },
    { name: 'Contact', url: 'contact' }
  ]
})

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  return r.render(request)
}