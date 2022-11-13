const { Schema, model } = require("mongoose");

const videoSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
    },
    published_date: {
      type: String,
    },
    description: {
      type: String,
    },
    genre: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = model("videos", videoSchema);
