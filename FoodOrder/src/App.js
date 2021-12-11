import Header from "./components/Layout/Header";
import  { useState} from "react";
import Meals from "./components/Meal/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/store/CartProvider";



function App() {
  const[isCartShown,setCartIsShown] = useState(false);
  const showCartHandler = props =>{
    setCartIsShown(true);
  }

  const hideCartHandler = props =>{
    setCartIsShown(false);
  }

  return (
      <CartProvider>
        {isCartShown && <Cart onClose={hideCartHandler}/>}
        <Header onCartShown={showCartHandler} />
        <main>
          <Meals></Meals>
        </main>
      </CartProvider>
    
  );
}

export default App;
