//                 🚀 || 100 Days of Coding Challenge || 🚀

// 🚀 Day 31 Challenge: Start Coding! 🚀

// Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".

function replaceBananaWithMango(favoriteFruit:string[]):void {
    const index=favoriteFruit.indexOf("Banana");
    if (index !== -1) favoriteFruit[index] = "Mango";
}
const favoriteFruit:string[]=["Grapes","Apple","Banana"];
replaceBananaWithMango(favoriteFruit);
console.log(favoriteFruit);

//                         XXXXXXXXXXXXXXX