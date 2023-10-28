import React from 'react';  
import { Product1 } from './Product1';
import { PRODUCTS } from '../components/Database/Database';
import './style.css';

export const Imported = (props) => {
  let x = "Imported";
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
                    <Product1 data={product} key={index} Cat={x} />
                ))}
            </div>


        </div>
    </>
  )
}
