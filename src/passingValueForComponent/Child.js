
function Child(props){
return(
        // using value passes through parent to child component
        <p>{props.childname}</p>
);
}

export default Child;