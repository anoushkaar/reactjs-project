import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <h1 className="font-bold uppercase flex justify-center items-center">
        Todos:-
      </h1>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button
            onClick={() => dispatch(removeTodo(todo.id))}
            className="bg-black text-white rounded-lg p-4"
          >
            Remove
          </button>
        </li>
      ))}
    </>
  );
}

export default Todos;
