function myFunction() {
    var message, x;
    message = document.getElementById("message");
    message.setAttribute("class", "err-color");
    message.innerHTML = "";
    x = document.getElementById("demo").value;
    try { 
        if(x == "")  throw "Input is empty";
        if(isNaN(x)) throw "Please use numbers only";
        x = Number(x);
        if(x < 5)    throw "That number is too low";
        if(x > 10)   throw "That number is too high";
    }
    catch(err) {
        message.innerHTML = err;
    }
}
