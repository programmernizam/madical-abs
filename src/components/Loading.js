import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 justify-items-center content-center">
      <div
        style={{ borderTopColor: "transparent" }}
        className="w-16 h-16 border-4 border-blue-400 border-double rounded-full animate-spin"
      ></div>
    </div>
  );
};

export default Loading;
