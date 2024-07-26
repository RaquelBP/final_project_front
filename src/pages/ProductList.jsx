import ProductCard from "../components/ProductCard";
import useProducts from "../hooks/useProducts";

const ProductList = () => {
  const products = useProducts()
  console.log("Productos:", products)
  //console.log("id:", products[0].product_id)

  return (
    <div>
      {products.length === 0 ? (
        <p>Cargando productos...</p>
      ) : (
        products.map((product) => (
          product.product_id && (
            <ProductCard key={product.product_id} product={product} hasPrice={false} />
          )
        ))
      )}
    </div>
  );
};

export default ProductList;