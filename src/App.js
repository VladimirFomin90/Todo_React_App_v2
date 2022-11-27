import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./App.css";
import TodoList from "./components/Todos/TodoList";
import TodoForm from "./components/Todos/TodoForm";
import TodosActions from "./components/Todos/TodosActions";

function App() {
    const [todos, setTodos] = useState([]);

    const addTodoHandler = (text) => {
        const newTodo = {
            text: text,
            isCompleted: false,
            id: uuidv4(),
        };
        setTodos([...todos, newTodo]);
    };

    const deleteTodoHandler = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const toggleTodoHandleer = (id) => {
        setTodos(
            todos.map((todo) => {
                return todo.id === id
                    ? { ...todo, isCompleted: !todo.isCompleted }
                    : { ...todo };
            })
        );
    };

    const resetTodosHandler = () => {
        setTodos([]);
    };

    const deleteCompletedTodosHandler = () => {
        setTodos(todos.filter((todo) => !todo.isCompleted));
    };

    const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

    return (
        <div className="App">
            <h1>Todo App</h1>
            <TodoForm addTodo={addTodoHandler} />
            {!!todos.length && (
                <TodosActions
                    completedTodosExist={!!completedTodosCount}
                    resetTodos={resetTodosHandler}
                    deleteCompletedTodos={deleteCompletedTodosHandler}
                />
            )}

            <TodoList
                todos={todos}
                deleteTodo={deleteTodoHandler}
                toggleTodo={toggleTodoHandleer}
            />

            {completedTodosCount > 0 && (
                <h2>{`У тебя ${completedTodosCount > 1 ? 'выполнены' : 'выполнена'} ${completedTodosCount} ${completedTodosCount > 1 ? 'задачи' : 'задача'}`}</h2>
            )}
        </div>
    );
}

export default App;
