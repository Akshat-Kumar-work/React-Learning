import React, { useState } from 'react';

import Card from './Card.js';
import ProductDate from './Productdate.js';
import './Productitem.css';


const Productitem = (props)=>{

const amount = props.amount;
 


const [title,setTitle]=useState(props.title)

const clickHandler = ()=>{
    console.log("clicked on button")
    setTitle("popcorn")
}

 
    return(
        
        <Card className='product-item'>

        <ProductDate date={props.date}/>

        <div className='product-item-decription'>
            <h2>{title}</h2>
        </div>

        <div>{amount}</div>
            
        <button onClick={clickHandler}>add to cart</button>
        </Card>
        
    );
}


export default Productitem;