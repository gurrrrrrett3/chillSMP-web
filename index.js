const express = require("express")
const config = require("./config.json")
const { port, user, pass } = config
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

app.get("/admin/home", (req, res) => {

        return res.sendFile(path.join(__dirname,"pages/admin.html")) 
})

//admin stuff

app.get("/admin/login", (req,res) => {

    const query = req.query

    if (query.user == user && query.pass == pass) {
        res.redirect("/admin/home")
        
    } else {
        res.redirect(403, "/")
    }

})

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));