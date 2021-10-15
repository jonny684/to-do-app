import react from "react";

const TheForm = ({ setInputtext, setTodo, todos, inputText}) =>{

    // js funtion to add 

    const inputTextHandler = (e) =>{
        console.log(e.target.value)
        setInputtext(e.target.value)
    }

    const SubmitTodoHander =(e) =>{
        e.preventDefault();
        setTodo([
            ...todos, { text: inputText, completed:false, id:Math.random()*1000}
        ])
        setInputtext("")
    }


    return(
        <form>
            <input onChange={inputTextHandler} type="text" className="todo-input" value={inputText}/>
            <button className="todo-button" type="submit" onClick={SubmitTodoHander} >
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}


export default TheForm;