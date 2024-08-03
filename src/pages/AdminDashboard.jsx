import React, { useState, useEffect } from 'react'
import { useAdminOrders, useAdminProducts } from '../hooks/useAdmin'
import FormularioPedidos from '../components/FormularioPedidos'
import FormularioProductos from '../components/FormularioProductos'

const AdminDashboard = () => {
  const { orders, loading: ordersLoading, error: ordersError, createOrder, updateOrder, deleteOrder } = useAdminOrders()
  const { products, loading: productsLoading, error: productsError, createProduct, updateProduct, deleteProduct } = useAdminProducts()
  const [showOrderForm, setShowOrderForm] = useState(false)
  const [showProductForm, setShowProductForm] = useState(false)
  const [orderFormData, setOrderFormData] = useState(null)
  const [productFormData, setProductFormData] = useState(null)

  if (ordersLoading || productsLoading) return <div>Cargando...</div>
  if (ordersError || productsError) return <div>Error: {ordersError || productsError}</div>

  
  const handleOrderFormSubmit = async (data) => {

    if (orderFormData) {
      await updateOrder(orderFormData.order_id, data)
    }
    
    else {
      await createOrder(data)
    }
    
    setShowOrderForm(false)
    setOrderFormData(null)
  }


  const handleProductFormSubmit = async (data) => {

    if (productFormData) {
      await updateProduct(productFormData.product_id, data)
    }
    
    else {
      await createProduct(data)
    }

    setShowProductForm(false)
    setProductFormData(null)
  }


  const handleOrderEditClick = (order) => {
    setOrderFormData(order)
    setShowOrderForm(true)
  }


  const handleProductEditClick = (product) => {
    setProductFormData(product)
    setShowProductForm(true)
  }


  const handleCloseOrderForm = () => {
    setOrderFormData(null)
    setShowOrderForm(false)
  }
  

  const handleCloseProductForm = () => {
    setProductFormData(null)
    setShowProductForm(false)
  }

  return (
    <div className='dashboard page'>
      <h1>Admin Dashboard</h1>
      <button onClick={() => setShowOrderForm(true)}>Agregar Pedido</button>
      <button onClick={() => setShowProductForm(true)}>Agregar Producto</button>
      
      <h2>Pedidos</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Fecha</th>
            <th>Minutos</th>
            <th>Precio</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.order_id}>
              <td>{order.order_id}</td>
              <td>{new Date(order.created_at).toLocaleString()}</td>
              <td>{order.total_minutes}</td>
              <td>{order.total_price}</td>
              <td>{order.status}</td>
              <td>
                <button onClick={() => handleOrderEditClick(order)}>Editar</button>
                <button onClick={() => deleteOrder(order.order_id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <h2>Productos</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Minutos</th>
            <th>Categoría</th>
            <th>Imagen</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.product_id}>
              <td>{product.product_id}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>{product.minutes}</td>
              <td>{product.category}</td>
              <td>
                {product.image_link ? <img src={product.image_link} alt={product.name} style={{ width: '100px', height: 'auto' }} /> : 'No disponible'}
              </td>
              <td>
                <button onClick={() => handleProductEditClick(product)}>Editar</button>
                <button onClick={() => deleteProduct(product.product_id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showOrderForm && (
        <FormularioPedidos
          initialData={orderFormData || {}}
          onSubmit={handleOrderFormSubmit}
          onClose={handleCloseOrderForm}
        />
      )}

      {showProductForm && (
        <FormularioProductos
          initialData={productFormData || {}}
          onSubmit={handleProductFormSubmit}
          onClose={handleCloseProductForm}
        />
      )}
    </div>
  );
};

export default AdminDashboard;
