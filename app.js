import express from "express"
import web from "./routes/web.js"

const app = express()

app.use(express.json())

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.use(web)

app.listen(5000, () => {
    console.log("Aplikasi berjalan di http://localhost:5000");
})