import { useShoppingCartContext } from "../context/ShoppingCartContext";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductButton from "./ProductButton";
import RemoveButton from "./RemoveButton";

const ProductCard = ({ product, hasPrice }) => {
  if (!product) {
    return <div>No product data</div>
  }
  
  const { items } = useShoppingCartContext();
  //const { user } = useSelector((state) => state.user);

  const cartItem = items.find(item => item.product_id === product.product_id) || { amount: 0 }
  //console.log("CartItem:", cartItem)
  //console.log(product.price)

  return (
    <div className="productCards">
      <Link to={`/product/${product.product_id}/`}>
        <img className="cardImage" src={product.image_link} />
        <p className="nombreProducto">{product.name}</p>
        <p>{product.price} €</p>
      </Link>

      <ProductButton product={product} />
      <p className="cantidadProducto">Cantidad: {cartItem.amount}</p>
      <RemoveButton product={product} />
    </div>
  );
};

export default ProductCard
