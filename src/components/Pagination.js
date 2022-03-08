import React from "react";
import "./Pagination.css";

const Pagination = ({ pages, setCurrentPage }) => {
  return (
    <div className="buttons">
      {Array.from(Array(pages), (item, i) => {
        return (
          <button
            key={i}
            value={i}
            onClick={(e) => setCurrentPage(Number(e.target.value))}
          >
            {i + 1}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
