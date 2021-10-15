import react from "react";

const Todo = ({ text, setTodo , todos , todo}) => {


    const DeleteHandler = () =>{
        setTodo(todos.filter(el => el.id != todo.id))
    }

    const completehandler = () => {
        setTodo(
            todos.map((item) => {
                if(item.id === todo.id){
                    return{
                        ...item,
                        completed: !item.completed
                    }
                }
                return item;
            })
        )
    }


    return (
        <div className="todo">
            <li className={`todoitem ${todo.completed ? "completed" : ""}`} > {text}</li>
            <button className='complete-btn' onClick={completehandler}> <i className='fas fa-check'></i> </button>
            <button className='trash-btn' onClick={DeleteHandler}><i className='fas fa-trash'></i></button>
        </div>
    )
}


export default Todo;