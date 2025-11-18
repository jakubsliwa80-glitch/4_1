"use strict";

const express = require("express");
const app = express();

//4_1.1
app.get("/math/circle/:r", (req, res) => {
  const r = Number(req.params.r);
  const result = {
    area: Math.PI * r * r,
    circumference: 2 * Math.PI * r,
  };
  res.json(result);
});

//4_1.2
app.get("/math/rectangle/:width/:height", (req, res) => {
  const width = Number(req.params.width);
  const height = Number(req.params.height);

  const result = {
    area: width * height,
    perimeter: 2 * (width + height),
  };
  res.json(result);
});

//4_1.3
app.get("/math/power/:base/:exponent", (req, res) => {
  try {
    const base = Number(req.params.base);
    const exponent = Number(req.params.exponent);
    const root = Boolean(req.query.root) || false;

    if (isNaN(base) || isNaN(exponent)) throw new Error("Invalid input");

    if (root) {
      const result = {
        power: Math.pow(base, exponent),
        root: Math.pow(base, 1 / 2),
      };

      res.json(result);
    } else {
      const result = {
        power: Math.pow(base, exponent),
      };

      res.json(result);
    }
  } catch (error) {
    res.json({ error: "Invalid input" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
