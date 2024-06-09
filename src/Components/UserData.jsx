import React, { useState } from "react";
import UserData from './LoadUserData';
import 'bootstrap/dist/css/bootstrap.css';
import {Card} from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <Card>
                <Card.Body>USER DATA</Card.Body>
            </Card>
            <UserData />
        </div>
    );
           
  };
  
  export default Home;