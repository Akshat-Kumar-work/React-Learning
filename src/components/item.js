import './item.css';


//List component
function List (props){ //props parameter hai List ki jo app.js m declare hue hai

    // naam ek propety hai list component ki
    const naam = props.name; //jo argument pass hue hai app.js m unko access kar rhe hai 
    const date = props.date;
    
    return(
        <div>

        {naam} {/*using variable values*/ } 
        {date}
        
        {/* by this we can access the content of component */}
        {props.children} 
        {/* <p className="colour"> orange</p> */}
       
        </div>
    
    );

}

export default List;