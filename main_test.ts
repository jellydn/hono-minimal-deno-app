import { assertEquals } from "testing/asserts.ts";
import { app } from "/main.ts";

Deno.test("return status 200 for /", async () => {
  const res = await app.request("http://localhost/");
  assertEquals(res.status, 200);
});

Deno.test("return not foun for /notfound", async () => {
  const res = await app.request("http://localhost/notfound");
  assertEquals(res.status, 404);
});
