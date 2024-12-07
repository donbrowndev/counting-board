//counting train button code (done 1 - 22)

//document.getElementById("count-numb").innerText = 5
let saveEl = document.getElementById("save-el")
let countNum = document.getElementById("count-num");
// console.log(save-el);

let count = 0;

function increment() {
    count += 1
    countNum.textContent = count
};


function save() {

    let myCount = count + " - "
    saveEl.textContent += myCount
    countNum.textContent = 0
    count = 0
};

//for the save message and clear message
function saveMsg() {
    const typMessage = document.getElementById("message").value;
    localStorage.setItem("saveMsg", typMessage);
    alert("Message saved!");
}

function clearMsg() {
    localStorage.removeItem("saveMsg");
    document.getElementById("message").value = "";
    //alert("Message cleared!");
}

//loading message from localstorage
function loadingMessage () {
    const saveMessage = localStorage.getItem("saveMsg");
    if (saveMsg) {
        document.getElementById("message").value = saveMsg;
    }
}

//console.log(typMessage)

//attaching event listner instead of addiing onclick to button
document.getElementById("save-msg").addEventListener("click", saveMsg);
document.getElementById("clear").addEventListener("click", clearMsg)

window.addEventListener("DOMContentLoaded", loadMessage)