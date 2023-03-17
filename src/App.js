//  import ItemDate from './components/ItemDate.js';
//  import Item from './components/Item.js';
// import Card from './components/Card.js';
import Products from "./components/Products";
import NewProduct from "./components/NewProduct";

function App() {

  // const response = [
   
  //   {
  //     itemname:"nirma",
  //     Date:"20",
  //     month :"june",
  //     year:"1998"

  //   },

  //   {
  //     itemname:"tide",
  //     Date:"20",
  //     month :"june",
  //     year:"1998"

  //   },

  //   {
  //     itemname:"surf excel ",
  //     Date:"20",
  //     month :"june",
  //     year:"1998"

  //   },
  // ]


  //product variable bna rkha hai 
  const products = [
  {
    id:'p1',
    title:'Nirma',
    amount:100 + "ruppes",
    date:new Date(2021,8,10),
  },
  {
    id:'p2',
    title:'Surf excel',
    amount:102 + "ruppes",
    date:new Date(2021,8,10),
  },
  {
    id:'p3',
    title:'Tide',
    amount:103  + "ruppes",
    date:new Date(2021,8,10),
  },
  {
    id:'p4',
    title:'ariel',
    amount:104  + "ruppes" ,
    date:new Date(2021,8,10),
  },
  ]; 


  return ( 
    
    //hamesha return karty hue ek single element k andar hona chaie sara code
    <div>


    {/* <Card>

    <Item name={response[0].itemname} >  </Item>
    <ItemDate day={response[0].day} month={response[0].month} year={response[0].year}></ItemDate>

    <Item name={response[1].itemname}></Item>
    <ItemDate day={response[1].day} month={response[1].month} year={response[1].year}> </ItemDate>

    <Item name={response[2].itemname}></Item>
    <ItemDate day={response[2].day} month={response[2].month} year={response[2].year}></ItemDate>
     
    </Card> */}
    
    
    {/* Products components k lie items prop m products pass kardiye */}

    <Products items={products}></Products>


    <NewProduct></NewProduct>
    
    </div>
    
   
  );
} 

export default App;
