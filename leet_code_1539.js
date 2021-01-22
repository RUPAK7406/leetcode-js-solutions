/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    missingIntegers = []
    
    for(let i=1; i<=2001; i++){
        if(arr.includes(i)=== false){
            missingIntegers.push(i)
        }
    }
    return missingIntegers[k-1]
};