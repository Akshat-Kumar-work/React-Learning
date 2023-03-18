import { useState } from "react";

function Child(props){

        
        console.log("value from parent to child is rendered ");

        // name variable hai jo update karna hai , jiski value startig m " " empty hai  aur setName function ko pass kia hai jo update krega value
        const [name,setName] = useState("");

        // handlechange function setName function ko call karta hai
        function handleChange (event){
            //setName update karta hai value event jis element par lga hai uski
            setName(event.target.value);
        }
    
return(

    <div>

            {/* jo value parent sy ayi hai vo value return kar rhee hai  */}
            {props.passingtochild}


            <input type="text" value={name} onChange={handleChange} /> 

       
    
    </div>
    

    

);
}

export default Child;