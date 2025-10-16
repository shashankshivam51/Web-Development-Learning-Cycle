const newElement = document.createElement("h2");
newElement.textContent = "New Element is created"
newElement.id = "Second";


const element2 = document.createElement("h2");
element2.textContent = "This is before element (Element 2)";
element2.id = "third";

element2.style.cssText = "background-color:pink; color:black; padding:10px;";


//Select element  
const element = document.getElementById("first");
//element after
element.after(newElement);
//element before
element.before(element2);


//adding items in list

const lst = document.createElement("li");
lst.textContent = "milk";
const olElement = document.getElementById("listing");
olElement.append(lst);


