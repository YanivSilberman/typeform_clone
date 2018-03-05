import candidates from './candidates'
import getOptions from './options'
let defaultOptions = getOptions();

export default function reducer(
  state = {
    nameValue: "",
    selectedDescribeCandidate: [],
    optionsDescribeCandidate: {
      byIds: defaultOptions.byIds,
      allIds: defaultOptions.allIds,
    },
    topCandidates: candidates,

    pageHeight: 300,
    page: 1,

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

    case "REMOVE_OPTION":
      return {
        ...state,
        selectedDescribeCandidate: state.selectedDescribeCandidate.filter(item => item !== action.payload)
      };
      break;

    case "ADD_OPTION":
      let index = state.selectedDescribeCandidate.findIndex(el => el == action.payload);

      if(index == -1)
          return {
            ...state,
            selectedDescribeCandidate: state.selectedDescribeCandidate.concat(action.payload)
          };
      return state;
      break;

    case "UPDATE_NAME":
      return {
        ...state,
        nameValue: action.payload
      };
      break;

    case "UPDATE_PAGE_HEIGHT":
      return {
        ...state,
        pageHeight: action.payload
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
