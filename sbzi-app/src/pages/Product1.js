import React, { useContext } from 'react';
import { ShopContext } from '../components/Contextprovider';
import { Link } from 'react-router-dom';
import "./style.css";


export const Product1 = (props) => {
const { id, name, price, image, Category } = props.data
const { addToCart, cartItems } = useContext(ShopContext);
if(props.Cat === Category){

  return (
    <>
    <div className='container'style={{paddingLeft:"150px"}}>
      <div className='col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-2'>
        <div className='card'>
          <div className='fill'>
            <Link to={image} target='blank'><img className='card-img-top' src={image} alt="photos" style={{ width: "100%", overflowY: "hidden" }} /></Link>
          </div>
          <div className='card-body'>
            <h6 className='card-titile'>{name}</h6>
            <p class='card-text'> &#8377; {price}/kg</p>
            <p className='card-text'> </p>
            <button className='addToCartbttn btn btn-primary btn-outline-dark' style={{ marginLeft: "65px",width:'150px' }} onClick={() => addToCart(id)}>{(cartItems[id] > 0) ?  cartItems[id]: "Add to cart"}</button>

            {/* Add To Cart{cartItemAmount > 0 && <> + {cartItemAmount}  */}
          </div>
        </div>
      </div>
    </div>
    </>
 
  )
  }
}
