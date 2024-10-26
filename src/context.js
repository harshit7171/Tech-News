//Context API

import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

let api = "https://hn.algolia.com/api/v1/search?";

const initialState = {
  isLoading: false,
  query: "technical",
  nbPages: 0,
  page: 0,
  hits: [],
};

// context creation
const AppContext = React.createContext();

//provider function
const AppProvider = ({ children }) => {
  //useReducer() instead of useState()
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchAPIData = async (url) => {
    dispatch({
      type: "set_loading",
    });
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      dispatch({
        type: "get_stories",
        hits: data.hits,
        nbPages: data.nbPages,
      });
      //   isLoading = false;
    } catch (error) {
      console.log(error);
    }
  };

  const removePost = (storyID) => {
    dispatch({
      type: "remove_post",
      payload: {
        storyID: storyID,
      },
    });
  };

  const searchStory = (word) => {
    word = word === "" ? "technical" : word;
    dispatch({
      type: "search_story",
      newQuery: word,
    });
  };

  const previousPage = (pg) => {
    pg = pg === 0 ? 0 : pg - 1;
    dispatch({
      type: "change_page",
      pg: pg,
    });
  };

  const nextPage = (pg) => {
    pg = pg + 1 === state.nbPages ? 0 : pg + 1;
    dispatch({
      type: "change_page",
      pg: pg,
    });
  };

  useEffect(() => {
    fetchAPIData(`${api}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  return (
    <AppContext.Provider
      value={{ ...state, removePost, searchStory, previousPage, nextPage }}
    >
      {children}
    </AppContext.Provider>
  );
};

//custom hook(returning hook in a custom hook)
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
