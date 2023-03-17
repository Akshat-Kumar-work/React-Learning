import './ProductForm.css';
import {useState} from 'react';



function ProductForm(){

   const [title,setTitle] = useState('');
   const [date,setDate] = useState('');

    // this event  Object contain many info about the event occuring 
    function titleChangeHandler(event){
       // console.log(event.target.value)
        setTitle(event.target.value)
    }

    function dateChangeHandler(event){
       // console.log(event.target.value);
        setDate(event.target.value)

      
    }
    return(
       <form>

        
        <div className="new-product-title">
        <label>Title</label>
        <input type='text' onChange={titleChangeHandler}></input>
        </div>
      
        <div className="new-product-date">
        <label>Date</label>
        <input type='date' onChange={dateChangeHandler} min='2023-01-01' max='2023-12-12'></input>
        </div>
        
        <div className="new-product-button">
            <button type='submit'>Add product</button>
        </div>
      

       </form>
        )
    
}

export default ProductForm;     