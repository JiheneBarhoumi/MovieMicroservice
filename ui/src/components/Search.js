import React,{useState} from 'react';
import '../assets/Search.css';
import 'bootstrap/dist/css/bootstrap.css'; // or include from a CDN
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import {motion} from 'framer-motion';
import RangeSlider from 'react-bootstrap-range-slider';
import {Bootstrap,Form} from 'react-bootstrap';
import { MDBInput, MDBCol } from "mdbreact";

const Search=({handleSearch,handleRating})=>{
const [ value, setValue ] = useState(0); 
const handleRangeSlider=(val)=>{
    handleRating(val);
    setValue(val);
}
    return(
        <>
        <motion.div initial={{x:'-100vw'}} animate={{x:'0vw'}} transition={{duration:10,type:'spring',stiffness:'100',delay:0.5}}   id="input-container">
           <input className="form-control" type="text" placeholder="Search" aria-label="Search" onChange={(e)=>{handleSearch(e.target.value)}}/>      
        </motion.div>
        <motion.div initial={{x:'-100vw'}} animate={{x:'0vw'}} transition={{duration:10,type:'spring',stiffness:'100',delay:0.5}} class="ranger">
        <Form> 
      <Form.Group>
        <Form.Label>
          Filter By Rank
        </Form.Label>
        <RangeSlider variant='danger' max={10} value={value}  onChange={changeEvent => handleRangeSlider(changeEvent.target.value)}/>
      </Form.Group>   
    </Form>
        </motion.div>
        </>
    )
}

export default Search;



