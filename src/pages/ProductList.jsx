import ProductCard from "../components/ProductCard"
import useProducts from "../hooks/useProducts"
import { Link } from "react-router-dom"

const ProductList = () => {
  const products = useProducts()

  return (
    <div className="page">
      <h1 className="titulo">McDowell's Burgers</h1>
      <div className="products">
        {products.length === 0 ? (
          <p>Cargando productos...</p>
        ) : (
          products.map((product) => (
            product.product_id && (
              <ProductCard key={product.product_id} product={product} hasPrice={false}/>
            )
          ))
        )}
      </div>
      <Link to="/cart" className="backLink"><p className="backP">Carrito </p></Link>
    </div>
  )
}

export default ProductList