document.addEventListener('deviceready', function () {
    document.addEventListener('volumeupbutton', function () {
        console.log("Volume Up Pressed");
        increment(); // Call your increment function
    });

    document.addEventListener('volumedownbutton', function () {
        console.log("Volume Down Pressed");
        save(); // Call your save function
    });
});

function increment() {
    let countNum = document.getElementById("count-num");
    let count = parseInt(countNum.textContent) || 0;
    count++;
    countNum.textContent = count;
}

function save() {
    let saveEl = document.getElementById("save-el");
    let countNum = document.getElementById("count-num");
    let count = parseInt(countNum.textContent) || 0;
    saveEl.textContent += count + " | ";
    countNum.textContent = 0;
}
