import { useShoppingCartContext } from "../context/ShoppingCartContext"

const RemoveButton = ({ product }) => {
  const { removeItem } = useShoppingCartContext()

  return <button onClick={() => removeItem(product)}>Eliminar del Carrito</button>
}

export default RemoveButton
