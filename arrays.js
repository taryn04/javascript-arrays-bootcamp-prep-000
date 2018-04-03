var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]
  
function addElementToBeginningOfArray(array, element){
  const originalarray = [array]
  return originalarray.unshift(element)
}

function destructivelyAddElementToBeginningOfArray(){
  var destructivelyAddElementToBeginningOfArray = addElementToBeginningOfArray().unshift(element)
}