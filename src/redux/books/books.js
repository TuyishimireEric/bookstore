import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookstore/books/addBook';
const REMOVE_BOOK = 'bookstore/books/removeBook';

const initialState = [];

const addRemoveReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.payload.id,
          description: action.payload.book,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: {
    book,
    id: uuidv4(),
  },
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: {
    id,
  },
});

export default addRemoveReducer;
