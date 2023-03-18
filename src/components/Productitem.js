import {useState} from 'react';

import Card from './Card.js';
import ProductDate from './Productdate.js';
import './Productitem.css';


const Productitem = (props)=>{


const amount = props.amount;
 

const [title,updateTitle] = useState(props.title);

// state , updateTitle vala function call hone par sbse phle updateTitle se  title variable m value update krwata hai aur fir re-render krwata hai component ko jis se value user interface par bhi update hojaegi
function clickHandler(){
    console.log("clicked on button");   
    updateTitle("value ui par agyi");
    console.log("value for title is updated")
}
 
    return(
        
        <Card className='product-item'>

        <ProductDate date={props.date}/>

        <div className='product-item-decription'>
            <h2>{title}</h2>
        </div>

        <div>{amount}</div>

        <button onClick={clickHandler}>click to change title</button>
            
        
        </Card>
        
    );
}


export default Productitem;