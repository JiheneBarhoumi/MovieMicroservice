const express = require("express");
const router = express.Router();
const axios = require("axios");
const jwt = require("jsonwebtoken");
var utils = require("utils");
const jwt_decode = require("jwt-decode");
const Feedback = require("../models/feedback");

//Getting all the feedbacks
router.get("/:token", async (req, res) => {
  axios.get("http://authentication:5000/auth/isAuthenticated", {
      headers: {
        "x-auth-token": req.params.token}})
    .then(async function (response) {
      // User is authenticated
      const feedbacks = await Feedback.find();
      res.json(feedbacks);})
    .catch(function (error) {
      // User is not authenticated
      console.log(error)
      res.status(401).send("Error occurred !");});
});

//Submitting a feedback
router.post("/:token", async (req, res) => {
  axios.get("http://authentication:5000/auth/isAuthenticated",{
      headers: {
        "x-auth-token": req.params.token}})
    .then(async function (response) {
      // User is authenticated
      const feedback = new Feedback({
        text: req.body.text});
      await feedback.save();
      res.json(feedback);
    })
    .catch(function (error) {
      // User is not authenticated
      console.log(error)
      res.status(401).send("Error occurred !");
    });
});

module.exports = router