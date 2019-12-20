const { CSS, JS } = require('./assets')

// HTML Template

let Template = {
  head: (title, desc, author) => `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="` + desc + `">
    <meta name="author" content="` + author + `">
    <link rel="icon" href="https://getbootstrap.com/docs/3.4/favicon.ico">
    <title>` + title + `</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/gh/thekondrashov/ie10-viewport@1.0/css/ie10-viewport.min.css" rel="stylesheet">
    <style type="text/css">
` + CSS + `
    </style>
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>`,

  body: (title, author, content, menu, page) => `
    <div class="site-wrapper">

      <div class="site-wrapper-inner">

        <div class="cover-container">

          <div class="masthead clearfix">
            <div class="inner">
              <h3 class="masthead-brand">` + title + `</h3>
              <nav>
                <ul class="nav masthead-nav">
                  ` + menuLoader(menu, page) + `
                </ul>
              </nav>
            </div>
          </div>

          <div class="inner cover">
            <h1 class="cover-heading">` + content.heading + `</h1>
            <p class="lead">` + content.desc + `</p>
            ` + lmBtn(content.url) + `
          </div>
          <footer class="mastfoot mt-auto">
              <div class="inner">
                <p>` + title + ` with <a target="blank" href="https://getbootstrap.com/">Bootstrap</a>, by <a target="blank" href="#">` + author + `</a>.</p>
              </div>
            </footer>
        </div>

      </div>

    </div>`,

  end: () => `
    <script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha384-nvAa0+6Qg9clwYCGGPpDQLVpLNn0fRaROjHqs13t4Ggj3Ez50XnGQqc/r8MhnRDZ" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/thekondrashov/ie10-viewport@1.0/js/ie10-viewport.min.js"></script>
    <script type="text/javascript">
` + JS + `
    </script>
</body>
</html>`,

  // Loader Function
  loadHTML: function(obj) {
    return this.head(obj.title, obj.desc, obj.author) +
      this.body(obj.title, obj.author, obj.content[obj.page], obj.menu, obj.page) +
      this.end()
  }
}

// Private Functions

const menuLoader = (m, p) => {
  let i = ''
  m.forEach((val, ind, arr) => {
    i += '<li'
    if ((val.url === "" && p === "home") || p === val.url) {
      i += ' class="active" '
    }
    i += '><a href="/' + val.url + '">' + val.name + '</a></li>'
  })
  return i
}

const lmBtn = (u) => u === ''?u:`
            <p class="lead">
              <a href="` + u + `" class="btn btn-lg btn-default">Learn more</a>
            </p>`

module.exports = Template