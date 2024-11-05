import { useState } from "react";
// import "./Reset.css";
import "./App.css";
import Header from "./Container/Header/";
import Main from "./Container/Main/";
import data from "./data.json";

function App() {
  const [back, setBack] = useState(data);
  const [counter, setCounter] = useState(0);
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
