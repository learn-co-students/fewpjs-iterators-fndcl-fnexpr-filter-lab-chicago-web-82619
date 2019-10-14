function findMatching(arr, string) {
    let matching = arr.filter(str => {
        return str.toLowerCase() == string.toLowerCase()
    });
    return matching;
}

function fuzzyMatch(arr, str) {
    let lengthOfName = str.length;
    let match = arr.filter(string => {
        return string.slice(0, lengthOfName) === str
    });
    return match;
}

function matchName(arr, str) {
    return arr.filter(driver => {
        return driver.name.toLowerCase() === str.toLowerCase();
    });
} 