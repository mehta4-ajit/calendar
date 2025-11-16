import React from "react";
import Cell from "../atoms/Cell";
import { WEEK_DAYS } from "../../utils/calendarUtils";
export default function CalendarWeekDays() {
  return (
    <div className="cal-row">
      {WEEK_DAYS.map((d) => (
        <Cell key={d} className="cal-weekday">
          {d}
        </Cell>
      ))}
    </div>
  );
}
