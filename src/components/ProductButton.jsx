import { useShoppingCartContext } from "../context/ShoppingCartContext";

const ProductButton = ({ product }) => {
  const { addItem } = useShoppingCartContext();

  return <button onClick={() => addItem(product)}>Añadir a Carrito</button>
}

export default ProductButton;

/*
const RemoveButton = ({product}) => {
  const {removeItem} = useShoppingCartContext();

  return <button onClick={() => removeItem(product)}>Eliminar del Carrito</button>

}

export default {ProductButton, RemoveButton};

*/