//Last element in the array

let arr1 = [3, 7, 34, 90, 12];  
let arr2 = [true, "green", "where", 12, 56];  


let lastElementArr1 = arr1[arr1.length - 1];  
console.log("The last element of arr1 is:", lastElementArr1);  


let lastElementArr2 = arr2[arr2.length - 1];  
console.log("The last element of arr2 is:", lastElementArr2);

//Join array elements
let myPets = ["Cow", "Bird", "Snake", "Dog"];  

let petsString = myPets.join(", ");  

console.log(petsString); 

//sort arrary items
var arr3 = [-5, 9, 5, 3, 2, -3, 6, 8, 4, 1];  
 
arr3.sort(function(a, b) {  
    return a - b; 
});  

console.log(arr3); 

//Remove duplicates 
let arr = ["boy", "man", "girl", "school", "girl", "woman"];  

let duplicates = [];  

let counts = {};  
 
arr.forEach(item => {  
    counts[item] = (counts[item] || 0) + 1; 
});  
 
let uniqueArr = arr.filter(item => {  
    if (counts[item] > 1) {  
        if (!duplicates.includes(item)) {  
            duplicates.push(item);   
        }  
        return false;  
    }  
    return true;  
});  
 
console.log("Array without duplicates:", uniqueArr); 
console.log("Array with duplicates:", duplicates);

//search word in an array

let arr5 = ["the", "way", "x", 4];  
let searchWord = "food";  

function searchInArray(array, word) {  
    return array.includes(word) ? word : "the search word was not found";  
}  

console.log(searchInArray(arr5, searchWord));

//sorting string
let word = "renniw";  

function sortString(str) {  
    return str.split('').sort().join('');  
}  

console.log(sortString(word)); 

//insert 
let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape", "Honeydew", "Kiwi", "Lemon"];  
 
fruits.splice(5, 0, "Tomato");  

console.log(fruits);  
 
