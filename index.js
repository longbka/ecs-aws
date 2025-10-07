import express from "express";
import os from "os";

const app = express();
const PORT = 8080;

app.get("/email", (req, res) => {
  const clientIp = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  const elbIp = req.socket.remoteAddress;
  console.log(`Client IP: ${clientIp}`);
  console.log(`ELB IP: ${elbIp}`);
  const containerIp = req.socket.localAddress;
  const containerName = os.hostname();

  console.log("Hello user!");
  res.json({
    serviceName: "LONGAWS ECS Email Microservice V3.1",
    clientIp,
    elbIp,
    containerIp,
    containerName,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
