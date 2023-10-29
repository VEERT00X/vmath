const multiplication = (...args) => {
    let result = 1;

    const multiplyArray = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                multiplyArray(arr[i]);
            } else if (typeof arr[i] === 'number') {
                result *= arr[i];
            }
        }
    }

    multiplyArray(args);
    return result;
};
const multiply = multiplication; // Alias to multiplication

module.exports = {multiply , multiplication};

// Path: Basic/multiplication.js
