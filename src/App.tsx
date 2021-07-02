import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';

import styled from 'styled-components';
import Form from './components/Form';



const listIp=[
  {
    input:{
      type:"text"
    },
    label:"First name",
    error:"Please enter a first name",
    validate:(value:String)=>{
return value.trim().length>0
    }
  }
  ,
  {
    input:{
      type:"text"
    },
    label:"Last name",
    error:"Please enter a last name",
    validate:(value:String)=>{
      return value.trim().length>0
          }
        
  },
  {
    input:{
      type:"text"
    },
    label:"Email",
    error:"Please enter a valid email address",
    validate:(value:String)=>{
      return value.includes("@");
          }
        
  }
]
const Container=styled.div`
width:100%;
height:100%;
background-color:#383638;
padding: 5rem 0;
`
function App() {
  return (
    <Container className="App">
      <Form listIp={listIp} labelSubmit="Submit"></Form>
    </Container>
  );
}

export default App;
