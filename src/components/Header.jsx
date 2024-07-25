import { useShoppingCartContext } from "../context/ShoppingCartContext";
import { Link } from "react-router-dom";
import CartTotalPrice from "./CartTotalPrice";

const Header = () => {
  const {items} = useShoppingCartContext();
  const totalAmount = items.reduce((total, item) => total + item.amount, 0)


  return <>
   <nav>
      <img src="/favicon.png" alt="logo" />
      <ul>
        <li><Link to="/">Tienda</Link></li>
        <li><Link to="/login">Login de Empleados</Link></li>
      </ul>
      <Link to="/cart"><div> <p>Carrito</p> Productos: {totalAmount}</div><CartTotalPrice/></Link>
    </nav>
    <h1 className="myTitle">McDowell's Hamburguesas</h1>
    
  </>
}

export default Header;