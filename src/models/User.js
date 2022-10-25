const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin", "influencer"],
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    instagram:{
      type:String
    },
   facebook:{
      type:String
    },
    linkedin:{
      type:String
    },
    youtube:{
      type:String
    },
    status: {
      type: String,
      default: "active",
      enum: ["active", "sys_blocked"],
    },
    blocklist: [{ type: Schema.Types.ObjectId, ref: "users" }],
  },
  { timestamps: true }
);

module.exports = model("users", UserSchema);
