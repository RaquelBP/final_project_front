import { useShoppingCartContext } from "../context/ShoppingCartContext";

const CartTotalPrice = () => {
    const { items } = useShoppingCartContext();
    
    const totalPrice = items.reduce((total, item) => total + item.total_price, 0).toFixed(2) //Precio total

    //Renderiza si el precio es mayor que 0
    if (totalPrice <= 0) {
        return null;
    }

    return <div> <strong>Total: {totalPrice}€ </strong></div>;
}

export default CartTotalPrice;
