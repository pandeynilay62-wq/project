let total = 0;

function addExpense(){

let name = document.getElementById("name").value;
let amount = parseInt(document.getElementById("amount").value);

let list = document.getElementById("list");

let li = document.createElement("li");

li.innerHTML = name + " - ₹" + amount;

list.appendChild(li);

total = total + amount;

document.getElementById("total").innerText = total;

}