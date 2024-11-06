import { useState } from "react";
import "./Header.css";
import data from "../data.json";

export default function Header({ amount, setAmount }) {
  function resetNotificationsAmount() {
    setAmount(0);
    data.map((d) => (d.isRead = true));
  }
  return (
    <>
      <div className="header">
        <div className="notifications-container">
          <h1 className="title">Notifications</h1>
          <div className="notifications-amount">
            <p>{amount}</p>
          </div>
        </div>
        <p className="mark" onClick={resetNotificationsAmount}>
          Mark all as read
        </p>
      </div>
    </>
  );
}
