import { createStore } from 'redux';
import initialState from './initialState';
import { strContains } from '../utils/strContains';
//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));
export const getAllColumns = ({ columns }) => columns;

export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);
console.log(getListById)

export const getColumnsByList = ({ columns }, listId) => columns.filter(column => column.listId === listId);
console.log('columns:', getColumnsByList)

export const getAllLists = ({ lists }) => lists;

//action creators
export const addColumn = newColumn => ({ type: 'ADD_COLUMN', newColumn });
export const addCard = newCard => ({ type: 'ADD_CARD', newCard});

export const searchUpdate = updateSearchString => ({ type: 'SEARCH_UPDATE', updateSearchString});

export const addList = newList => ({ type: 'ADD_LIST', newList});

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, action.newColumn]};
    case 'ADD_CARD':
      return { ...state, cards: [...state.cards, action.newCard]}; 
    case 'SEARCH_UPDATE':
      return { ...state, searchString: action.updateSearchString};
    case 'ADD_LIST':
      return { ...state, lists: [...state.lists, action.newList]};
    default:
      return state;
  }
};
const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;