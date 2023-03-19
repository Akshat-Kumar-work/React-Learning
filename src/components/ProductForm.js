import './ProductForm.css';
import { useState } from 'react';
function ProductForm(){


    // it is handling multiple state by creating diff state for each event
    const[newtitle,setTitle] = useState('')
    const[newdate,setDate] = useState('') 

    function titlechangeHandler(event){
       // console.log("title change hora hai")
       // console.log(event.target.value) //isme single character track hore hai , jo change hore hai input m
       setTitle(event.target.value);
       //console.log(event.target.value)
    }

    function datechangeHandler(event){
        setDate(event.target.value);
       // console.log(event.target.value)
    }

    function submitHandler(event){
        event.preventDefault() /* toh hum chahte hai ki submit hone par jo values hai vo ek object m chli jaye toh uske lie btn ka default behaviour htana pdega */

        //it is an object in which values which is entered by user is stored
        const productData = {
            title:newtitle, //putting title state value
            date:newdate //putting date state value
        }
        
        //console m object print kro jisme data hai
        console.log(productData);

        // value print hone k baad user interface aur variable ko empty krdo
      setTitle('');
      setDate('');
    }
   

    return(
        // jab form ko submit kia jaega submitHandler call ho jaega
        <form className="form" onSubmit={submitHandler}>

        <div className='new-product__controls'>
            

            {/* for title */}
            <div className='new-product__controls '>
                <label> Title </label>
                {/* here value={newtitle} is linking the input tab value to newtitle value */}
                <input type='text' onChange={titlechangeHandler} value={newtitle}></input>
            </div>

            {/* for date */}
            <div className='new-product__controls'>
            <label> Date </label>
            <input type='date' min='2023-01-01' max='2023-12-12' onChange={datechangeHandler} value={newdate}></input>
            </div>

            {/* for button */}
            
            <div className='new-product_button'>
            <button type='submit'>Submit</button>

            </div>

        </div>
            



        </form>
    )
}

export default ProductForm;