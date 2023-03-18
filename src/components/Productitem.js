import React, { useState } from 'react';

import Card from './Card.js';
import ProductDate from './Productdate.js';
import './Productitem.css';


const Productitem = (props)=>{

const amount = props.amount;
 
 
    return(
        
        <Card className='product-item'>

        <ProductDate date={props.date}/>

        <div className='product-item-decription'>
            <h2>{props.title}</h2>
        </div>

        <div>{amount}</div>
            
        
        </Card>
        
    );
}


export default Productitem;