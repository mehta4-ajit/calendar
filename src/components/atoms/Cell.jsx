import React from "react";
export default function Cell({ children, className = "", ...p }) {
  return (
    <div className={`cell ${className}`} {...p}>
      {children}
    </div>
  );
}
