import React, { useState } from "react";
import check from "./Images/check.png";

const Item = (props) => {
     
     const itemName = props.itemName;
     const [done, setDone] = useState(false);


    
     return(
         
        <div>
            
        {!done ? (
            <div>
                <h2> {itemName}
                 <button onClick ={()=>{setDone(true)}}>Check Off?</button>
                 </h2>

            </div>
        ) : (

            <div>
                <h2> {itemName} 
                 <img src = {check} alt="Check" width="40" height = "40" /><button onClick ={()=>{setDone(false)}}>Undo</button>
                 </h2>

            </div>


        
        )
    
    
    
    }




    </div>
     );



};

export default Item;