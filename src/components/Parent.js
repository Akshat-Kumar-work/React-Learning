import Child from "./Child";

const Parent = ()=>{

    const getData = () =>{

    };
   
   
    return(

        <div>

        {/* passing value from parent component to child component using props */}
        <Child passingtochild={"child component k lie jo value pass kari thi vo hu m"}  
        onChange={getData} ></Child>
        
       

        </div>
        
        
    );
}

export default Parent;