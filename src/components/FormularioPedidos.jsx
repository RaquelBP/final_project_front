import React, { useState, useEffect } from 'react'

const FormularioPedidos = ({ onSubmit, initialData = {}, onClose }) => {
  const [products, setProducts] = useState(initialData.products || [])
  const [status, setStatus] = useState(initialData.status || '')

  useEffect(() => {
    setProducts(initialData.products || [])
    setStatus(initialData.status || '')
  }, [initialData])

  const handleProductChange = (index, field, value) => { //Actualización del producto
    const updatedProducts = [...products];
    updatedProducts[index] = { ...updatedProducts[index], [field]: value }
    setProducts(updatedProducts)
  }

  const handleAddProduct = () => { //Añadir producto nuevo
    setProducts([...products, { product_id: '', quantity: 1 }])
  }

  const handleRemoveProduct = (index) => { //Eliminar prodcustos
    setProducts(products.filter((_, i) => i !== index))
  }

  const handleSubmit = (e) => { //Envío del formulario
    e.preventDefault()
    onSubmit({ products, status })
    if (onClose) {
      onClose()
    }
  }

  return (
    <div className="overlay">
      <form onSubmit={handleSubmit} className="formularios">

        {products.map((product, index) => (
          <div key={index}>

            <label>
              Producto ID:
              <input type="number" value={product.product_id || ''} onChange={(e) => handleProductChange(index, 'product_id', e.target.value)} required />
            </label>


            <label>
              Cantidad:
              <input type="number" value={product.quantity || ''} onChange={(e) => handleProductChange(index, 'quantity', e.target.value)} required />
            </label>

            <button type="button" onClick={() => handleRemoveProduct(index)}>Eliminar Producto</button>

          </div>
        ))}


        <button type="button" onClick={handleAddProduct}>Añadir Producto</button>


        <label>
          Estado:
          <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} required />

        
        </label>
        <button type="submit">Guardar</button>
        <button type="button" onClick={onClose}>Cancelar</button>
      </form>
    </div>
  )
}

export default FormularioPedidos
