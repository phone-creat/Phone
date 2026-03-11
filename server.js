const express = require("express");
const { exec } = require("child_process");

const app = express();

app.get("/", (req, res) => {
  res.send("Server treo game đang chạy");
});

app.get("/run", (req, res) => {
  exec("echo Game đang treo", (err, stdout) => {
    res.send(stdout);
  });
});

app.listen(3000, () => {
  console.log("Server chạy cổng 3000");
});
