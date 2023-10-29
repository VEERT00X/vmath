const average = (...args) => {
    const sumOfArgs = sum(...args);

    const countIntegers = (arr) => {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                count += countIntegers(arr[i]);
            } else if (typeof arr[i] === 'number') {
                count++;
            }
        }
        return count;
    };

    const count = countIntegers(args);

    if (count === 0) {
        return 0; // We can't divide by 0
    }

    return sumOfArgs / count;
};
const avg = average; // Alias to average

module.exports = {avg , average};

// Path: Basic/average.js