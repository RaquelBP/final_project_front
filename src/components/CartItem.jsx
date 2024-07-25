const CartItem = ({item}) => {
  return <div className="cart-item">
    {`${item.title} - x${item.amount}............ ${item.price.toFixed(2)}€/ud  -  Total: ${item.totalPrice.toFixed(2)}€`}
    
  </div>
}

export default CartItem;