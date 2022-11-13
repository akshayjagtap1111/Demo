const express = require("express");
const Video = require("../models/video");
const User = require("../models/User");
const router = express.Router();

router.get("/all", async (req, res) => {
  try {
    const videos = await Video.find().populate("owner").lean().exec();
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
    const videos = await Video.find({ owner: userID }).populate().lean().exec();
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

    const current_user= await User.findById(req.body.owner)

    if(current_user.role!="user"){
        const new_video = new Video({
            ...req.body,
          });
      
         await new_video.save();
    }else{
        return res.status(401).json({
            message: "this dont have access to add video",
            success: true,
          });
        
    }  

   return res.status(201).json({
    message: "added succesfully",
    success: true,
  });


  } catch (err) {
    res.status(500).json({
      message: err.message,
      success: false,
    });
  }
});

// edit video info -- inf access

// delete single video ---inf and admin access

//delete all videos for any user --- admin access

module.exports = router;
