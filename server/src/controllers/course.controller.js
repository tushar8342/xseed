const express = require("express")

const router = express.Router()
const Course = require("../models/course.model")

router.get("", async (req, res) => {
    try {
        const courses = await Course.find().lean().exec()
        res.send({ courses })
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
})

router.post("", async (req, res) => {
    try {
        console.log(req.body)
        const course = await Course.create(req.body)
        res.send({ course })
    } catch (error) {
        res.status(400).json({ error: 'Bad request' })
    }
})

module.exports = router;