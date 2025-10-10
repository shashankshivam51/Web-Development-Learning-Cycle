console.log("Namaste JavaScript");


// let a =10;
// let b= 2104.129;
// console.log(b.toFixed(1));
// console.log(b.toPrecision(2));
// console.log(b.toString());


// let now = new Date();
// console.log(now.toString());




let now = new Date();
console.log(now.toString());

const user = {
    name: "Shashank",
    age: 20,
    num: 4792,
    greetings: function(){
        console.log(`hi my name is ${this.name}`);
    }
}

console.log(user);

console.log(user.name);

console.log(Object.entries(user));
for(let keys of Object.values(user)){
    console.log(keys);
}
user.greetings();


///Function testing

function greet(){
    console.log("heloo world!!!");
}
greet();

function PrimeNumber(num){
    if(num<1){
        return false;
    }else{
        for(let i=2;i<num;i++){
            if(num%i==0){
                return false;
            }
        }
        return true;
    }
    
}

function addNumber(...num){
    let sum=0;
    for(let n of num){
        sum += n;
        
    }
    console.log(`The sum: ${sum}`);
}

addNumber(1793,1992,3880,3993);



//Aerrow function

const square = (num1) => num1*num1;

console.log(square(5));


//for single parameter
const cube = num => num*num*num;
console.log(cube(5));


//Immediately invoked function
(function even(num=291){
    if(num%2==0){
        console.log(`Even Number`);
    }else{
        console.log(`Odd number`);
    }
})();
console.log(PrimeNumber(13));


// Scope and closure , HOF
// Global_> Accessible to everyone
// functional -> accesible only to that function
// Block level scope-> accesible only to that Block

// let a = 10;
// const b = 20;



// if(true){
//     let d = 30;
    
// }

 

// function greet(){

//     let c = 30;
//    var e = 90;
// }

// // console.log(c);
// console.log(e);
// greet();


// let global = 30;


// function greet(){
     
//     let global = 40;
   

//     function meet(){
//         let global = 10;
//         console.log(global);
//     }
    
//     meet();
// }

// greet();


function createCounter(){
    
    let count = 0;
    function increment(){
        count++;
        return count;
    }

    return increment;
}

// console.log(count);

const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());


// let balance = 500;




// // // balance+="Rohit";
// // balance-=500;
// // console.log(balance);

// let balance = 500;
// // private

// let user = {
//     deposit: function(amount){
//         if(typeof amount==="number" && amount>0){
//         balance+=amount;
//         return balance;
//         }
//     },
//     withdraw: function(amount){
//         if(typeof amount==="number" && amount>0 && balance>=amount){
//         balance-=amount;
//         return balance;
//         }
//     },
//     getBalance: function(){
//         return balance;
//     }
    
// }

// balance="Rohit"

// user.balance="Rohit";
// console.log(user.getBalance());
// console.log(user.deposit("2sa00"));
// console.log(user.deposit(500));

// method ko access(function)
// balance: usko directly access na


function createBankAccount(){

    let balance = 500;
    
    return {
    deposit: function(amount){
        if(typeof amount==="number" && amount>0){
        balance+=amount;
        return balance;
        }
    },
    withdraw: function(amount){
        if(typeof amount==="number" && amount>0 && balance>=amount){
        balance-=amount;
        return balance;
        }
    },
    getBalance: function(){
        return balance;
    }
    
    }

 
}

const customer = createBankAccount();
console.log(customer.withdraw(200));


// Higher order function


// function double(value){

//     return function execute(num){
//         return num*value;
//     }
    
// }

// const n = double(20)(5);
// console.log(n);
