import React, { useContext } from 'react';
import { PRODUCTS } from '../components/Database/Database';
import { ShopContext } from '../components/Contextprovider';
import { CartItem } from './CartItem';
import "./style.css";
import { useNavigate } from 'react-router-dom'


export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1><u>Your Cart Items</u></h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p className='subtotal'> Subtotal: &#8377; {totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button onClick={() => {checkout();navigate("/checkout");}}> Proceed To Checkout </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};

