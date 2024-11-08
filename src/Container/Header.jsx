import { useState } from "react";
import "./Header.css";
import data from "../data.json";

export default function Header({ notification, setNotification }) {
  const counter = notification.filter((n) => !n.isRead).length;

  const markedAsRead = () => {
    const marked = notification.map((n) => {
      return { ...n, isRead: true };
    });
    setNotification(marked);
  };

  return (
    <>
      <div className="header">
        <div className="notifications-container">
          <h1 className="title">Notifications</h1>
          <div className="notifications-amount">
            <p>{counter}</p>
          </div>
        </div>
        <p className="mark" onClick={markedAsRead}>
          Mark all as read
        </p>
      </div>
    </>
  );
}
