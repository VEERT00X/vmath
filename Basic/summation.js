const summation = (...args) => {
    let total = 0;

    const sumArray = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                sumArray(arr[i]);
            } else if (typeof arr[i] === 'number') {
                total += arr[i];
            }
        }
    }

    sumArray(args);
    return total;
};
const sum = summation; // Alias to summation

module.exports = {sum , summation};

// Path: Basic/summation.js