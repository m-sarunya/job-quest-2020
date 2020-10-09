function shift(arr, side, index) {
    let copyArr = [...arr]
    if (side === 'left') {
        return [...copyArr.slice(index, arr.length), ...copyArr.slice(0, index)]
    }
    else if (side === 'right') {
        return [...copyArr.slice(index - 1, arr.length), ...copyArr.slice(0, index - 1)]
    }
}
console.log(shift(['john', 'jane', 'sarah', 'alex'], 'left', 2));
console.log(shift([1, 2, 3, 4, 5], 'right', 3));