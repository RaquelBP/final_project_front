import { useEffect, useState } from 'react'

const useProducts = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {

    const fetchProducts = async () => {

      try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/products`)
        const data = await response.json()
        
        
        //Añade los Placeholders a cada producto
        const productsWithPlaceholders = data.map(product => ({
          ...product,
          amount: 0,
          total_price: 0, 
          total_minutes: 0
        }))

        setProducts(productsWithPlaceholders);
      }
      catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts()

  }, [])

  return products
}

export default useProducts
