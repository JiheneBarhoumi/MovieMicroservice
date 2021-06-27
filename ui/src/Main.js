import React, {useState, useEffect} from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import MovieList from './components/MovieList.js';
import AddModal from './components/AddModal.js';
import Search from './components/Search.js';
import logo from './img/movieapp.png';
import {motion} from 'framer-motion';
import {Bootstrap,Button} from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from "react-router";
import { MDBBtn } from "mdbreact";



function Main() {
  const [movies , setMovies]=useState([])

  const [search,setSearch]=useState("");
  const [rating,setRating]=useState("");
  
  const [displayReset, SetDisplayReset]=useState(false);
  useEffect(() => {
    const token= localStorage.getItem("token");
    const url="http://localhost:9000/movies/"+token
    axios.get(url)
      .then(res => {
        const list = res.data;
        setMovies(list);
        console.log(list);
      });
  }, []);

   
  //function to add a movie 
  const addMovie=(movie)=>{
    const token= localStorage.getItem("token");
  const url="http://localhost:9000/movies/"+token
  axios({
    method: 'post',
    url: url,
    data: movie
  })
  .then(res => {
    console.log(res.data);
  })
   setMovies([...movies,movie]);
  }
  //function to handle search

  const handleSearch=(val)=>{
    setSearch(val);
    console.log(search);
  }

  const handleRating=(rate)=>{
     setRating(rate);
     console.log(rating);
     SetDisplayReset(true);
  }
  const resetRating=()=>{
    setRating("");
    SetDisplayReset(false);
  }
  let history = useHistory();
  return (
    <div className="App">
          <center>
          <Search handleSearch={handleSearch} handleRating={handleRating}/>
          {displayReset && <Button variant="warning" type="submit" onClick={()=>{resetRating()}}>Reset Filter</Button>}
      </center>
      <AddModal addMovie={addMovie}/>
      <MovieList movies={movies} search={search} rating={rating}/>
      <h6> Want to give us a feedback ? Click here ...</h6> <MDBBtn color="cyan" onClick={(e)=>{history.push('/feedbacks')}} >Feedbacks</MDBBtn> 

    </div>
  );
}

export default Main;
