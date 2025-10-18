import express from "express"
import web from "./routes/web.js"
import api from "./routes/api.js"
import {database} from "./config/database.js"
const app = express()

import passport from "passport"
import "./config/passport.js" 

app.use(express.json())

app.use(passport.initialize())

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.use(web)
app.use("/api", api)

app.listen(5000, () => {
    database()
    console.log("Aplikasi berjalan di http://localhost:5000");
})