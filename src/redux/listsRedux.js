//selectors
export const getListById = ({ lists }, listId) => lists.find((list) => list.id === listId);
export const getAllLists = ({ lists }) => lists;
//actions
const createActionName = actionName => `app/lists/${actionName}`;
const ADD_LIST = createActionName('ADD_LIST');

// action creators
export const addList = (newList) => ({ type: ADD_LIST, newList });
const listsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_LIST:
      return [...statePart, { ...action.newList }];
    default:
      return statePart;
  }
};
export default listsReducer;