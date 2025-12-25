import axios from "axios";
import { useState } from "react";
import { Todo } from "./Todo";
import "./App.css";

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);

  //stateの型定義
  type TodoType = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };

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
