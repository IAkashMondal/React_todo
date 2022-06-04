import { useState } from "react";
import{Todoitems} from'./TodoItems'
import styles from "../Todo.module.css"

const Todo = () => {
    let [consoleValue ,setConsoleValue ] = useState("");   // taking the value from input to use in every where

    const [todo,setTodo]=useState([]) ;        //toro empty arr, & pushing data

    const inputValue = (e) => {                //taking value ; 

        setConsoleValue(e.target.value) ;     
    }

    let onDelete = (id) => {
        let newTodo = todo.filter(pros => pros.id !== id)
        setTodo(newTodo)
    }

return(
    <div className={styles.background}>   
        {todo.map((pros)=> (
           <Todoitems key={pros.id} pros={pros} onDelete={onDelete}/>
          
        ))}
        
        <input className={styles.inputt} value={consoleValue} onChange={inputValue} type="text" placeholder="Write Something" />
        <button className={styles.addbt}
            onClick={() => {
                setTodo([
                    ...todo,
                    {id: Date.now(),
                     value: consoleValue ,
                     isCompleted : false
                    }
                ])
                setConsoleValue("");

        }}>+</button>

       
    </div>
)}
export{Todo}