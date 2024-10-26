import React from "react";
import { useGlobalContext } from "./context";

const Search = () => {
  const { searchStory } = useGlobalContext();
  return (
    <>
      <h1>Tech Samachar</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            type="text"
            placeholder="Search here"
            onChange={(e) => searchStory(e.target.value)}
          />
        </div>
      </form>
    </>
  );
};

export default Search;
