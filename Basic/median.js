const median = (...args) => {
    const flattenedArray = args.flat(Infinity);

    if (flattenedArray.length === 0) {
        return 0; // The function should return 0 if no arguments are passed
    }

    flattenedArray.sort((a, b) => a - b);
    const middle = Math.floor(flattenedArray.length / 2);

    if (flattenedArray.length % 2 === 0) {
        // If the array has an even length, return the average of the two middle values
        return (flattenedArray[middle - 1] + flattenedArray[middle]) / 2;
    } else {
        // If the array has an odd length, return the middle value.
        return flattenedArray[middle];
    }
};
const med = median; // Alias to median

module.exports = {med , median};

// Path: Basic/median.js