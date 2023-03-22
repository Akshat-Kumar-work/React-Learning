import { useState } from "react";

function Window(){
  
const[size , updatesize]= useState(window.outerHeight);

function sizeHandler(event){
  updatesize(event.target.value)
}


    return(
        <div>
           <p onResize={sizeHandler}>browser window width is: {size}</p>
        </div>
    )
}

export default Window;