import Child from "./Child";

function Parent (){

   return(

      // passing value to child component
    <Child childname="this value is passes through parent to child component using props"/>
   );
}

export default Parent;