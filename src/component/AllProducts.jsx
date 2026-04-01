import React, { useEffect, useState } from "react";
import Product from "./Product";

const AllProducts = ({ productsPromise, cart, setCart }) => {
  const [products, setProducts] = useState(null); // start null

  useEffect(() => {
    productsPromise
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, [productsPromise]);

  if (!products) return <div className="text-center py-20">Loading products...</div>;

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 p-10 mt-10">
      {products.map((product) => (
        <Product key={product.id} product={product} cart={cart} setCart={setCart} />
      ))}
    </div>
  );
};

export default AllProducts;