import { useShoppingCartContext } from "../context/ShoppingCartContext";
import { Link } from "react-router-dom";
import CartTotalPrice from "./CartTotalPrice";
import { useState } from "react";

const Header = () => {
  //const [isLogin, setIsLogin] = useState(false) //Variable para controlar si mostrar o no el login??? Igual se puede coger de Login.jsx????

  const {items} = useShoppingCartContext();
  const totalAmount = items.reduce((total, item) => total + item.amount, 0)

  /*
  const showLogin = ()=>{
    setIsLogin(!isLogin)

  }
  */


  return <>
   <nav>
      <img src="/favicon.png" alt="logo" className="logo"/>
      <ul>
        <li><Link to="/">Tienda</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
      <Link to="/cart" className="nav-cart"><div className="carrito">Productos: {totalAmount}</div> <div className="priceContext"><CartTotalPrice/></div></Link>
    </nav>   
  </>
}

export default Header;