import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Products from "../components/Products";

import ProductButton from "../components/ProductButton";
import RemoveButton from "../components/RemoveButton";


const ProductDetail = () => {
  //const [product, setProduct] = useState({}); // Estado inicial vacío
  const { id } = useParams();
  const { user } = useSelector((state) => state.user);

  const products = Products();
  const product = products.find((producto) => producto.id === parseInt(id))

  console.log("PRODUCTOO", product)

  console.log("AMOUNT:", product.amount)

  return <div>
    <p><Link to={`/`}>Volver al listado</Link></p>
    <img className="detailImage" src={product?.image}/>
    <p>{product?.title}</p>
    {user ? <p>{(product?.price/2).toFixed(2)}€</p> : <p>{(product?.price).toFixed(2)}€</p>}
    <p>{product?.description}</p>
    <p>{product?.category}</p>
    <p>{product?.raiting?.rate}</p>

    
  </div>
}

export default ProductDetail;

/*
<ProductButton product={product} />
      <p>{product.amount}</p>
      <RemoveButton product={product} />
*/