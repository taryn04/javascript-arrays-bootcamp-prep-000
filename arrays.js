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

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1)
}

var items = [1, 2, 3, 4, 5, 6]
function test(array){
  return [...items.slice(0,4),...items.slice(2)] //expecting [1,2,3,4,3,4,5,6]
}