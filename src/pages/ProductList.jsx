import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Products from "../components/Products";

const ProductList = () => {
    const [products, setProducts] = useState(Products());
    //const [search, setSearch] = useState("");

    //const {oldSearch} = useParams();

    

    return <div>
      {products.map((product) => (
          <ProductCard key={product.id} product={product} hasPrice={false} />
        ))}
    </div>
  }
  
  export default ProductList;