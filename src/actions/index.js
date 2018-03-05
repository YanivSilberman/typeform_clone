export function addDescription(option){
  return {
    type: "ADD_OPTION",
    payload: option
  };
}

export function removeDescription(option){
  return {
    type: "REMOVE_OPTION",
    payload: option
  }
}

export function pickCandidate(){

}


export function updateHowAreYou(pick) {
  return {
    type: "UPDATE_HOW_ARE_YOU",
    payload: pick
  };
}
export function updateName(name) {
  return {
    type: "UPDATE_NAME",
    payload: name
  };
}

export function updatePage(page) {
  return {
    type: "UPDATE_PAGE",
    payload: page
  };
}


export function updatePageHeight(height) {
  return {
    type: "UPDATE_PAGE_HEIGHT",
    payload: height
  };
}
