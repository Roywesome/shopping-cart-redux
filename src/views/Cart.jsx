import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import Checkout from "../components/Checkout";

const Cart = () => {
  const { cartItems, checkout } = useSelector((state) => state.shopping);

  return (
    <>
      <Heading>
        <h1>
          Shopping Cart <span>({cartItems.length})</span>
        </h1>
      </Heading>

      {checkout && (
        <CheckoutMsg>
          <h4>Thank you for your purchase!</h4>
          <p>
            Your order has been placed and will be delivered to you within 24
            hours.
          </p>
          <Link to="/">
            <ShopBtn>Continue Shopping</ShopBtn>
          </Link>
        </CheckoutMsg>
      )}

      <Layout>
        <div>
          {
            <CartItemWrapper>
              {cartItems.length === 0 ? (
                <h4 style={{}}>Cart is empty</h4>
              ) : (
                <ul>
                  {cartItems.map((cartItem, index) => (
                    <CartItem key={index} cartItem={cartItem} />
                  ))}
                </ul>
              )}
            </CartItemWrapper>
          }
        </div>

        <div>{cartItems.length > 0 && <Checkout />}</div>
      </Layout>
    </>
  );
};

export default Cart;

const Heading = styled.div`
  margin-top: 8rem;
  text-align: center;
`;

const CheckoutMsg = styled.div`
  color: green;
  text-align: center;
  padding: 1.5rem;
  p {
    margin: 0.5rem 0 1.5rem 0;
  }
`;

const ShopBtn = styled.button`
  outline: none;
  border: 1px solid green;
  background-color: transparent;
  padding: 0.75rem;
  color: green;
  margin-top: 1rem;
  cursor: pointer;
  &:hover {
    background-color: green;
    color: white;
  }
`;

const Layout = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin: auto;
  width: 85%;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    &:nth-child(2) {
      margin-top: 3rem;
    }
  }
`;

const CartItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
`;
