import React from 'react';
import {Bootstrap,Card,ListGroup,ListGroupItem} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/MovieList.css';
import StarRatingComponent from 'react-star-rating-component';
import {motion} from 'framer-motion';
import { Button, FormGroup, FormControl, FormLabel ,Row,Col} from "react-bootstrap";
import axios from 'axios';
import { useHistory } from "react-router";
import { MDBBtn } from "mdbreact";



const MovieList=({movies,search,rating})=>{

    let filteredMovies=movies.filter(movie=>{
        return((movie.title.toLowerCase().indexOf(search.toLowerCase()) !== -1) && (movie.rating.toString().indexOf(rating.toString())!== -1) ) 
    }
    )
    const history = useHistory();
  
    const allmoviesCards = filteredMovies.map(movie=>{
        return(
         //for each movie i create a card 
         <Card  style={{ width: '18rem', marginBottom:'5%', marginLeft:'10%'}} className='card'>
         <Card.Img variant="top" src={movie.url} width={'700px'} height={'370px'}/>
        
             <Card.Title style={{paddingTop:7}}>{movie.title} </Card.Title>
         
         <ListGroup className="list-group-flush">
             <ListGroupItem>{movie.release} - {movie.duration}</ListGroupItem>
             <ListGroupItem>{movie.genre}</ListGroupItem>
             <ListGroupItem><MDBBtn  gradient="aqua" value={movie._id} className="btn-secondary" onClick={(e)=>{console.log(e.target.value);
                const token= localStorage.getItem("token");
                const url="http://localhost:9000/movies/"+e.target.value+"/"+token
                axios({
                  method: 'delete',
                  url: url
                })
                window.location.reload();
            
            
            }} block bsSize="large" type="submit">
          Delete
        </MDBBtn></ListGroupItem>
             <ListGroupItem>
                 <StarRatingComponent starCount={10} value={movie.rating} />
             </ListGroupItem>
        </ListGroup>
        </Card>
    )})
        
        

/*
<Row>{allmoviesCards.map((movie)=>(
          <Col key={Math.random()} sm={12} md={6} lg={4}>
          {movie}
        </Col>
        ))}
        </Row>

*/


    return(
<center><motion.div initial={{y:'100vw'}} animate={{y:'0vw'}} transition={{duration:10,type:'spring',stiffness:'100'}}   className='cards'>
<Row>{allmoviesCards.map((movie)=>(
          <Col key={Math.random()} sm={12} md={6} lg={4}>
          {movie}
        </Col>
        ))}
        </Row>
</motion.div></center>
)
}

export default MovieList;