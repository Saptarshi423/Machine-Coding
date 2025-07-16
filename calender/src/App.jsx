import { useState, useMemo } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { format, startOfMonth, lastDayOfMonth } from "date-fns";

const Days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Events = [
  {
    title: "Create YT video on Trasactional Outbox pattern",
    date: "07/01/2025",
    identifier: "blue",
  },
  {
    title: "Do offer nego with Google",
    date: "07/15/2025",
    identifier: "red",
  },
  {
    title: "Watch lorem ipsum series",
    date: "07/19/2025",
    identifier: "green",
  },
  {
    title: "Bhai ki breakup party",
    date: "07/25/2025",
    identifier: "yellow",
  },
  {
    title: "Watch shaka laka boom boom",
    date: "08/19/2025",
    identifier: "red",
  },
  {
    title: "Create YT video on Kafka vs Message Queue",
    date: "06/05/2025",
    identifier: "blue",
  },
  {
    title: "Bhai ki breakup party",
    date: "06/29/2025",
    identifier: "yellow",
  },
  {
    title: "Watch shaka laka boom boom",
    date: "06/19/2025",
    identifier: "red",
  },
  {
    title: "Create YT video on database to choose",
    date: "06/05/2025",
    identifier: "blue",
  },
];

function App() {
  return (
    <>
      <Calender events={Events} />
    </>
  );
}

const Calender = ({ events }) => {
  const date = new Date();
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());

  const handlePrev = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNext = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const eventsMapper = useMemo(() =>
    events.reduce(
      (acc, event) => {
        //console.log(acc);
        acc[format(new Date(event.date), "yyyy-MM-dd")] = event;
        return acc;
      },
      [events]
    )
  );

  return (
    <>
      <div className="container">
        <div className="header">
          <div className="left-btn">
            <button onClick={handlePrev}>◀</button>
          </div>
          <div>
            {month + 1}/{year}
          </div>
          <div className="right-btn">
            <button onClick={handleNext}>▶</button>
          </div>
        </div>

        <Event eventsMapper={eventsMapper} month={month} year={year} />
      </div>
    </>
  );
};

const Event = ({ eventsMapper, month, year }) => {
  const today = new Date();
  const firstDateOfMonth = startOfMonth(today);
  const lastDateOfMonth = lastDayOfMonth(today).getDate();
  const firstDay = new Date(firstDateOfMonth).getDay();
  console.log({firstDateOfMonth, lastDateOfMonth, firstDay, today});
  return (
    <div className="days-container">
        {Days.map((day, index) => {
          return (
            <div key={index} className="day">
              {day}
            </div>
          );
        })}
        {Array.from({ length: firstDay }, (_, index) => (
          <div key={index} className="day empty"></div>
        ))}
        {Array.from({ length: lastDateOfMonth }, (_, index) => {
          const date = new Date(year, month, index + 1);
          const formattedDate = format(date, "yyyy-MM-dd");
          const event = eventsMapper[formattedDate];
          return (
            <div key={index} className="day">
              <div className="date">{index + 1}</div>
              {event && (
                <div className={`event ${event.identifier}`}>
                  {event.title}
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default App;
