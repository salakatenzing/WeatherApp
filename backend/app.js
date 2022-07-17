import express from "express";
import fetch from "node-fetch";
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/getWeatherNYC", async (req, res) => {
  const response = await fetch(
    "http://api.weatherstack.com/current?access_key=2ce4071c84675bb7b1394699a47570d2&query=New York"
  );
  const body = await response.text();
  const parsedBody = JSON.parse(body);
  const temp = parsedBody.current["temperature"];

  res.send({ temp });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
