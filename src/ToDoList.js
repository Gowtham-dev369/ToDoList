import React from "react";

const ToDoList = ({todolist, removeHandler}) => {
    return (
        <div>
            {todolist.map((todo, index) => 
            <div key = {index} >
                <h5 className="btn">{todo} &nbsp; <button onClick={() => removeHandler(index)}>✔</button></h5>
            </div>)} 
        </div>
    );
}

export default ToDoList;