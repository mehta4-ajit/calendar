import React from "react";
import Cell from "../atoms/Cell";
export default function CalendarGrid({ matrix, selectedDate }) {
  return (
    <>
      {matrix.map((w, i) => (
        <div key={i} className="cal-row">
          {w.map((d, j) => {
            const s = d === selectedDate.getDate();
            return (
              <Cell key={j} className={`cal-day ${s ? "cal-today" : ""}`}>
                {d || ""}
              </Cell>
            );
          })}
        </div>
      ))}
    </>
  );
}
