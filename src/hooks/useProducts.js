//fetch de los productos al backend
import { useEffect, useState } from 'react';

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simula una llamada a la base de datos o API
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/products")
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    };

    fetchProducts()
  }, [])

  return products;
}


export default useProducts;