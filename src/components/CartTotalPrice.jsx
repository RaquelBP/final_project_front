import { useShoppingCartContext } from "../context/ShoppingCartContext"

const CartTotalPrice = () => {
    const { items } = useShoppingCartContext()
    console.log("Carrito:", items)

    const totalPrice = items.reduce((total, item) => total + item.total_price, 0).toFixed(2)

    return <div>Precio: ${totalPrice}</div>
}

export default CartTotalPrice
