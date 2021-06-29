const express = require("express")
const config = require("./config.json")
const { port } = config
const link = require("./routers/link")
const path = require("path")


const app = express()

//assets

app.use("/static", express.static(path.join(__dirname, "assets")))

//routers

app.use("/link", link)

app.get("/", (req, res) => {

    return res.sendFile(path.join(__dirname,"pages/home.html"))
})

app.get("/secret/off0faa", (req, res) => {

res.send("686 41 -1065n")

})

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));