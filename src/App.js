import React, { useState } from 'react';
import './App.css';
import Header from "./Component/Layout/Header"
import Meals from './Component/Meals/Meals';
import Cart from './Component/Cart/cart';
import CartProvider from './Store/ContextProvider';

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }


  return (
    <CartProvider>
      {cartIsShown && <Cart onCloseCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
