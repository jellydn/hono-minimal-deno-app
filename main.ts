import { serve } from "http/server.ts";
import { Hono } from "hono/mod.ts";
import { cache, compress, cors, etag, logger } from "hono/middleware.ts";

export const app = new Hono();

// Builtin middleware
app.use("*", etag(), logger(), compress());
app.get(
  "*",
  cache({
    cacheName: "hono-deno-app",
    cacheControl: "max-age=3600",
    wait: true,
  }),
);

// Routing
app.get("/", (c) => c.html("<h1>Hello Hono!</h1>"));
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
