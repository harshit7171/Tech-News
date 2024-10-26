import React from "react";
import Search from "./search.js";
import Pagination from "./Pagination";
import Stories from "./Stories";
import "./App.css";

const App = () => {
  return (
    <div>
      <Search />
      <Pagination />
      <Stories />
    </div>
  );
};

export default App;
