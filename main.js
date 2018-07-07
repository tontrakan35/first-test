function realTimeKey() {
    var x = document.getElementById("text1").value;
    document.getElementById("text2").innerHTML = x;
}

function showErr(err) {
    if (err !== "") {
        document.getElementById("err").innerText = err;
        document.getElementById("err").style.visibility = 'visible';
    }
    setTimeout(() => {
        document.getElementById("err").style.visibility = 'hidden';
    }, 3000);
}

function validateInput(x) {
    if (x && x >= 0) {
        inNum = parseInt(x);
        if (Number.isInteger(inNum) == true) {
            if (inNum <= 255) {
            return qwer = inNum;
            } else {
                err = "your number more than 255 please input your number between 0-255";
                showErr(err);
            }
        } else {
            err = "Only Number";
            showErr(err);
        }
    } else {
        err = "Please enter number 0-255";
        showErr(err);
    }
}

function sum() {
    var qwer;
    id = event.target.id;
    x = validateInput(event.target.value);
    if(x !== "" && x !== undefined){
        if(id == "num1"){
            r = x.toString(16);
        } else if (id == "num2"){
            g = x.toString(16);
        } else {
            b = x.toString(16);
            document.getElementById("text2").style.color = "#"+r+g+b;
        }
    }
}