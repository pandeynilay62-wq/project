let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

let ctx = document.getElementById("myChart").getContext("2d");

let chart = new Chart(ctx,{
type:"pie",
data:{
labels:["Food","Transport","Shopping","Other"],
datasets:[{
data:[0,0,0,0],
backgroundColor:["#ff6384","#36a2eb","#4bc0c0","#ffcd56"]
}]
}
});

function addExpense(){

let name=document.getElementById("name").value;
let amount=parseInt(document.getElementById("amount").value);
let category=document.getElementById("category").value;

if(name=="" || amount=="") return;

let expense={name,amount,category};

expenses.push(expense);

localStorage.setItem("expenses",JSON.stringify(expenses));

displayExpenses();
}

function deleteExpense(index){

expenses.splice(index,1);

localStorage.setItem("expenses",JSON.stringify(expenses));

displayExpenses();
}

function displayExpenses(){

let list=document.getElementById("list");

list.innerHTML="";

let total=0;

let categoryTotals={
Food:0,
Transport:0,
Shopping:0,
Other:0
};

expenses.forEach((exp,i)=>{

let li=document.createElement("li");

li.innerHTML=`
${exp.name} - ₹${exp.amount} (${exp.category})
<button class="delete-btn" onclick="deleteExpense(${i})">X</button>
`;

list.appendChild(li);

total+=exp.amount;

categoryTotals[exp.category]+=exp.amount;

});

document.getElementById("total").innerText=total;

chart.data.datasets[0].data=[
categoryTotals.Food,
categoryTotals.Transport,
categoryTotals.Shopping,
categoryTotals.Other
];

chart.update();
}

displayExpenses();
