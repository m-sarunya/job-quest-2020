function secondMax(arr) {
    if (arr.length >= 1) {
        let max = 0
        let smax = 0
        for (let i = 0; i < arr.length; i++) {
            if (max < arr[i]) {
                smax = max
                max = arr[i]
            }
        }
        if (smax === 0)
            return max
        else
            return smax
    }
    else
        return 'Error!'
}
console.log(secondMax([2, 3, 4, 5]));
console.log(secondMax([9, 2, 21, 21]));
console.log(secondMax([4, 4, 4, 4]));
console.log(secondMax([4123]));
console.log(secondMax([]));

