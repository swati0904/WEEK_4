import { useState } from 'react'

import './App.css'
import { useEffect } from 'react'


function App() {
  
  const [todo, setTodo]=useState([])
  // the code inside the useeffect is call only once , and wheneever we actually set any use statte , then it rerenders the code but ignores the 
  //code inside the useeffect
  
  useEffect(()=>{
    //fetch("https//localhost::3000/settodos)
    
    fetch("http://localhost:3000/todos", {
      method:"GET"
    }).then((response)=>{
      response.json().then((data)=>{
        setTodo(data);
      })
    });
    
    
    console.log("hi from the react");
  }, []);
  return (
    <>
      
      {
        todo.map((value)=>{
          return <Task title={value.title} description={value.description} ></Task>
        })
      }
    </>
  )
}

function Task(props){
  return <div>
    {props.title}
    {props.description}
    </div>
  
}


export default App
