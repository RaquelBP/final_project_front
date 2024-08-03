import React, { useState, useEffect } from 'react';

const FormularioProductos = ({ onSubmit, initialData = {}, onClose }) => {
  const [name, setName] = useState(initialData.name || '')
  const [description, setDescription] = useState(initialData.description || '')
  const [price, setPrice] = useState(initialData.price || 0)
  const [minutes, setMinutes] = useState(initialData.minutes || 0)
  const [category, setCategory] = useState(initialData.category || '')
  const [imageLink, setImageLink] = useState(initialData.image_link || '')

  useEffect(() => {

    setName(initialData.name || '')
    setDescription(initialData.description || '')
    setPrice(initialData.price || 0)
    setMinutes(initialData.minutes || 0)
    setCategory(initialData.category || '')
    setImageLink(initialData.image_link || '')

  }, [initialData])


  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ name, description, price, minutes, category, image_link: imageLink })
    if (onClose) {
      onClose()
    }
    
  }


  return (
    <div className="overlay">
      <form onSubmit={handleSubmit} className="formularios">

        <label>
          Nombre:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>

        <label>
          Descripción:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </label>

        <label>
          Precio:
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </label>

        <label>
          Minutos:
          <input type="number" value={minutes} onChange={(e) => setMinutes(e.target.value)} required />
        </label>

        <label>
          Categoría:
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
        </label>

        <label>
          Enlace de Imagen:
          <input type="text" value={imageLink} onChange={(e) => setImageLink(e.target.value)} />
        </label>

        <button type="submit">Guardar</button>
        <button type="button" onClick={onClose}>Cancelar</button>

      </form>
    </div>
  )
}

export default FormularioProductos
