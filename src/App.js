
import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
import {List} from "./MyComponents/List";
//import { AddTodo } from "./MyComponents/AddTodo";
import {About} from "./MyComponents/About";
//import React, { useState, useEffect } from 'react';
//import {
// BrowserRouter as Router,
// Switch,
// Route
//} from "react-router-dom";

function App() {
  let myVariable = 345;
  return (
    <>
      <Header  title="Mywork" searchBar={false}/>
      <Todos/>
      <List/> 
      <About/>
      <Footer/>
     

      

    </>

  );
}

export default App;



  //if (localStorage.getItem("todos") === null) {
   // initTodo = [];
  //}
  //else {
  //  initTodo = JSON.parse(localStorage.getItem("todos"));
 // }



  //const onDelete = (todo) => {
   // console.log("I am ondelete of todo", todo);
    // Deleting this way in react does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    //setTodos(todos.filter((e) => {
     // return e !== todo;
    //}));
    //console.log("deleted", todos)
    //localStorage.setItem("todos", JSON.stringify(todos));
  //}

  //const addTodo = (title, desc) => {
    //console.log("I am adding this todo", title, desc)
    //let sno;
    //if (todos.length === 0) {
     // sno = 0;
    //}
    //else {
     // sno = todos[todos.length - 1].sno + 1;
   // }
    //const myTodo = {
    //  sno: sno,
     // title: title,
     // desc: desc,
   //}
    //setTodos([...todos, myTodo]);
    //console.log(myTodo);
  //}

  //const [todos, setTodos] = useState(initTodo);
  //useEffect(() => {
   // localStorage.setItem("todos", JSON.stringify(todos));
 // }, [todos])
 //<Todos/>
    //<Footer/>


