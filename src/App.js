 import ItemDate from './components/ItemDate.js';
 import Item from './components/Item.js';
import Card from './components/Card.js';
function App() {

  const response = [
   
    {
      itemname:"nirma",
      Date:"20",
      month :"june",
      year:"1998"

    },

    {
      itemname:"tide",
      Date:"20",
      month :"june",
      year:"1998"

    },

    {
      itemname:"surf excel ",
      Date:"20",
      month :"june",
      year:"1998"

    },



  ]
  return ( 
    
    //hamesha return karty hue ek single element k andar hona chaie sara code
    <div>


    <Card>

    <Item name={response[0].itemname} > item name ka children hu m</Item>
    <ItemDate day={response[0].day} month={response[0].month} year={response[0].year}></ItemDate>

    <Item name={response[1].itemname}></Item>
    <ItemDate day={response[1].day} month={response[1].month} year={response[1].year}> </ItemDate>

    <Item name={response[2].itemname}></Item>
    <ItemDate day={response[2].day} month={response[2].month} year={response[2].year}></ItemDate>
    

    </Card>
    
    

    </div>
    
   
  );
} 

export default App;
