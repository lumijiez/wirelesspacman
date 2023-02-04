const express = require("express");
const app = express();
const cors = require("cors")
const child_process = require("child_process")
app.use(cors())
app.use(express.json())
var data;

app.use(express.static("./"))
app.get("/", (req, res) => {
    res.send('./index.html')
})

app.post("/api/data", (req, res) => {
  console.clear()
  console.log(req.body);
  data = req.body
  res.send("Data received!");
});

app.get("/get_data", (req, res) => {
    res.json(data)
})

app.listen(3000, () => {
  console.log("Server listening on port 3000");
  const childProcess = child_process.spawn('py', ['py.py'])
});
