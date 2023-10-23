const form = document.getElementById("userForm");

const nr = document.getElementById("inputNumber");
const bish = document.getElementById("inputBish");
const bosh = document.getElementById("inputBosh");

let result = document.getElementById("bishBoshResult");
  
let list = document.getElementById("listResult");
let fragList = document.createDocumentFragment();

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
    event.preventDefault();

    if(nr.value < 1 || bish.value < 1 || bosh.value < 1) {
        alert("Number can't be negative or 0");
    } else {
        if(list.hasChildNodes()) {
            clear();
        }
        result.classList.remove("d-none");
        getResult();
    }
    form.reset();
}

function getResult() {
    let arrayResult = bishbosh(nr.value, bish.value, bosh.value);
     
    arrayResult.forEach((number, index) => {
        let li = document.createElement("li");
        li.textContent = `${index + 1} ${number}`;
        fragList.appendChild(li);
    });
    list.appendChild(fragList);
}

function clear() {
    const listItems = document.querySelectorAll("#listResult li");
    listItems.forEach(listItem => {
        listItem.parentNode.removeChild(listItem);
    });
}

function bishbosh(nr, bish, bosh) {
    let resultArray = [];

    for(let i = 1; i <= nr; i++) {
        if(i % bish === 0 && i % bosh === 0)
            resultArray.push("Bish Bosh");
        else if(i % bish === 0)
            resultArray.push("Bish");
        else if(i % bosh === 0)
            resultArray.push('Bosh');
        else
            resultArray.push(i);
    }
    return resultArray;
}