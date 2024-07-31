import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
//import Products from "../components/Products";
import useProducts from "../hooks/useProducts";


//import ProductButton from "../components/ProductButton";
//import RemoveButton from "../components/RemoveButton";


const ProductDetail = () => {
  const { id } = useParams()
  const products = useProducts()
  const product = products.find((producto) => producto.product_id === parseInt(id))

  //console.log("PRODUCTOO", product)

  if (!product) {
    return <p>Producto no encontrado</p>
  }

  console.log("AMOUNT:", product.amount)

  return (
    <div className="page details">
      <Link to="/" className="backLink"><p className="backP">Volver al listado</p></Link>
      <img className="detailImage" src={product?.image_link} />
      <p className="nombreProducto">{product?.name}</p>
      <p>{product?.price} €</p>
      <p>{product?.description}</p>
      <p>Categoría: {product?.category}</p>
    </div>
  );
}

export default ProductDetail