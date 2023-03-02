import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

const initialState = {
  fullBooks: [],
  addBook: {},
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  
  const getOverview = async () => {
    const API_KEY = '0k6rklfEY4YM2cPNAMVynmD9o6nUkD13';

    try {
      const res = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/overview?api-key=${API_KEY}`);
      dispatch({
        type: 'GET_FULL_BOOKS',
        payload: res.data.results.lists,
      }); 
    } catch (error) {
      console.error(error);
    };
  };

  const getAddBook = (objectBook) => {
    dispatch({
      type: 'ADD_BOOK',
      payload: objectBook
    });
  };
  
  const deleteBook = (isbn) => {
    dispatch({
      type: 'DELETE_BOOK',
      payload: isbn
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        fullBooks: state.fullBooks,
        getOverview,
        addBook: state.addBook,
        getAddBook,
        deleteBook
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
