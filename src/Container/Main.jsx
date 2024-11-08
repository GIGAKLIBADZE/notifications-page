import "./Main.css";
import data from "../data.json";
import { useState, useEffect } from "react";

export default function Main({ notification, setNotification }) {
  return (
    <>
      <div className="main-container">
        {notification.map((n, index) => (
          <div
            key={index}
            className={index === 4 ? "fourth-container" : "sub-container"}
            style={{
              ...(n.isRead ? {} : { backgroundColor: "#f7fafd" }),
              ...(index === 3 ? { display: "block" } : {}),
              ...(index === 4 ? { alignItems: "center" } : {}),
              ...(index === 0 ? { marginTop: "0" } : {}),
            }}
            onClick={() => {
              const newNotifications = notification.map(
                (currentNotification) => {
                  if (n.id === currentNotification.id) {
                    return {
                      ...currentNotification,
                      isRead: true,
                    };
                  }
                  return currentNotification;
                }
              );

              setNotification(newNotifications);
            }}
          >
            <div className="specific-container">
              <img
                src={n.profilePicture}
                alt="Profile picture"
                className="profile-picture"
              />
              <div className="info">
                <strong className="person">{n.person}</strong>
                <span className="action">{n.action}</span>
                <span
                  // className="event"
                  className={
                    index === 2 || index === 6
                      ? "special-event"
                      : index === 0 || index === 5
                      ? "alternate-event"
                      : "event"
                  }
                  // style={
                  //   index === 2 || index === 6
                  //     ? {
                  //         color: "#0a327b",
                  //         fontSize: "14px",
                  //         fontWeight: "bold",
                  //         lineHeight: "normal",
                  //         marginLeft: "5.5px",
                  //       }
                  //     : index === 0 || index === 5
                  //     ? {
                  //         color: "#5e6778",
                  //         fontSize: "14px",
                  //         fontWeight: "bold",
                  //         lineHeight: "normal",
                  //         marginLeft: "4px",
                  //       }
                  //     : {}
                  // }
                >
                  {n.event}
                </span>
                {n.isRead ? "" : <div className="unread-mark"></div>}
                <p className="time">{n.time}</p>
              </div>
            </div>

            {n.text ? (
              <div
                className="text-container"
                style={{ marginLeft: "51px", marginTop: "12px" }}
              >
                <p>{n.text}</p>
              </div>
            ) : (
              ""
            )}
            {n.asidePicture ? (
              <img src={n.asidePicture} alt="Chess" className="aside-picture" />
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </>
  );
}
