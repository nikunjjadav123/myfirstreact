<<<<<<< HEAD
<<<<<<< HEAD
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


class App extends Component { 
  constructor(props) { 
      super(props); 

      this.state = { 
          userInput: "", 
          list: [], 
      }; 
  } 

  updateInput(value) { 
      this.setState({ 
          userInput: value, 
      }); 
  } 

  addItem() { 
      if (this.state.userInput !== "") { 
          const userInput = { 

              id: Math.random(), 

              value: this.state.userInput, 
          }; 

          const list = [...this.state.list]; 
          list.push(userInput); 

          this.setState({ 
              list, 
              userInput: "", 
          }); 
      } 
  } 
 
  deleteItem(key) { 
      const list = [...this.state.list]; 
      const updateList = list.filter((item) => item.id !== key); 
      this.setState({ 
          list: updateList, 
      }); 
  } 

  editItem = (index) => { 
    const todos = [...this.state.list]; 
    const editedTodo = prompt('Edit the todo:'); 
    if (editedTodo !== null && editedTodo.trim() !== '') { 
      let updatedTodos = [...todos] 
      updatedTodos[index].value= editedTodo 
      this.setState({ 
        list: updatedTodos, 
    }); 
    } 
  } 

  render() { 
      return ( 
          <Container> 
              <Row 
                  style={{ 
                      display: "flex", 
                      justifyContent: "center", 
                      alignItems: "center", 
                      fontSize: "3rem", 
                      fontWeight: "bolder", 
                  }} 
              > 
                  TO DO LIST 
              </Row> 

              <hr /> 
              <Row> 
                  <Col md={{ span: 5, offset: 4 }}> 
                      <InputGroup className="mb-3"> 
                          <FormControl 
                              placeholder="add item . . . "
                              size="lg"
                              value={this.state.userInput} 
                              onChange={(item) => 
                                  this.updateInput(item.target.value) 
                              } 
                              aria-label="add something"
                              aria-describedby="basic-addon2"
                          /> 
                          <InputGroup> 
                              <Button 
                                  variant="success"
                                  className="mt-4"
                                  onClick={() => this.addItem()} 
                              > 
                                  ADD 
                              </Button> 
                          </InputGroup> 
                      </InputGroup> 
                  </Col> 
              </Row> 
              <Row> 
                  <Col md={{ span: 5, offset: 4 }}> 
                      <ListGroup> 
                          {/* map over and print items */} 
                          {this.state.list.map((item, index) => { 
                              return ( 
                                <div key = {index} >  
                                  <ListGroup.Item 
                                      variant="dark"
                                      action 
                                      style={{display:"flex", 
                                              justifyContent:'space-between'
                                    }} 
                                  > 
                                      {item.value} 
                                      <span> 
                                      <Button style={{marginRight:"10px"}} 
                                      variant = "light"
                                      onClick={() => this.deleteItem(item.id)}> 
                                        Delete 
                                      </Button> 
                                      <Button variant = "light"
                                      onClick={() => this.editItem(index)}> 
                                        Edit 
                                      </Button> 
                                      </span> 
                                  </ListGroup.Item> 
                                </div> 
                              ); 
                          })} 
                      </ListGroup> 
                  </Col> 
              </Row> 
          </Container> 
      ); 
  } 
} 

=======
import logo from './logo.svg';
import './App.css';
=======
import logo from './logo.svg';
import './App.css';
>>>>>>> parent of e773d15 (added Ratio  Code)
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
>>>>>>> parent of e773d15 (added Ratio  Code)

export default App;
