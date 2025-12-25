import axios from "axios";
import { useState } from "react";
import { Todo } from "./Todo";
import type { TodoType } from "./types/todo";
import "./App.css";

function App() {
  //stateに型を定義
  const [todos, setTodos] = useState<TodoType[]>([]);

  // JSONデータ取得
  const onClickFetchData = () => {
    axios
      .get<TodoType[]>("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        //取得したらtodosを更新
        setTodos(response.data);
      });
  };

  return (
    <>
      <button onClick={onClickFetchData}>JSONデータ取得</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </>
  );
}

export default App;
