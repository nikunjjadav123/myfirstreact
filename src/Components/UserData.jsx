import React, { useState } from "react";
import UserData from './LoadUserData';
import 'bootstrap/dist/css/bootstrap.css';
import {Card} from 'react-bootstrap';

const Home = () => {
    return (
        <div class="main_header">
            <h1>USER DATA</h1>
            <UserData />
        </div>
    );
           
  };
  
  export default Home;