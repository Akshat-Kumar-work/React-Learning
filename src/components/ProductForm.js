import './ProductForm.css';
import {useState} from 'react';



function ProductForm(props){

   const [newtitle,setTitle] = useState('');
   const [newdate,setDate] = useState('');

    // this event  Object contain many info about the event occuring 
    function titleChangeHandler(event){
       // console.log(event.target.value)
       setTitle(event.target.value)  //jispe event lga hua hai uss element ki value ko pass kar rhe hai
    }

    function dateChangeHandler(event){
       // console.log(event.target.value);
         setDate(event.target.value)
    }

    function submitHandler(event){
        event.preventDefault();

        const productData = {
            title:newtitle,
            date:newdate,
        };

        //console.log(productData)
        props.onsaveProduct(productData)
        setTitle('')
        setDate('')
    }
    return(
       <form onSubmit={submitHandler}>

        
        <div className="new-product-title">
        <label>Title</label>
        <input type='text' value={newtitle} onChange={titleChangeHandler}></input>
        </div>
      
        <div className="new-product-date">
        <label>Date</label>  
        <input type='date' value={newdate} onChange={dateChangeHandler} min='2023-01-01' max='2023-12-12'></input>
        </div>
        
        <div className="new-product-button">
            <button type='submit'>Add product</button>
        </div>
      

       </form>
        )
    
}

export default ProductForm;     
