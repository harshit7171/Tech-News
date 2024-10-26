// import React from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "get_stories":
      return {
        ...state,
        hits: action.hits,
        nbPages: action.nbPages,
        isLoading: false,
      };
    case "set_loading":
      return {
        ...state,
        isLoading: true,
      };
    case "remove_post":
      return {
        ...state,
        hits: state.hits.filter((currStory) => {
          return currStory.objectID !== action.payload.storyID;
        }),
      };
    case "search_story":
      return {
        ...state,
        page: 0,
        query: action.newQuery,
      };
    case "change_page":
      return {
        ...state,
        page: action.pg,
      };
    default:
      return state;
  }
};

export default reducer;
