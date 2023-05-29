const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = process.env.PORT || 3000;
const UPSTREAM_URL = process.env.UPSTREAM_URL;

if (!UPSTREAM_URL) {
  console.error('Missing UPSTREAM_URL environment variable!');
  process.exit(1);
}

app.use(
  '/',
  createProxyMiddleware({
    target: UPSTREAM_URL,
    changeOrigin: true,
    pathRewrite: {
      '^/': '', // remove base path
    },
  })
);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
