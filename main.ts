import { serve } from "http/server.ts";
import { Hono } from "hono/mod.ts";
import { compress, cors, etag, logger, serveStatic } from "hono/middleware.ts";

export const app = new Hono();

// Builtin middleware
app.use("*", etag(), logger(), compress());
// TODO: uncomment this when this is resolved https://github.com/honojs/hono/issues/698
// app.get(
//   "*",
//   cache({
//     cacheName: "hono-deno-app",
//     cacheControl: "max-age=3600",
//     wait: true,
//   }),
// );

// Routing
app.use("/static/*", serveStatic({ root: "./" }));
app.use("/favicon.ico", serveStatic({ path: "./favicon.ico" }));
app.get("/", (c) => c.text("This is Home! You can access: /static/hello.txt"));
app.get("*", serveStatic({ path: "./static/fallback.txt" }));
app.notFound((c) => c.json({ message: "Not Found", ok: false }, 404));

// Nested route
const api = new Hono();
api.use("/thread/*", cors());
// Named path parameters
api.get("/thread/:username/:id", (c) => {
  const username = c.req.param("id");
  const id = c.req.param("id");

  return c.json({ Url: `https://twitter.com/${username}/status/${id}` });
});

app.route("/api", api);

serve(app.fetch);
