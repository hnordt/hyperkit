import { serveDir } from "@std/http";

Deno.serve((req) => serveDir(req, { fsRoot: "dist" }));
