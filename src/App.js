import { useState } from "react";
import Header from "./Components/Layout/Header";
import Footer from './Footer/Footer'
import Meals from './Components/Meals/Meals'
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";


function App() {

  const [cartShown, setCartShown]= useState(false);
 
  const showCart = () =>{
    setCartShown(true);
  }

  const hideCart = () =>{
    setCartShown(false);
  }

  return (
    <CartProvider >
      {cartShown && <Cart onClose={hideCart}/>}
      <Header onShowCart={showCart}/>
      <main>
      <Meals/>
      </main>
      <Footer/>
    </CartProvider >
  );
}

export default App;
