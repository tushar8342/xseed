const express = require("express")

const connect = require("./configs/db")

const { body, validationResult } = require('express-validator');

const User = require("./models/user.model")

const { signup, login } = require("./controllers/auth.controller")

const postController = require("./controllers/post.controller")
const courseController = require("./controllers/course.controller")
require("dotenv").config()

const app = express()
var cors = require('cors')

app.use(cors())

app.use(express.json())

app.post(
    "/signup",
    body("name").notEmpty().isLength({ min: 3 }),
    body("email").notEmpty().isEmail(),
    body("password").notEmpty().isLength({ min: 10 }).isStrongPassword(),
    signup
)

app.post(
    "/login",
    body("email").notEmpty().isEmail(),
    body("password").notEmpty().isLength({ min: 8 }).isStrongPassword(),
    login
)

app.use("/courses", courseController)
app.use("/posts", postController)

app.get("/users", async (req, res) => {

    const user = await User.find().lean().exec()
    return res.send(user, token)
})

const port = process.env.PORT || 2346

app.listen(port, async () => {
    try {
        await connect()
        console.log(`Listen To my port ${port}`)
    } catch (err) {
        console.log("Error:", err.message)
    }
})