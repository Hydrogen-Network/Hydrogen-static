import { createBareServer } from "@tomphttp/bare-server-node";
import express from "express";
import { createServer } from "node:http";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import wisp from "wisp-server-node";
import { libcurlPath } from "@mercuryworkshop/libcurl-transport";
import { baremuxPath } from "@mercuryworkshop/bare-mux";
import "ws";

console.log("Starting HYDROGEN...");
const app = express();
const bare = createBareServer('/bare/')
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(
  express.static("src", {
    setHeaders: (res, path) => {
      if (path.endsWith(".cjs")) {
        res.setHeader("Content-Type", "text/javascript");
      }
    }
  })
);
app.use("/baremux/", express.static(baremuxPath));
app.use("/libcurl/", express.static(libcurlPath));
const server = createServer();

server.on("request", (req, res) => {
  if (bare.shouldRoute(req)) {
    bare.routeRequest(req, res);
  } else {
    app(req, res);
  }
});

server.on("upgrade", (req, socket, head) => {
  if (req.url.endsWith("/wisp/")) {
    wisp.routeRequest(req, socket, head);
  } else if (req.url.endsWith("/bare")) {
    bare.routeUpgrade(req, socket, head);
  }
});

const port = parseInt(process.env.PORT || "8080");
const manifest = fs.readFileSync(path.join(__dirname, 'package.json'), 'utf-8');
const { version } = JSON.parse(manifest);
server.listen(port, () => {
  console.log(port);
});

process.on("SIGINT", () => {
  console.log("\x1b[0m");
  process.exit();
});
