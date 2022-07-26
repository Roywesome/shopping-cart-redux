import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addToCart, removeItem, decrease } from "../features/shopping/ShoppingSlice";
import TrashIcon from "../assets/icons/trash-outline.svg";
import Plus from "../assets/icons/add-circle-outline.svg";
import Minus from "../assets/icons/remove-circle-outline.svg";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  return (
    <SingleCartItem>
      <CartImage src={cartItem.image} alt={cartItem.name} />
      <div>
        <h5>{cartItem.name}</h5>
        <p>$ {cartItem.price}</p>
      </div>

      <BtnContainer>
        <button onClick={() => dispatch(addToCart(cartItem.id))}>
          <Icon src={Plus} alt="" />
        </button>

        <div>
          <p>Qty: {cartItem.quantity}</p>
        </div>

        {cartItem.quantity > 1 && (
          <button onClick={() => dispatch(decrease(cartItem.id))}>
            <Icon src={Minus} alt="" />
          </button>
        )}

        {cartItem.quantity === 1 && (
          <button onClick={() => dispatch(removeItem(cartItem.id))}>
            <Icon src={TrashIcon} alt="" />
          </button>
        )}
      </BtnContainer>
    </SingleCartItem>
  );
};

export default CartItem;

const SingleCartItem = styled.div`
  border-bottom: 1px solid gray;
  padding: 10px 0;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  &:nth-child(1) {
    border-top: 1px solid gray;
  }
`;

const CartImage = styled.img`
  width: 100px;
  height: auto;
  padding-right: 2rem;
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  button {
    width: 50px;
    margin: 0 20px;
    border: none;
    background-color: #fff;
    cursor: pointer;
  }
`;

const Icon = styled.img`
  width: 1.6rem;
  height: auto;
`;
