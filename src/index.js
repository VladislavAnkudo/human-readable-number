module.exports = function toReadable (number) {
    const str = String(number); 

    const arrayOne = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']; 
    const arrayTwo = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']; 
    const arrayThree = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']; 
    const hundred = 'hundred'; 

    const numberZero = number === 0; 

    const element1 = str[0] - 1; 
    const element2 = str[1] - 1; 
    const element3 = str[2] - 1; 

    const number1 = arrayOne[element1]; 
    const number2 = arrayThree[element1]; 
    const number3 = `${number2} ${arrayOne[element2]}`;
    const number4 = arrayTwo[element2]; 
    const number5 = `${arrayOne[element1]} ${hundred}`; 
    const number6 = `${number5} ${arrayOne[element3]}`; 
    const number7 = `${number5} ${arrayThree[element2]}`;
    const number8 = `${number5} ${arrayTwo[element3]}`; 
    const number9 = `${number7} ${arrayOne[element3]}`; 

    const length1 = str.length === 1; 
    const length2 = str.length === 2; 
    const length3 = str.length === 3; 

    const zero = 'zero'; 
    const zero1 = str[1] === '0'; 
    const zero2 = str[2] === '0'; 

    const sum = +(str[1] + str[2]); 

    if (numberZero) {
        return zero;
    } else if (length1) {
        return number1;
    } else if (length2 && zero1) {
        return number2;
    } else if (length2 && !zero1 && number > 20) {
        return number3;
    } else if (length2 && number < 20) {
        return number4;
    } else if (length3 && zero1 && zero2) {
        return number5;
    } else if (length3 && zero1 && str[2] <= '9') {
        return number6; 
    } else if (length3 && zero2) {
        return number7;
    } else if (length3 && sum < 20) {
        return number8;
    } else {
        return number9;
    }
}
