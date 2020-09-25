import React,{ useState } from 'react';


function Form(props){
  const [value, setValue] = React.useState('');
  const [tasks, setTasks] = React.useState([""]);
  var array=props.array;

  const handleChange = (event) => {
    setValue(event.target.value);

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setTasks(tasks.concat(value));
    for(var i =0;i<tasks.length;i++)
    console.log(tasks[i]);

    array=tasks;
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Add to list:
        <input type="text" value={value} onChange={handleChange}/>

      </label>
      <input type="submit" value ="add"/>

    </form>

  );



}
  
 
  export default Form;