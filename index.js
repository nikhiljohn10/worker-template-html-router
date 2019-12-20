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
    contribute: {
      heading: 'Contribute',
      desc: 'You can contribute to this project in Github by clicking "Learn More"',
      url: 'https://github.com/nikhiljohn10/worker-template-html-router'
    },
    contact: {
      heading: 'Contact',
      desc: 'This is the contact page of the template',
      url: 'https://github.com/nikhiljohn10'
    },
  },
  menu: [
    { name: 'Home', url: '' },
    { name: 'Features', url: 'features' },
    { name: 'Contribute', url: 'contribute' },
    { name: 'Contact', url: 'contact' }
  ]
})

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  return r.render(request)
}