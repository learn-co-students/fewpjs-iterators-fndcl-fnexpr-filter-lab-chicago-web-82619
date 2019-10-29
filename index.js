function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(drivers, letter) {
  return drivers.filter(driver => driver.toLowerCase().indexOf(letter.toLowerCase()) === 0 )
}

function matchName(drivers, string) {
  return drivers.filter(driver => driver.name === string )
}