import React from "react";
import { useGlobalContext } from "./context";

const Pagination = () => {
  const { page, nbPages, previousPage, nextPage } = useGlobalContext();
  return (
    <>
      <div className="pagination-btn">
        <button
          onClick={() => {
            previousPage(page);
          }}
        >
          PREV
        </button>
        <p>
          Page {page + 1} of {nbPages}
        </p>
        <button
          onClick={() => {
            nextPage(page);
          }}
        >
          NEXT
        </button>
      </div>
    </>
  );
};

export default Pagination;
