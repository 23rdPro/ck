// import Image from "next/image";
// import styles from "./page.module.css";
"use client";
import { useState } from "react";
import Product from "./components/Product";
import Products from "./components/Products";
export default function Home() {
  const products:any = []
  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
  };
  const handleBackClick = () => {
    setSelectedProduct(null);
  };
  return (
   <>
     {selectedProduct ? (
      <Product product={selectedProduct} goBack={handleBackClick} />
     ) : (
      <Products products={products} onProductClick={handleProductClick} />
     )}
   </>
  );
}
