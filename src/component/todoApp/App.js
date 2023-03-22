import "../style/App.css";
import { useState } from "react";

const App = () => {
  const [input1, setInput1] = useState("");
  const button1 = () => {
    console.log("input 1", input1);
  };
  return (
    <div>
      <div style={{ margin: "10px 10px 10px 0px" }}>
        <input id="input1" onChange={(val) => setInput1(val.target.value)} />
        <button onClick={button1}>Click Me1!</button>
      </div>
    </div>
  );
};

export default App;
