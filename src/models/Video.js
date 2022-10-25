const { Schema, model } = require("mongoose");

const videoSchema = new Schema(
  {
    owner: {
      type: String,
      required: true,
    },

    video_name: {
      type: String,
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
    desc: {
      type: String,
    },
    genre: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = model("videos", videoSchema);
