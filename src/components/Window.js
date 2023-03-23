import { useEffect, useState } from "react";

function Window(){
  
//use state hook , to render the updated change in ui 
  const [windowSize, setWindowSize] = useState({ width:window.innerWidth,height: window.innerHeight });

function sizeHandler(){
  setWindowSize({width:window.innerWidth,height: window.innerHeight})
}

//jab hum window size m change krengy tab y call hoga
useEffect( ()=>{
 
  //adding event listener 
 window.addEventListener("resize",sizeHandler)

return()=>{

  //removing event listener
  window.removeEventListener("resize",sizeHandler)
}
 
},[setWindowSize])


    return(
      <div>
      <p onResize={sizeHandler}>Window width: {windowSize.width} ,Window height: {windowSize.height} </p>
    </div>
    )
}


export default Window;