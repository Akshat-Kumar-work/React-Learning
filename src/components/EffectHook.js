import {useEffect, useState } from "react";
function EffectHook (){
    const [text,setText] = useState('');
    function changeHandler(event){
        console.log(text)
        setText(event.target.value)
    }

    //FIRST VARIATION ,isme  har ek render k baad useEffect hook chlega
    // useEffect( ()=>{
    //     console.log("ui rendering done")
    // })

    //second variation , isme bas phle render k baad ek bar chlega , 2nd parameter empty array pass krengy jo show krta hai dependency list
    // useEffect( ()=>{
    //     console.log("ui first rendering done")
    // },[])

    //third variation , isme bas first render p chlega aur jab dependency list change hogi tab chlega
//    useEffect( ()=>{console.log("text value updated")}, [text]);

   //fourth variaton , isme jo listener add ho rkha hoga vo remove hoga aur fir add hoga rendering par
   useEffect( ()=>{
//call back function parameter

    //add event listener
    console.log("listener added") //return k baad y wala code run hoga

    return()=>{
        console.log("listener removed") //use effect m sabse phle return k andar vala code run hoga dependency list change hone par
    }
        },
        //dependency list parameter
        [text] );

    return(
        <div>
            <input type="text" onChange={changeHandler}></input>
        </div>
    )
}



export default EffectHook;