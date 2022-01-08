/*
 * @Author: yang yu
 * @Date: 2022-01-08 16:39:26
 * @LastEditors: yang yu
 * @LastEditTime: 2022-01-08 16:39:27
 * @Description: file content
 */
const app = require("./app");
const port = process.env.PORT || 3000;

app.listen(port, () => console.log("Example app listening on port 3000!"));
