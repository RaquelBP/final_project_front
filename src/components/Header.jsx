import { useShoppingCartContext } from "../context/ShoppingCartContext"
import { Link } from "react-router-dom"
import CartTotalPrice from "./CartTotalPrice"

const Header = () => {

  const {items} = useShoppingCartContext();
  const totalAmount = items.reduce((total, item) => total + item.amount, 0)


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