require("dotenv").config()
const express = require("express");
const connect = require("./config/db");
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require("cors");

app.use(express.json())
app.use(cors())

const userRoute = require("./routes/user.route")
app.use("/user", userRoute)

app.get("/random", (req, res) => {
    let word = "abcdefghijklmnopqrstuvwxyz";
    let randomLength = Math.floor(Math.random() * 10);
    let randomWord = "";
    for (let i = 0; i < randomLength; i++) {
        let randomIndex = Math.floor(Math.random() * 26);
        randomWord += word[randomIndex];
    }

    if (randomWord.length == 0) {
        randomWord += "dhami"
    }

    res.status(200).send({ length: randomWord.length, word: randomWord })
})

app.get("/", (req, res) => {
    res.send("Home Page")
})


app.listen((PORT), async () => {
    await connect()
    console.log(`http://localhost:${PORT}`)
})