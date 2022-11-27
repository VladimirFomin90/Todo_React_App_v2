import { FaClipboardList } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { BsCheckLg } from "react-icons/bs";
import styles from "./Todo.module.css";

function Todo({ todo, deleteTodo, toggleTodo }) {
    return (
        <div
            className={`${styles.todo} ${
                todo.isCompleted ? styles.completedTodo : ""
            }`}
        >
            <FaClipboardList className={styles.todoIcon} />
            <div className={styles.todoText}>{todo.text}</div>
            <MdDeleteForever
                className={styles.deleteIcon}
                onClick={() => deleteTodo(todo.id)}
            />
            <BsCheckLg
                className={styles.checkIcon}
                onClick={() => toggleTodo(todo.id)}
            />
        </div>
    );
}

export default Todo;
