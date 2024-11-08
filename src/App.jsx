import { useState, useEffect } from "react";
import "./Reset.css";
import "./App.css";
import Header from "./Container/Header/";
import Main from "./Container/Main/";
import data from "./data.json";

function App() {
  const [notification, setNotification] = useState(data);
  return (
    <>
      <Header notification={notification} setNotification={setNotification} />
      <Main notification={notification} setNotification={setNotification} />
    </>
  );
}

export default App;
