import './App.css';
import List from './components/item'; //importing List component from a item file present in component folder
import Products from './components/products';
function App() {



  //ek array k andar object bna rkhe hai usme listname aur listdate ki values hai
  const response = [
    {
      listname:"grocery list",
      listdate:"14 march 23"
    },
    {
      listname:"shopping list",
      listdate:"23 march 23"
    }

  ];


//products name array having following values
  const products = [

    {
      id: 'p1',
      title:'Nirma',
      amount : 100,
      date: new Date(2021,8,10),
    },

    {
      id: 'p2',
      title:'surf excel',
      amount : 200,
      date: new Date(2021,2,2),
    },

    {
      id: 'p3',
      title:'Tide',
      amount : 130,
      date: new Date(2021,12,28),
    },

    {
      id: 'p4',
      title:'ariel',
      amount : 450,
      date: new Date(2021,5,5),

    }

  ];




  return ( 
    
    //hamesha return karty hue ek single element k andar hona chaie sara code
    <div>

  
  {/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/ }
 
 {/* list component m jo naam property hai usme response naam  k array m jo 0th aur 1th index par object hai usko daldo  */}

  <List 
   name={response[0].listname}
   date={response[0].listdate} >
   {/* , jo hum content dalty hai component k andar vo by default visible nahi hota 
   usko visible krane k lie hume {props.children} ko return krwana pdega component m */}
     item first 
   </List>


  <List 
  name={response[1].listname}
   date={response[1].listdate} >
   </List>




   
    <List name="avnish"></List>  {/* yaha humne List component ki properties ko pass kiya  hai  */}
    <List name="rohan"></List>
    <List name="wil"></List>

    <List date="1 march 23"></List>
<div className="App">
       hello ji
      </div>
  {/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/ }

  {/* passing products through items to Products component */}
   <Products items={products}  ></Products>


    </div>
    
   
  );
}

export default App;
