import React,{useState} from "react";

const Counter =() =>{
    let [num,setNum]= useState(0);

const handleincrement = () =>{
    setNum((currvalue)=>{
        return currvalue+1;
    })
}
const handledecrement = () =>{
    setNum((currvalue)=>{
        return currvalue-1;
    })
}

const handlereset =() =>{   
    setNum((currvalue)=>{   //setNum(0)
        return 0;
    })
}


return(
    <div>
        <h1>{num}</h1>
        <button onClick={handleincrement}>Increment</button>
        <button onClick={handledecrement}>Decrement</button>
        <button onClick={handlereset}>Reset</button>
    </div>
);
};

export default Counter;