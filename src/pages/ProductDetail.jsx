import React from "react";
import { Link, useParams } from "react-router-dom";
import useProducts from "../hooks/useProducts";


const ProductDetail = () => {
  const { id } = useParams()
  const products = useProducts()
  const product = products.find((producto) => producto.product_id === parseInt(id))


  if (!product) {
    return <p>Producto no encontrado</p>
  }


  return (
    <div className="page details">
      <Link to="/" className="backLink"><p className="backP">Volver al listado</p></Link>
      <img className="detailImage" src={product?.image_link} />
      <p className="nombreProducto">{product?.name}</p>
      <p>{product?.price} €</p>
      <p>{product?.description}</p>
      <p>Categoría: {product?.category}</p>
    </div>
  )
}

export default ProductDetail