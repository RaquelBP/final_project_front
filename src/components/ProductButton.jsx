import { useShoppingCartContext } from "../context/ShoppingCartContext"

const ProductButton = ({ product }) => {
  const { addItem } = useShoppingCartContext()

  return <button onClick={() => addItem(product)}>Añadir a Carrito</button>
}

export default ProductButton