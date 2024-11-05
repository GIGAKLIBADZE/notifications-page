import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [amount, setAmount] = useState(0);
  return (
    <>
      <h1>Notifications</h1>
      <div className="notifications-amount">{amount}</div>
      <p className="mark">Mark all as read</p>
    </>
  );
}
