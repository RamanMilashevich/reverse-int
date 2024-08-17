module.exports = function reverse (n) {
    let numString = n.toString();
    let reversedStr = numString.split('').reverse().join('');
    let reversedNumber = parseInt(reversedStr);
    
    return reversedNumber;
}
