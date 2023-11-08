/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = {}

for(let item of nums){
    if(count[item]){
        count[item] = count[item] +  1
    }else{
        count[item] = 1
    }
}

let keys = Object.keys(count)
let values = Object.values(count)
let maxItemIndex = values.indexOf(Math.max(...values))
return keys[maxItemIndex]
    
}
