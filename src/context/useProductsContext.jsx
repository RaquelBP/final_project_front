import { createContext, useState, useContext } from 'react';

const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [user, setUser] = useState({})

  return (
    <ProductContext.Provider value={{ products, setProducts, user, setUser }}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProductContext = () => {
  return useContext(ProductContext)
}

export { ProductContext }
