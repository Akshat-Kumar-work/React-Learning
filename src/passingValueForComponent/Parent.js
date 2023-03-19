import Child from "./Child";

function Parent (){

   //function which is passed to child component to get an object from it
   //ek function bnaya jiske parameter m object hai jo print hoga console m
   function printobject (object){
      console.log(object);
   }

   return(

      // passing value to child component, communication from parent to child component
    //<Child childname="this statement is passes through parent to child component using props"/>

    //passing a func to child to get a argument from it using props
    //child component m objectfunc naam ki property pass kar rhe hai jiske andar printobject naam ka function hai
    <Child objectfunc={printobject}></Child>


   );
}

export default Parent;