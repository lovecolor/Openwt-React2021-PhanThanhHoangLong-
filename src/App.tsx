import React, { useState } from 'react';
import logo from './logo.svg';
import classes from './App.module.scss';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Modal from './components/UI/Modal';
import Cart from './components/Cart/Cart';

function App() {
  const [isShowCart,setIsShowCart]=useState<boolean>(false)
  const showCartHandler=()=>{
    
    setIsShowCart(true)
  }
  const hideCartHandler=()=>{
    setIsShowCart(false)
  }
  return (
    <div className={classes.App}>
      {isShowCart&&<Cart onHideCart={hideCartHandler}></Cart>}
      <Header  onShowCart={showCartHandler}></Header>
      <main>
        <Meals></Meals>
      </main>
    </div>
  );
}

export default App;
