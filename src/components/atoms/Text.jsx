import React from "react";
export default function Text({ children, className = "", ...p }) {
  return (
    <div className={`text ${className}`} {...p}>
      {children}
    </div>
  );
}
