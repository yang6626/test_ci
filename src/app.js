/*
 * @Author: yang yu
 * @Date: 2022-01-08 16:39:31
 * @LastEditors: yang yu
 * @LastEditTime: 2022-01-08 16:39:33
 * @Description: file content
 */
const express = require("express");
const app = express();

app.get("/test", (_req, res) => {
  res.status(200).send("Hello world");
});
module.exports = app;
