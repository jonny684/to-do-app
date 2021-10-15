import react from "react";
import Todo from "./todo";

const Thelist = ({ todos, setTodo}) => {

    console.log(todos)
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map(todo => (<Todo todos={todos} setTodo={setTodo}  text={todo.text} key={todo.id} setTodo={setTodo} todo={todo} />))}
            </ul>
        </div>
    )
}


export default Thelist;