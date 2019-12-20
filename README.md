## HTML Router

Using a JSON object, the worker creates the routes and load corresponding HTML template which uses Bootstrap framework.

`index.js` is the content of the Workers script.
`render.js` is the HTML rendering engine.
`template.js` is the HTML template used.
`assets.js` contains the custom CSS and JS for the HTML.

[Live Demo](https://html-router.jwala.workers.dev)

#### Wrangler

You can use [wrangler](https://github.com/cloudflare/wrangler) to generate a new Cloudflare Workers project based on this template by running the following command from your terminal:

```
wrangler generate myApp https://github.com/cloudflare/worker-template-router
```

Before publishing your code you need to edit `wrangler.toml` file and add your Cloudflare `account_id` - more information about publishing your code can be found [in the documentation](https://workers.cloudflare.com/docs/quickstart/configuring-and-publishing/).

Once you are ready, you can publish your code by running the following command:

```
wrangler publish
```

#### Serverless

To deploy using serverless add a [`serverless.yml`](https://serverless.com/framework/docs/providers/cloudflare/) file.

---
Parent Repo: [Router Template](https://github.com/cloudflare/worker-template-router)