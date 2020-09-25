import React from 'react';
import Item from "./item";
import Form,{tasks} from "./form";

import List from "./list.json";


import './App.css';




function App() {
  
  const Print=(props)=>{
      
    const arr=props.arr;
    for(var i =0;i<arr.length;i++){
      return(
        <Item itemName={arr[i]}/>
      )
    }

}
  
 


  



  return (
    <div className="App">
      <div>
        <h1>To Do List</h1>
          {<Form />}

      </div>
      
      {<Print arr={["Hello","bees"]}/>}


    </div>
  )
  }
export default App;
