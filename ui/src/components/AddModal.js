import React,{useState} from 'react';
import {Bootstrap,Button,Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/addModal.css';
import { v4 as uuidv4 } from 'uuid';
import {motion} from 'framer-motion';
import { MDBBtn } from "mdbreact";



const AddModal=({addMovie})=>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [movie , setMovie]=useState(
        {id:uuidv4(),
            title :"",
            genre :"",
            duration :"",
            release :"",
            url :"",
            rank :""
        }
    );


    //handle multiple inputs
    const handleChange=(e)=>{
        const val=e.target.value;
        setMovie(
            {...movie,
            [e.target.name] : val
            }
        )
       
    }
    const handleSubmit=()=>{
        addMovie(movie);
        setMovie({id:uuidv4(),
            title :"",
            genre :"",
            duration :"",
            release :"",
            url :"",
            rank :""
        })
        handleClose();

    }
    return (
      <>
       <motion.div initial={{x:'100vw'}} animate={{x:'0vw'}} transition={{duration:10,type:'spring',stiffness:'100',delay:0.5}} >
       <MDBBtn color="cyan" onClick={handleShow} style={{marginLeft:'80%', marginTop:'5%' }}>
         Add movie
        </MDBBtn>
        </motion.div>
        
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Fill out the form </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div class="input-group mb-3" >
                <label style={{marginRight:'2%', fontWeight:'bold' , marginTop:'1.5%'}}>Title</label>
                <input required required name ="title" onChange={(e)=>handleChange(e)} placeholder="type the movie name" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
                
            </div>
            <div class="input-group mb-3">
                <label style={{marginRight:'2%', fontWeight:'bold' , marginTop:'1.5%'}}>Genre</label>
                <input type="text"  name ="genre"onChange={(e)=>handleChange(e)} placeholder="type the movie name" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
                
            </div>
            <div class="input-group mb-3">
                <label style={{marginRight:'2%', fontWeight:'bold' , marginTop:'1.5%'}}>Release</label>
                <input  name ="release" onChange={(e)=>handleChange(e)} placeholder="type the movie name" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
                
            </div>
            <div class="input-group mb-3">
                <label style={{marginRight:'2%', fontWeight:'bold' , marginTop:'1.5%'}}>Duration</label>
                <input  name ="duration" onChange={(e)=>handleChange(e)} placeholder="type the movie name" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
                
            </div>
            <div class="input-group mb-3">
                <label style={{marginRight:'2%', fontWeight:'bold' , marginTop:'1.5%'}}>Rank</label>
                <input  name ="rating" onChange={(e)=>handleChange(e)} placeholder="type the movie name" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
                
            </div>
            <div class="input-group mb-3">
                <label style={{marginRight:'2%', fontWeight:'bold' , marginTop:'1.5%'}}>Poster URL</label>
                <input  name ="url" onChange={(e)=>handleChange(e)} placeholder="type the movie name" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
                
            </div>

          </Modal.Body>
          <Modal.Footer>
          <MDBBtn rounded color="warning" onClick={handleClose}>
              Close
          </MDBBtn>
          <MDBBtn rounded color="info" type="submit"  onClick={()=>{handleSubmit()}}>
              Add
            </MDBBtn>
          </Modal.Footer>
        </Modal>
        
      </>
    );
  }
  
  export default AddModal;