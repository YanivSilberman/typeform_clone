/*

SELECT OPTIONS ARE NORMALIZED FOR BETTER
MANAGING CREATE / DELETE OPERATIONS AND OPENING
UP TO POTENTIAL ABSTRACTIONS

*/

let option_list = [
  "Funny",
  "Creative",
  "Action-oriented",
  "Intelligent",
  "Ambitious",
  "Autonomous",
  "Leader",
  "Lean",
  "Mean",
  "Fighting Machine"
];

export default function getOptions(){
  let byIds = {}, allIds = [];

  for (let i in option_list){
    byIds[i] = option_list[i];
    allIds.push(i);
  }

  return {"byIds": byIds, "allIds": allIds}
}
