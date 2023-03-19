import Child from "./Child";

function Parent (){

   return(

      // passing value to child component, communication from parent to child component
    <Child childname="this statement is passes through parent to child component using props"/>
   );
}

export default Parent;