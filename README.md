# Hono Demo Starter App

This is a minimal project with [Hono](https://github.com/honojs/hono/) for Deno

[![ITMan - Tech #25 - Ultrafast web framework for Cloudflare Workers, Deno, and Bun [Vietnamese]](https://i.ytimg.com/vi/YsjqVvlrXGY/hqdefault.jpg)](https://www.youtube.com/watch?v=YsjqVvlrXGY)

## Features

- Minimal
- TypeScript
- [Deno — A modern runtime for JavaScript and TypeScript](https://deno.land/) to develop and deploy.

## Usage

#### Initialize

```sh
git clone https://github.com/jellydn/hono-minimal-deno-app
```

### Develop

```sh
deno task dev
```

### Test

```sh
deno task test
```

### Deploy

Install deployctl: the command line tool for Deno Deploy.

```sh
deno install --allow-read --allow-write --allow-env --allow-net --allow-run --no-check -r -f https://deno.land/x/deploy/deployctl.ts
```
Then

```sh
deployctl deploy --project=hello-hono-deno ./main.ts
```

## Useful links

- Hono https://honojs.dev
- Hono examples: https://github.com/honojs/examples

## Author

👤 **Dung Huynh**

- Website: https://productsway.com/
- Twitter: [@jellydn](https://twitter.com/jellydn)
- Github: [@jellydn](https://github.com/jellydn)

## Show your support

[![kofi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/dunghd)
[![paypal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/dunghd)
[![buymeacoffee](https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/dunghd)


Give a ⭐️ if this project helped you!
