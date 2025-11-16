import React, { useState } from "react";
import Calendar from "./components/organisms/Calendar/Calendar";

export default function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="date"
          value={selectedDate.toISOString().split("T")[0]}
          onChange={(e) => setSelectedDate(new Date(e.target.value))}
        />
      </div>
      <h2>Selected Date on calendar</h2>
      <Calendar date={selectedDate} />
    </div>
  );
}
