import React from "react";
import { useState } from "react";
import styles from'../Todo.module.css'


const Todoitems = ({pros,onDelete}) =>  {
    const [isCompleted,setIsCompleted] =useState(pros.isCompleted)
    return(
        <div key={pros.id}  className={styles.TodoList}>
            
        <input className={styles.checkbox} type="checkbox" 
          checked={isCompleted} 
          onChange ={(e) =>{
              setIsCompleted(e.target.checked)
          }}/>
        <div className={isCompleted ? styles.textDecoration: ""} >{pros.value}</div>
        {/* <button onClick={()=> onDelete(pros.id) }>🗑️</button> */}
    
    </div>
    
)} ;

export{Todoitems}