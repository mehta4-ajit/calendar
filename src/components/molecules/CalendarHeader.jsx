import React from "react";
import Text from "../atoms/Text";
export default function CalendarHeader({ monthName, year }) {
  return (
    <Text className="cal-header">
      {monthName} {year}
    </Text>
  );
}
