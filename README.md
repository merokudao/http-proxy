# simple proxy

- yarn install
- UPSTREAM_URL=http://your-url:port/ yarn start

## Docker

`docker build -t proxy .`

`docker run -e UPSTREAM_URL=https://www.google.com -t proxy`

Visit the proxy at [http://localhost:3000](http://localhost:3000).