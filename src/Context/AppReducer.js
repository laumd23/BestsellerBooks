const books = (state, action) => {
  switch (action.type) {
    case 'GET_FULL_BOOKS':
      return {
        ...state,
        fullBooks: action.payload
      };
    case 'ADD_BOOK':
      return {
        ...state,
        addBook: action.payload,
      };
    case 'DELETE_BOOK':
      const filterBooks = state.fullBooks.map(category => {
        const categories = {
          list_name: category.list_name,
          books: category.books.filter(book => book.primary_isbn10 !== action.payload)
        }
        return categories;
      } )
      return {
        ...state,
        fullBooks: filterBooks
      };
    default:
      return state;
  };
};

export default books;
