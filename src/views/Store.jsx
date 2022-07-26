import React from "react";
import styled from "styled-components";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";

const Store = () => {
  const { products, cartItems } = useSelector((state) => state.shopping);
  return (
    <>
      <Heading>
        <h1>
          Find everything you are looking for in TUESDAY, our Online Store!
        </h1>
        <p>
          The price and other details may vary depending on the size and color
          of the product.
        </p>
      </Heading>
      <ProductsContainer>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} cartItems={cartItems}/>
        ))}
      </ProductsContainer>
    </>
  );
};

export default Store;

const Heading = styled.div`
  margin-top: 8rem;
  text-align: center;
`;

const ProductsContainer = styled.div`
  max-width: 1024px;
  width: 80%;
  margin: 70px auto 0;
  gap: 12px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 15px;
`;
