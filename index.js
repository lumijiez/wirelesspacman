const express = require("express");
const app = express();
const cors = require("cors")
const child_process = require("child_process")
app.use(cors())
app.use(express.json())
var data;
var enemyData = {
  joystickX: 0,
  joystickY: 0
};
app.use(express.static("./"))

app.post("/get_enemydata", (req, res) => {
    enemyData = req.body
    console.log(enemyData)
    res.send("Good")
})

app.post("/api/data", (req, res) => {
  data = req.body
  res.send("good")
});

app.get("/get_data", (req, res) => {
    res.json(data)
})

app.get("/send_enemydata", (req, res) => {
    res.json(enemyData)
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
  const childProcess = child_process.spawn('py', ['py.py'])
});
