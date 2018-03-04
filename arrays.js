var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
function addElementToBeginningOfArray(a, n){
  return [n,...a]
}
function destructivelyAddElementToBeginningOfArray(a,n){
  a.unshift(n)
  return a
}

function addElementToEndOfArray(a,n){
    return [...a,n]
}
function destructivelyAddElementToEndOfArray(a,n){
  a = [...a,n]
  return a
}

function accessElementInArray(a,n){
  return a[n]
}
function destructivelyRemoveElementFromBeginningOfArray(a){
  a.shift()
  return a
}