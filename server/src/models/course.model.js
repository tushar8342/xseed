const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        body: { type: String, required: true },
        url: { type: String, required: true },
        image: { type: String, required: true },
    }
)

module.exports = mongoose.model("courses", courseSchema)