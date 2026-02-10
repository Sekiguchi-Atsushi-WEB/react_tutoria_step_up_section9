import axios from "axios";
import { useState } from "react";
import { Todo } from "./Todo";
import { Text } from "./Text";
import type { TodoType } from "./types/todo";
import { UserProfile } from "./UserProfile";
import type { User } from "./types/user";
import "./App.css";

//UserProfileコンポーネント用のダミーデータ
const user: User = {
  name: "山田太郎",
  hobbies: ["映画鑑賞", "旅行", "読書"],
};

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
      <UserProfile user={user} />
      <Text color="red" fontSize="20px" />
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
