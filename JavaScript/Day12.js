// //ForEach(just number)

// const arr = [10,203,40,52,12,41,89];
// arr.forEach((number) => {
//     // console.log(number);
// })


// // ForEach sum


// let sum=0;
// arr.forEach(number =>{
//     sum = sum + number;
   
// })
// console.log(sum);



// //ForEach(number,index)


// // arr.forEach((num,index) => {
// //     console.log(num,index);
// // })


// //Filter
// const newArray= arr.filter((number)=> number>25);
// console.log(newArray);



// Set Array

const arr100 = [682 ,2891, 682,2891,18,18,940,4,4,4,44];
const s1 = new Set(arr100);
s1.add(22);
console.log(s1.has(20));
console.log(s1);



//Map
const m1 = new Map([
    ["Rohit",40],
    [2,"Rohit"],
    [true,11]
]);

console.log(m1);