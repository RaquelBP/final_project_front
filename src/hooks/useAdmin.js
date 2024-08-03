import axios from 'axios';
import React, { useState, useEffect } from 'react'

export const useAdminOrders = () => {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchOrders = async () => {

    try {
      const token = localStorage.getItem('token')
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/admin/orders`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      setOrders(response.data)

    } catch (err) {
      console.error(err)

      setError('Error fetching orders')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchOrders()
  }, [])

  const createOrder = async (orderData) => {
    try {
      const token = localStorage.getItem('token')
      await axios.post(`${import.meta.env.VITE_BASE_URL}/users/admin/orders`, orderData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })


      fetchOrders()

    } catch (err) {
      console.error(err)
      setError('Error creating order')
    }
  }

  const updateOrder = async (orderId, updatedData) => {
    try {
      const token = localStorage.getItem('token')
      await axios.put(`${import.meta.env.VITE_BASE_URL}/users/admin/orders/${orderId}`, updatedData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      fetchOrders()

    } catch (err) {
      console.error(err)
      setError('Error updating order')
    }
  }

  const deleteOrder = async (orderId) => {
    try {
      const token = localStorage.getItem('token')
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/users/admin/orders/${orderId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setOrders(orders.filter(order => order.order_id !== orderId))
    } catch (err) {
      console.error(err)
      setError('Error deleting order')
    }
  }

  return { orders, loading, error, createOrder, updateOrder, deleteOrder }
}

export const useAdminProducts = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchProducts = async () => {

    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/admin/products`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      setProducts(response.data)

    } catch (err) {
      console.error(err)

      setError('Error fetching products')

    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const createProduct = async (productData) => {
    try {
      const token = localStorage.getItem('token')

      await axios.post(`${import.meta.env.VITE_BASE_URL}/users/admin/products`, productData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      fetchProducts()

    } catch (err) {
      console.error(err)
      setError('Error creating product')
    }
  };

  const updateProduct = async (productId, updatedData) => {
    try {
      const token = localStorage.getItem('token')

      await axios.put(`${import.meta.env.VITE_BASE_URL}/users/admin/products/${productId}`, updatedData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      fetchProducts()

    } catch (err) {
      console.error(err)
      setError('Error updating product')
    }
  }

  const deleteProduct = async (productId) => {
    try {
      const token = localStorage.getItem('token')

      await axios.delete(`${import.meta.env.VITE_BASE_URL}/users/admin/products/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      setProducts(products.filter(product => product.product_id !== productId))


    } catch (err) {
      console.error(err)

      setError('Error deleting product')
    }
  }

  return { products, loading, error, createProduct, updateProduct, deleteProduct }
}