var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]
  
function addElementToBeginningOfArray(array, element){
  const addElementToBeginningOfArray = [element,...array]
  return addElementToBeginningOfArray
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element){
  const addElementToEndOfArray = [...array,element]
  return addElementToEndOfArray
}

function destructivelyAddElementToEndOfArray(array,element){
  array.push(element)
  return array
}