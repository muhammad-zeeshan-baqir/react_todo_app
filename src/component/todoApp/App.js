import "../style/App.css";
import { useRef, useState } from "react";
import { Input, Button } from "antd";
import MyTodoList from "./todolist";

const App = () => {
  const myInput = useRef();
  const [getInput, setInput] = useState([]);

  const addValue = () => {
    setInput([...getInput, myInput.current.input.value]);
  };

  return (
    <>
      <Input placeholder="Basic usage" ref={myInput} />;
      <Button type="primary" onClick={addValue}>
        Click!
      </Button>
      <MyTodoList task={getInput} />
    </>
  );
};

export default App;
