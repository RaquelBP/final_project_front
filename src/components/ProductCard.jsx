import { useShoppingCartContext } from "../context/ShoppingCartContext";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductButton from "./ProductButton";
import RemoveButton from "./RemoveButton";

const ProductCard = ({ product, hasPrice }) => {
  const { items } = useShoppingCartContext();
  const { user } = useSelector((state) => state.user);

  const cartItem = items.find(item => item.id === product.id) || { amount: 0 };

  return (
    <div className="card">
      <Link to={`/product/${product.id}/`}>
        <img className="cardImage" src={product.image} />
        <p>{product.title}</p>
        {hasPrice && <p>{product.price}</p>}
      </Link>
      {user && <div>Solo hoy para ti, {user.name} a un 50% de descuento</div>}
      <ProductButton product={product} />
      <p>{cartItem.amount}</p>
      <RemoveButton product={product} />
    </div>
  );
}

export default ProductCard;
