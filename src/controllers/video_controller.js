const express = require("express");
const Video = require("../models/video");
const router = express.Router();

router.get("/all", async (req, res) => {
  try {
    const videos = await Video.find().lean().exec();
    res.status(200).send(videos);
  } catch (err) {
    res.status(500).json({
      message: err.message,
      success: false,
    });
  }
});

router.get("/for_user/:userID", async (req, res) => {
  try {
    let userID = req.params.userID;
    const videos = await Video.find({ owner: userID }).lean().exec();
    res.status(200).send(videos);
  } catch (err) {
    res.status(500).json({
      message: err.message,
      success: false,
    });
  }
});

router.post("/add", async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json({
      message: err.message,
      success: false,
    });
  }
});

module.exports = router;
