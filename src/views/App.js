import logo from './logo.svg';
import './App.scss';
import MyComponent from './example/MyComponent.js'; 
import React, { Component }  from 'react';
import ListTodo from './Todos/ListTodo';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav';
import Home from './example/Home';
import ListUser from './Users/ListUser';
import DetailUser from './Users/DetailUser';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  // jsx viết hàm xử lý code bên trong hàm
  // trả ra 1 khối html là 1 component
  return (
    <BrowserRouter>
    <div className="App">
      
      <header className="App-header">
        <Nav/>
        <img src={logo} className="App-logo" alt="logo" />
        
         
        {/* <MyComponent/> */}
        {/* <myComponent></myComponent> */}
        {/* <ListTodo/>  */}
        {/* <Home/> */}
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/todo">
            <ListTodo />
          </Route>
          <Route path="/about">
            <MyComponent />
          </Route>

          <Route path="/user" exact>
              <ListUser />
            </Route>
            <Route path="/user/:id">
              <DetailUser />
            </Route>
          
        </Switch>
      </header>
      <ToastContainer         
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
      />
      
    </div>
    </BrowserRouter>
    
  );
}

export default App;
