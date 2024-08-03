const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <strong>{item.name}</strong> - <strong>x{item.amount}</strong>............ {item.price}€/ud - Total: <strong>{item.total_price.toFixed(2)}€</strong>
    </div>
  )
}

export default CartItem
