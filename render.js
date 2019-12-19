const Template = require('./template')

class Renderer {
  constructor(obj) {
    Object.assign(this, obj)
  }

  async render(req) {
    this.url = new URL(req.url)
    this.page = (this.url.pathname).replace(/\/$/, "").replace(/^\//, "")
    this.page = this.page === ""?"home":this.page
    return new Response(await Template.loadHTML(this), { headers: { 'content-type': 'text/html' } })
  }
}

module.exports = Renderer
