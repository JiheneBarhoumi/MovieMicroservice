const express = require("express");
const router = express.Router();
const axios = require("axios");
const jwt = require("jsonwebtoken");
var utils = require("utils");
const jwt_decode = require("jwt-decode");
const Movie = require("../models/movie");


//Getting all the movies
router.get("/:token", async (req, res) => {
  axios.get("http://authentication:5000/auth/isAuthenticated", {
      headers: {
        "x-auth-token": req.params.token}})
    .then(async function (response) {
      // User is authenticated
      const movies = await Movie.find();
      res.json(movies);})
    .catch(function (error) {
      // User is not authenticated
      res.status(401).send("Error occurred !");});
});

//Submitting a movie
router.post("/:token", async (req, res) => {
  axios.get("http://authentication:5000/auth/isAuthenticated",{
      headers: {
        "x-auth-token": req.params.token}})
    .then(async function (response) {
      // User is authenticated
      console.log(req.body);
      const movie = new Movie({
        title: req.body.title,
        genre: req.body.genre,
        release: req.body.release,
        duration: req.body.duration,
        rating: req.body.rating,
        url: req.body.url});
      await movie.save();
      res.json(movie);
    })
    .catch(function (error) {
      // User is not authenticated
      console.log(error);
      res.status(401).send("Error occurred !");
    });
});

//Update the movie passed in request's body movie
/*router.put('/:token',async (req,res)=>{
	axios.get('http://localhost:5000/auth/isAuthenticated', {
		headers: {
			'x-auth-token': req.params.token
		}})
  	.then(async function (response) {
			// User is authenticated
      const movie = await Movie.findById(req.body.id);
      movie.title= req.body.title,
      movie.genre= req.body.genre,
      movie.release= req.body.release,
      movie.duration= req.body.duration,
      movie.rating= req.body.rating,
      movie.url= req.body.url
      const updated = await movie.save();
      res.json(updated)})
    .catch(function (error) {
      // User is not authenticated
      res.status(401).send('Error occurred !');})
})*/

//Deleting a movie
router.delete('/:id/:token',async (req,res)=>{
	axios.get('http://authentication:5000/auth/isAuthenticated', {
		headers: {
			'x-auth-token': req.params.token}})
  .then(async function (response) {
		// User is authenticated
    const id = req.params.id;
    Movie.findByIdAndRemove(id)
    .then(data => {
      if (!data){
        res.status(404).send({message: `Cannot delete Movie with id=${id}. Maybe Movie was not found!`});} 
      else{
        res.send({message: "Movie was deleted successfully!"});}})
    .catch(err => {
      res.status(500).send({message: "Could not delete Movie with id=" + id});});})
  .catch(function (error) {
    // User is not authenticated
    res.status(401).send('Error occurred !');})
})

module.exports = router