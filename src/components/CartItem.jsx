const CartItem = ({item}) => {
  console.log(item)
  return <div className="cart-item">
    {`${item.name} - x${item.amount}............ ${item.price}€/ud  -  Total: ${item.total_price.toFixed(2)}€`}
    
  </div>
}

export default CartItem;