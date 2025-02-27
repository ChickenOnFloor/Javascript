function appendToDisplay(value) {
    if (value === '√') {
        let display = document.getElementById("display");
        display.value = Math.sqrt(parseFloat(display.value)) || "";
    } else {
        document.getElementById("display").value += value;
    }
}
function clearDisplay() {
    document.getElementById("display").value = "";
}
function clearLastEntry() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}
function calculate() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}