// actions
const createActionName = actionName => `app/lists/${actionName}`;
const SEARCH_UPDATE = createActionName('SEARCH_UPDATE');

//action creators
export const searchUpdate = (updateSearchString) => ({ type: SEARCH_UPDATE, updateSearchString });
const searchStringReducer = (statePart = '', action) => {
  switch (action.type) {
    case SEARCH_UPDATE:
      return action.updateSearchString;
    default:
      return statePart;
  }
};
export default searchStringReducer;