//counting button code (done 1 - 22)
let countNum = document.getElementById("count-num");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
    count += 1
    countNum.textContent = count
};


function save() {

    let myCount = count + " | "
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
function loadingMessage() {
    const saveMessage = localStorage.getItem("saveMsg");
    if (saveMsg) {
        document.getElementById("message").value = saveMessage;
    }
}


//console.log(typMessage)

//attaching event listner instead of addiing onclick to button
document.getElementById("save-msg").addEventListener("click", saveMsg);
document.getElementById("clear").addEventListener("click", clearMsg)
window.addEventListener("DOMContentLoaded", loadingMessage)


// code for handling volume key behaviour
// toggle-switch listener
// const toggleSwitch = document.querySelector(".toggle-switch input");
// let volumeKeyMode = false;

// toggleSwitch.addEventListener("change", function() {
//     volumeKey = this.checked;
//     if (volumeKeyMode) {
//         alert("Volume key control mode activated.");
//     } else {
//         alert("Screen tap control activated.");
//     }
// }
// );

// volume button listner
// document.addEventListener("keydown", function (event) {
//     if (volumeKey) {
//         if (event.code === "Arrowup") {
//             increment();
//         } else if (event.code === "ArrowDown") {
//             save();
//         }
//     }
// }
// );

// Screen tap control
// document.getElementById("count-num").addEventListener("click", function () {
//     if (!volumeKeyMode) {
//         increment();
//     }
// }
// );

