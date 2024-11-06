import "./Main.css";
import data from "../data.json";
import { useState, useEffect } from "react";

export default function Main({ setAmount, amount }) {
  const [count, setCounter] = useState(
    data.filter((d) => {
      return d.isRead === false.length;
    })
  );

  return (
    <>
      <div className="main-container">
        {data.map((d, index) => (
          <div
            key={index}
            className="sub-container"
            style={d.isRead ? null : { backgroundColor: "green" }}
            onClick={() => {
              if (index <= 2 && amount > 0 && amount < 4 && !d.isRead) {
                setAmount(amount - 1);
                d.isRead = true;
              }
            }}
          >
            <img
              src={d.profilePicture}
              alt="Profile picture"
              className="profile-picture"
            />
            <div className="info">
              <strong className="person">{d.person}</strong>
              <span className="action">{d.action}</span>
              <span className="event">{d.event}</span>
              {d.isRead ? "" : <div className="unread-mark"></div>}
              <p className="time">{d.time}</p>
            </div>
            {d.text ? (
              <div className="text-container">
                <p>{d.text}</p>
              </div>
            ) : (
              ""
            )}
            {d.asidePicture ? (
              <img src={d.asidePicture} alt="Chess" className="aside-picture" />
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </>
  );
}
