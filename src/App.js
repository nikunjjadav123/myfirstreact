import React, { useEffect, useState , Component  } from "react";
import './App.css';
import Container from "react-bootstrap/Container"; 
import Row from "react-bootstrap/Row"; 
import Col from "react-bootstrap/Col"; 
import Button from "react-bootstrap/Button"; 
import InputGroup from "react-bootstrap/InputGroup"; 
import FormControl from "react-bootstrap/FormControl"; 
import ListGroup from "react-bootstrap/ListGroup"; 
// import { Container, Row, Col, Button , Accordion , Card , Alert , Badge , Breadcrumb ,Collapse , Ratio } from 'react-bootstrap';
import LoginForm from './LoginForm';


const App = () =>  {

  const [select_Ratio, set_Select_Ratio] = useState("16x9"); 
    const ratioFn = (newRatio) => { 
        set_Select_Ratio(newRatio); 
    };

  return (
    <>
      <div> 
            <h1 style={{ color: "green" }}>Welcome To My Website</h1> 
            <h3>React Bootstrap Ratios Utilities</h3> 
            <div> 
                <label>Select Aspect Ratio:</label> 
                <select 
                    value={select_Ratio} 
                    onChange={(e) => ratioFn(e.target.value)} 
                > 
                    <option value="1x1">1:1</option> 
                    <option value="4x3">4:3</option> 
                    <option value="16x9">16:9</option> 
                    <option value="21x9">21:9</option> 
                </select> 
            </div> 
            <div style={{ width: "500px", height: "500px" }}> 
                <Ratio aspectRatio={select_Ratio}> 
                    <img 
                        src= 
"https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200x200-min.png"
                        alt="GeeksforGeeks Logo"
                        className="img-fluid"
                    /> 
                </Ratio> 
            </div> 
        </div> 
    </>
  );
}

export default App;
