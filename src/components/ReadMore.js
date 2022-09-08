import React, { useState } from "react";

const ReadMore = ({ limit, children }) => {
  const [isShowReadMore, setIsShowReadMore] = useState(false);
  const text = children;
  const handleBtn = () => {
    setIsShowReadMore((prevState) => !prevState);
  };
  return (
    <div>
      <p className="text-justify">
        {isShowReadMore ? text : text.slice(0, limit)}
      </p>
      <button onClick={handleBtn} className="text-semibold text-blue-500">
        {isShowReadMore ? "show less" : "read more..."}
      </button>
    </div>
  );
};

export default ReadMore;
