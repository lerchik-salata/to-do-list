
import './App.css';
import {useState} from "react";
import Form from '../Form/Form'
import Todo from '../Todo/Todo'
import Empty from "../Empty/Empty";

function App() {
    const [todos, setTodos] = useState([])

    const putTodo = (value) => {
        if (value && value.trim() !== '') {
            setTodos([...todos, {id: Date.now(), text:value, done:false}]);
        } else {
            alert("Please enter text!");
        }
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo => {
            if (todo.id !== id) return todo;

            return {
                ...todo,
                done: !todo.done
            }
        }))
    }

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <div className="wrapper">
            <div className="container">
                <h1 className="title">TODO LIST</h1>
                <Form putTodo={putTodo} />
                {todos.length > 0 ? (
                    <ul className={todos}>
                        {todos.map(todo => (
                            <Todo
                                key={todo.id}
                                todo={todo}
                                toggleTodo={toggleTodo}
                                removeTodo={removeTodo}
                            />
                        ))}
                    </ul>
                ) : (
                    <Empty/>
                )}
            </div>
        </div>
    );
}

export default App;
