function appendTodisplay(value) {
    document.getElementById("display").value += value;
}

function calculate() {
    try {
        var result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (e) {
        document.getElementById("display").value = "Error";
    }
}

function cleardisplay() {
    document.getElementById("display").value = "";
}