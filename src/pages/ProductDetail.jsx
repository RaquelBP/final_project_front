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
    <div>
      <p><Link to="/">Volver al listado</Link></p>
      <img className="detailImage" src={product?.image_link} />
      <p>{product?.name}</p>
      <p>{product?.price}€</p>
      <p>{product?.description}</p>
      <p>{product?.category}</p>
      {product?.amount !== undefined ? <p>{product.amount}</p> : <p>No disponible</p>}
    </div>
  );
}

export default ProductDetail