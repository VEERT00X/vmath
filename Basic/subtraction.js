const subtraction = (...args) => {
    let result = 0;

    const subtractArray = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                subtractArray(arr[i]);
            } else if (typeof arr[i] === 'number') {
                result -= arr[i];
            }
        }
    }

    subtractArray(args);
    return result;
};
const subtract = subtraction; // Alias to subtraction

module.exports = {subtract , subtraction};

// Path: Basic/subtraction.js