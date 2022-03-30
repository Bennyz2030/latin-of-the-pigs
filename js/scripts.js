function translate(string) {
  let splitStr = string.toLowerCase().split(" ");
  let pigArray = [];
  for (i=0; i<splitStr.length; i++) {
    pigArray.push((splitStr.slice(0,1).match(/[aeiou]/gi) !== null))
  }
  return pigArray
}