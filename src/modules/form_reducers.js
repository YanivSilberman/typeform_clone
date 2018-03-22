/*

REDUCERS HANDLING FORM INPUT / SELECTION DATA
AND OPTIONS

*/

import candidates from './data/candidates'
import getOptions from './data/options'
let defaultOptions = getOptions();

export default function reducer(
  state = {
    nameValue: "",
    selectedCandidates: [],
    optionsCandidates: {
      byIds: defaultOptions.byIds,
      allIds: defaultOptions.allIds,
    },
    topCandidates: candidates,

  },
  action
) {
  switch (action.type) {

    case "REMOVE_OPTION":
      return {
        ...state,
        selectedCandidates: state.selectedCandidates.filter(item => item !== action.payload)
      };
      break;

    case "ADD_OPTION":
      let index = state.selectedCandidates.findIndex(el => el == action.payload);

      if(index == -1)
          return {
            ...state,
            selectedCandidates: state.selectedCandidates.concat(action.payload)
          };
      return state;
      break;

    case "UPDATE_NAME":
      return {
        ...state,
        nameValue: action.payload
      };
      break;

    case "UPDATE_NAME_VALUE":
      return {
        ...state,
        nameValue: action.payload
      };
      break;

    default:
      return state;
  }

  return state;
}
