const findMatching = (drivers, name) => {
  return drivers.filter(driver => {
    return driver.toLowerCase() === name.toLowerCase();
  });
}

const fuzzyMatch = (drivers, str) => {
  return drivers.filter(driver => {
    return driver.toLowerCase().startsWith(str.toLowerCase());
  });
}

const matchName = (drivers, str) => {
  return drivers.filter(driver => {
    return driver.name.toLowerCase() === str.toLowerCase();
  });
}