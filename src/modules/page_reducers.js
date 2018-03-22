/*

REDUCERS HANDLING PAGE HEIGHT AND scrollTop

*/

export default function reducer(
  state = {
    pageHeight: 500,
    page: 0,
  },
  action
) {
  switch (action.type) {

    case "UPDATE_PAGE":
      return {
        ...state,
        page: action.payload,
      }
      break;

    case "UPDATE_PAGE_HEIGHT":
      return {
        ...state,
        pageHeight: action.payload
      };
      break;


    default:
      return state;
  }

  return state;
}
