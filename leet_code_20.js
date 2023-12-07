/**
 * @param {string} s
 * @return {boolean}
 */

//Approach 1
var isValid = function(s) {
    let closeBrackets = []
    for(let item = 0; item <= s.length; item++){
        if(s[item]=== "("){
            closeBrackets.push(")")
        }else if(s[item] === "["){
            closeBrackets.push("]")
        }else if(s[item] === "{"){
            closeBrackets.push("}")
        }else if(closeBrackets.pop() !== s[item]){
            return false
        }
    }
    return !closeBrackets.length
};
