import "babel-polyfill";
import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import bodyParser from "body-parser";
import App from "./src/App";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(express.static("build/public"));

app.get("*", (req, res) => {

  const context = {};
  const content = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  const html = `
        <html>
            <body>
                <div id="root">
                    ${content}
                </div>
                <script src='client_bundle.js'></script>
            </body>
        </html >
    `;
  res.send(html);
});

app.listen(PORT, () => {
  console.log("app running");
});
