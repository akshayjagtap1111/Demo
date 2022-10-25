const { append } = require("express/lib/response");

const express = require("express");
const User = require("../models/User");
const router = express.Router();

const {
  userRegister,
  userLogin,
  checkRole,
  serilizeUser,
  userAuth,
} = require("../utils/Auth");

router.get("/all", async (req, res) => {
  try {
    const users = await User.find().lean().exec();
    res.status(200).send(users);
  } catch (err) {
    res.status(500).json({
      message: err.message,
      success: false,
    });
  }
});

router.get("/search", async (req, res) => {
  try {
    const search_inp = req.body.search_inp;

    const search_regex = new RegExp(escapeRegex(search_inp), "gi");

    const users = await User.find({$or:[{ name: search_regex },{username:search_regex}]}).lean().exec();
    res.status(200).send(users);
  } catch (err) {
    res.status(500).json({
      message: err.message,
      success: false,
    });
  }
});

function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

router.post("/register", async (req, res) => {
  await userRegister(req.body, "user", res);
});

router.post("/register-admin", async (req, res) => {
  await userRegister(req.body, "admin", res);
});

router.post("/register-influencer", async (req, res) => {
  await userRegister(req.body, "influencer", res);
});

router.post("/login", async (req, res) => {
  await userLogin(req.body, "user", res);
});

router.post("/login-admin", async (req, res) => {
  await userLogin(req.body, "admin", res);
});

router.post("/login-influencer", async (req, res) => {
  await userLogin(req.body, "influencer", res);
});

router.get("/profile", userAuth, async (req, res) => {
  return res.json(serilizeUser(req.user));
});

module.exports = router;
