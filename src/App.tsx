import axios from "axios";
import "./App.css";

function App() {
  const onClickFetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
      console.log(response);
    });
  };

  return (
    <>
      <button onClick={onClickFetchData}>JSONデータ取得</button>
    </>
  );
}

export default App;
