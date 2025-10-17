// function handleClick(){
//     const element = document.getElementById("heading");
//     element.textContent = "Hello sir! Now I am dynamic."
// }
 

const element = document.getElementById("heading");

element.onclick = function handleClick(){
    
    element.textContent = "Hello sir! Now I am dynamic again."
}




const grandparent = document.getElementById("grandparent");
grandparent.addEventListener('click',()=>{
    console.log("grandParent is clicked");
})

const parent = document.getElementById("parent");
grandparent.addEventListener('click',()=>{
    console.log("Parent is clicked");
})

const child = document.getElementById("child");
grandparent.addEventListener('click',()=>{
    console.log("childParent is clicked");
})