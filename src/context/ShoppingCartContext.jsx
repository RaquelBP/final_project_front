import { createContext, useState, useContext } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
  const [items, setItems] = useState([])

  const addItem = (newItem) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.product_id === newItem.product_id)

      if (existingItem) {
        return prevItems.map(item =>
          item.product_id === newItem.product_id
            ? { ...item, amount: item.amount + 1, total_price: item.total_price + Number(newItem.price), total_minutes: item.total_minutes + Number(newItem.minutes) }
            : item
        )
      }
      else {
        
        const totalPrice = Number(newItem.price)
        const totalMinutes = Number(newItem.minutes)
        return [...prevItems, { ...newItem, amount: 1, total_price: totalPrice, total_minutes: totalMinutes }]
      }
    })
  }


  const removeItem = (itemToRemove) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.product_id === itemToRemove.product_id)

      if (existingItem) {

        if (existingItem.amount > 1) {

          return prevItems.map(item =>
            item.product_id === itemToRemove.product_id
              ? { ...item, amount: item.amount - 1, total_price: item.total_price - Number(item.price), total_minutes: item.total_minutes - Number(item.minutes) }
              : item
          )
        }
        
        else {
          return prevItems.filter(item => item.product_id !== itemToRemove.product_id)
        }
      }

      return prevItems
    })
  }

  const clearCart = () => {
    setItems([])
}
  

return (
  <ShoppingCartContext.Provider value={{ items, addItem, removeItem, clearCart }}>
      {children}
  </ShoppingCartContext.Provider>
)
}

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext)
}
