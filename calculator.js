let allNumbers = document.querySelectorAll(".onscreen");
let inputbox = document.querySelector(".inputbox");
let clearinput = document.querySelector(".clearinput");
let lastclear = document.querySelector(".lastclear");
let equal = document.querySelector(".equal");

allNumbers.forEach(function(ele){
    ele.addEventListener("click", function(){
        inputbox.value += ele.innerHTML;
    })
})
clearinput.addEventListener("click",function(){
     inputbox.value = "";
});
lastclear.addEventListener("click", function(){
    let len = inputbox.value;
    if (len.length > 0) {
        
        inputbox.value = len.slice(0, -1);
    }
});

equal.addEventListener("click", function(){
    const result = eval(inputbox.value);
    try{
        inputbox.value = result;
        if (Number.isFinite(result)) {
            // Check if the result is a valid number
            // If true, round it to two decimal places
            inputbox.value = parseFloat(result.toFixed(2));
          }
    
    }
    catch{
        inputbox.value = "enter valid value";
    }
})

