import React from "react";
import CalendarHeader from "../../molecules/CalendarHeader";
import CalendarWeekDays from "../../molecules/CalendarWeekDays";
import CalendarGrid from "../../molecules/CalendarGrid";
import { getMonthMatrix } from "../../../utils/calendarUtils";
import "../../../styles/Calendar.css";
export default function Calendar({ date }) {
  if (!(date instanceof Date))
    return <div className="cal-error">Invalid date</div>;
  const m = date.toLocaleString("default", { month: "long" });
  const y = date.getFullYear();
  const matrix = getMonthMatrix(date);
  return (
    <div className="calendar">
      <CalendarHeader monthName={m} year={y} />
      <CalendarWeekDays />
      <CalendarGrid matrix={matrix} selectedDate={date} />
    </div>
  );
}
