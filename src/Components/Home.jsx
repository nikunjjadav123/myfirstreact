import React, { useState } from "react";
import LoadUserData from './Pages/LoadUserData';
import 'bootstrap/dist/css/bootstrap.css';
import {Card} from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <Card>
                <Card.Body>USER DATA</Card.Body>
            </Card>
            <LoadUserData />
        </div>
    );
           
  };
  
  export default Home;