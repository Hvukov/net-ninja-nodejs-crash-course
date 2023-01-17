const mongoose = require("mongoose")
const Schema = mongoose.Schema

/**
 * 1st step is to define a structure
 * 2nd step is to define a model based on the schema
 */
const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

const Blog = mongoose.model("Blog", blogSchema)

module.exports = Blog
