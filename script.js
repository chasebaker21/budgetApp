"use strict";

class Category {
  constructor (name, allocation) {
    this.name = name;
    this.allocation = allocation;
    this.spent = 0;
  }
  
  addSpent (expenditure) {
    let newSpent = this.spent += expenditure;
    if(newSpent > this.allocation) {
      //squib expenditure
    }
    else {
      this.spent = newSpent;
    }
  }
}


function newBar(budget, total) {
  
  let newBudget = `<div class="budgetBox"><div
  class="label-center"
  id="${budget}"
  
  ></div><div></div>
  <h2>${budget}</h2>
  <p>$0 of ${total} Spent</p></div>`;
  let node = document.createElement("li");
  node.innerHTML = newBudget;
  document.getElementById("insertBudget").appendChild(node);

    // inserts users name at top
    // let userName = document.getElementById("userName");
    // let addName = document.createElement("h1");
    // addName.innerHTML = userName;
    // document.getElementById("insertName").appendChild(addName);
  
  
  
  
  /* construct manually */
  let bar = new ldBar(`#${budget}`, { preset: "bubble" });
  
  // divides total by spent to create percentage amount below 100
  let c = (50 / total) * 100;
  // let d = (spent2 / total2) * 100;
  /* ldBar stored in the element */
  bar.set(c);
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function submit() { 
  let cats = document.getElementsByClassName("data-entry");
  
  for(let arry of cats) {
    if(arry.value) {
      newBar(arry.name, arry.value);
    }
  }

  
}

