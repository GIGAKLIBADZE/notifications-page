import { useState, useEffect } from "react";
// import "./Reset.css";
import "./App.css";
import Header from "./Container/Header/";
import Main from "./Container/Main/";
import data from "./data.json";

function App() {
  // const [back, setBack] = useState("#fffff");
  const [amount, setAmount] = useState(3);
  const [count, setCounter] = useState(0);
  return (
    <>
      <Header amount={amount} setAmount={setAmount} />
      <Main
        amount={amount}
        setAmount={setAmount}
        // back={back}
        // setBack={setBack}
      />
    </>
  );
}

export default App;
