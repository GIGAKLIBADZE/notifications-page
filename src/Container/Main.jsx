import "./Main.css";
import data from "../data.json";

export default function Main() {
  //   const [counter, setCounter] = useState(0);
  return (
    <>
      {data.map((d) => (
        <div className="main-container">
          <div className="sub-container">
            <img src={d.profilePicture} alt="Profile picture" />
            <strong>{d.person}</strong>
            <span className="action">{d.action}</span>
            <span className="event">{d.event}</span>
            {d.isRead ? "" : <div className="unread-mark"></div>}
            <p className="time">{d.time}</p>
            {d.text ? (
              <div className="text-container">
                <p>{d.text}</p>
              </div>
            ) : (
              ""
            )}
            {d.asidePicture ? (
              <img src={d.asidePicture} alt="Chess" className="asidePicture" />
            ) : (
              ""
            )}
            ;
          </div>
        </div>
      ))}
    </>
  );
}
