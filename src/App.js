import logo from './logo.svg';
import './App.css';
import { Container, Row, Col, Button , Accordion , Card , Alert , Badge , Breadcrumb } from 'react-bootstrap';
import LoginForm from './LoginForm';


const App = () =>  {
  return (
    <>
      <div style={{ display: 'block',  
                  width: 700, padding: 30 }}> 
      <h4>React-Bootstrap Breadcrumb Component</h4> 
      <Breadcrumb> 
        <Breadcrumb.Item href="#"> 
           Dashboard 
        </Breadcrumb.Item> 
        <Breadcrumb.Item href="#"> 
          Profile 
        </Breadcrumb.Item> 
        <Breadcrumb.Item active> 
          Details 
        </Breadcrumb.Item> 
      </Breadcrumb> 
    </div> 
    </>
  );
}

export default App;
