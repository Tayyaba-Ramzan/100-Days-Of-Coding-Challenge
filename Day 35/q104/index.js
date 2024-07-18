//                 🚀 || 100 Days of Coding Challenge || 🚀
// 🚀 Day 35 Challenge: Start Coding! 🚀
// Question 104: Create a function that generates a random hexadecimal color code.
function getRandomHexColor() {
    var color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
    return color;
}
console.log(getRandomHexColor());
//                         XXXXXXXXXXXXXXX
