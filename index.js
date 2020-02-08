  function findMatching (drivers, name) {
    return drivers.filter(driverName => {
      return driverName.toLowerCase() === name.toLowerCase();
    });
  }
  
  function fuzzyMatch (drivers, partialName) {
    let nameLength = partialName.length;
    return drivers.filter(driverName => {
      return driverName.slice(0, nameLength) === partialName;
    });
  }
  
  function matchName (drivers, name) {
    return drivers.filter(driver => {
      return driver.name.toLowerCase() === name.toLowerCase();
    });
}