import React from 'react';  
import { Product } from './Product';
import { PRODUCTS } from '../components/Database/Database';
import './style.css';

export const Home = () => {
  return (
    <>
    
    <div className='Shop'>
            <div className='shoptitle'>
               <br/>
               <br/>
               <br/>
            </div>
            <div className='products'>
                {" "}
                {PRODUCTS.map((product,index) => (
                    <Product data={product} key={index} />
                ))}
            </div>


        </div>
    </>
  )
}
