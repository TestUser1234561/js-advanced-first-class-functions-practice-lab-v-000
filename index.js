// Code your solution in this file!
function logDriverNames(names) {
  for(el in names) {
    console.log(names[el].name)
  }
}

function logDriversByHometown(names, town) {
  for(el in names) {
    if(names[el].hometown == town) { console.log(names[el].name) }
  }
}

function driversByRevenue(arr) {
  return arr.sort(function (a, b) {

  })
}
