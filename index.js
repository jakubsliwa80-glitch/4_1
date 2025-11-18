"use strict";

const express = require("express");
const app = express();

app.get("/math/circle/:r", (req, res) => {
  const r = Number(req.params.r);
  const result = {
    area: Math.PI * r * r,
    circumference: 2 * Math.PI * r,
  };
  res.json(result);
});

//TODO2

//TODO3

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
