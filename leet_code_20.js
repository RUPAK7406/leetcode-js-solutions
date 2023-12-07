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
    return closeBrackets.length === 0
};

//Approach 2
var isValid = function(s) {
    let stringParanthesis = []
    let paranthesisMap = new Map([['(', ')'], ['[',']'], ['{', '}']])

    for(let index = 0; index <= s.length; index++){
        if(paranthesisMap.has(s[index])){
            stringParanthesis.push(paranthesisMap.get(s[index]))
        }else if(s[index] !== stringParanthesis.pop()){
            return false
        }
}

return stringParanthesis.length === 0
};
