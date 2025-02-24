const connect = require("./database/connection");
require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", async (req, res) => {
  res.send("it's working on my machine");''
});

const port = process.env.PORT;

app.listen(port, async () => {
  try {
    await connect;

    console.log(`app is running on http://localhost:${port}`);
  } catch (error) {
    console.log(error);
  }
});


const port =process.env.PORT

app.listen(port,async()=>{
try {
    await connect

    console.log(`app is running on http://localhost:${port}`)
} catch (error) {
    console.log(error)
}
})







