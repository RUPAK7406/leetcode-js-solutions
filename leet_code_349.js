/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let myset = new Set()
    
    for(let i of nums1){
        if(nums2.includes(i)){
            myset.add(i)
        }
    }
    return Array.from(myset)
};