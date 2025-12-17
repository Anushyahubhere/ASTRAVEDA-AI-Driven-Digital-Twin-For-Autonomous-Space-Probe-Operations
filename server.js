const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let telemetry = {
  altitude: 420000,
  velocity: 7.8,
  temperature: 34,
  status: "NOMINAL"
};

setInterval(() => {
  telemetry.altitude += Math.random() * 50 - 25;
  telemetry.velocity = 7.6 + Math.random() * 0.4;
  telemetry.temperature = 30 + Math.random() * 10;
  telemetry.status = telemetry.temperature > 38 ? "WARNING" : "NOMINAL";
}, 1000);

app.get("/api/test", (req, res) => {
  res.json({ message: "Astraveda backend running successfully" });
});

app.get("/api/telemetry", (req, res) => {
  res.json(telemetry);
});

app.listen(4000, () => {
  console.log("🚀 Astraveda Backend running at http://localhost:4000");
});
