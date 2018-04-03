var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]
  
function addElementToBeginningOfArray(array, element){
  const array = array
  return array.unshift(element)
}

function destructivelyAddElementToBeginningOfArray(){
  var destructivelyAddElementToBeginningOfArray = addElementToBeginningOfArray().unshift(element)
}