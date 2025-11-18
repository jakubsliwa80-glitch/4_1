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
app.get("/math/rectangle/:width/:height", (req, res) => {
  const width = Number(req.params.width);
  const height = Number(req.params.height);

  const result = {
    area: width * height,
    perimeter: 2 * (width + height),
  };
  res.json(result);
});

//TODO3

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
