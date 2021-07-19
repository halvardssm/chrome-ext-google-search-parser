import { serve } from "https://deno.land/std@0.101.0/http/server.ts";
import { readAll } from "https://deno.land/std@0.101.0/io/util.ts";

const s = serve({ port: 8000 });
console.log("http://localhost:8000/");

for await (const req of s) {
  const buf: Uint8Array = await readAll(req.body);

  const body = new TextDecoder().decode(buf);
  console.log(body);

  req.respond({ status: 200 });
}
