
function Child(props){

        //object jo pass hoga function m jo mila hai parent component se
        //humne yaha object bnaya hai jiske andar ek value naam ka variable hai
        const childObj = {
                value:"i am an object of child component"
        }


        // function m object ko pass kar rhe hai ,argument variable m function ko store kar rhe hai
        //ab hum ek argument naam k variable m jo function hume parent component sy mila  hai usko dalenge aur uss function m humne uppr jo object bnaya vo pass kardenge
       const argument= props.objectfunc(childObj)
        
return(
        // using value passes through parent to child component
        //<p>{props.childname}</p>


        //function ko object k sath return kar rhe hai
        //ab argument variable jiske andar function hai object k sath usko hum return kar rhe hai
        argument

)
}

export default Child;