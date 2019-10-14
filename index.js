// Code your solution here

function findMatching(drivers, name) {
  return drivers.filter(driver => {
    // driver.toLowerCase()
    return driver.toLowerCase().includes(name.toLowerCase())
  })
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(driver => {
    return driver.startsWith(string)
  })
}

function matchName(drivers, name) {
  return drivers.filter(driver => {
    return driver.name === name;
  })
}
