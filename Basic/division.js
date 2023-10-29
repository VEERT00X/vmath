const division = (...args) => {
    let result = 1;

    const divideArray = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                divideArray(arr[i]);
            } else if (typeof arr[i] === 'number') {
                if (result === 1) {
                    result = arr[i];
                } else {
                    result /= arr[i];
                }
            }
        }
    }

    divideArray(args);
    return result;
};

const divide = division; // Alias to division

module.exports = {divide , division};

// Path: Basic/division.js