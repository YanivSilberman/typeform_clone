let option_list = [
  "Smart",
  "Funny",
  "Creative"
];

export default function getOptions(){
  let byIds = {}, allIds = [];

  for (let i in option_list){
    byIds[i] = option_list[i];
    allIds.push(i);
  }

  return {"byIds": byIds, "allIds": allIds}
}
