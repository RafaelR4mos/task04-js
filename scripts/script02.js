const numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
];

let indexes = [];
const evenNumbers = numbers.filter((number, index) => {
    if (number % 2 === 0) {
        indexes.push(index);
        return number;
    }
});

let i = 0;
function displayResults(item) {
    console.log(
        `Os números pares da lista são: ${item} com índice original: ${indexes[i]}`
    );
    i++;
}

evenNumbers.forEach(displayResults);
