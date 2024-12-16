import React,{useState} from "react";
import './Todo.css'

const Todo = () =>{
    let [tasks,setTasks]= useState([]); // list of tasks
    let [task,setTask]= useState("");   // input task (currently adding task)

const Addtask =() =>{
    setTasks((currtask) =>{
       return ([...currtask,task]) 
    })
    setTask("");
} 

const Deletetask = (indextodelete) =>{
    setTasks((currtask) =>{
        return currtask.filter((_,index) => index!==indextodelete)
    })
}
return (
    <div>
        <h1>TO-DO-LIST</h1>
    <div className="todo_div">
        <input type="text" value={task} onChange={(e) =>setTask(e.target.value)} />
        <button className="btn" onClick={Addtask}>Add Task</button>
        <ul>
            {tasks.length > 0 ? (
            tasks.map((t,index) =>(
            <li key={index}>
                {t}
                <button className="btn_d" onClick={() =>Deletetask(index)}>Delete Task</button>
            </li>
            
            ))
        ):(<p>no tasks available</p>)
        }
        </ul>
    </div>
    </div>
)   
}

export default Todo;
