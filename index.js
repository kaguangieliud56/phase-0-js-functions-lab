function calculateTax(amount){
    const tax =  0.10;
    return tax;
}

function convertToUpperCase(text){
    return text.toUpperCase();
}

function findMaximum(num1, num2){
    return num1 > num2 ? num1 : num2;
}

function isPalindrome(word){
    const reversed = word.split('').reverse().join('');
    return word === reversed;
}

function calculateDiscountedPrice(originalPrice, discountPercentage){
    const discountAmount = (discountPercentage / 100) * originalPrice;
const discountedPrice = originalPrice - discountAmount;
return discountedPrice;
}
console.log(calculateTax(200));
console.log(convertToUpperCase("hello"));
console.log(findMaximum(10, 20));
console.log(isPalindrome("racecar"));
console.log(calculateDiscountedPrice(100, 20));
