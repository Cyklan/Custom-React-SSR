import express from "express";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { App } from "./src/App";
import React from "react";

const app = express();

app.get("*", (req, res) => {
  const html = ReactDOMServer.renderToString(<App />);

  res.send(html);
});

app.listen(3000, () => console.log("Server started"));
