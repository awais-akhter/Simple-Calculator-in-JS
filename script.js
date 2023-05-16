let pressed = 0;

// Refer all buttons excluding AC and Del
let input_btn = document.querySelectorAll(".in-btn");

//Refer input, equal, clear and erase
let display = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

window.onload = () => {
    display.value = "";
};

//Access each class using forEach
input_btn.forEach((btnClass) =>{
    btnClass.addEventListener("click", () => {
        if (pressed == 1){
            display.value = "";
            pressed = 0;
        }

        //display value for each button
        display.value += btnClass.value;

    });
});

//Solve the user's input when clicked on equal button
equal.addEventListener("click", () => {
    pressed = 1;
    let evaluated = display.value;

    try{
        //evaluate/solve user input
        let solution = eval(evaluated); // True for Natural Numbers
        //False for Decimals
        if(Number.isInteger(solution)){
            display.value = solution;
        }
        else{
            display.value = solution.toFixed(2);
        }
    }
    catch(err){
        //if user enters invalid input
        alert("Error! Please enter a valid expression...");
        display.value = "";
    }
});

clear.addEventListener("click", ()=>{
    display.value = "";
});

erase.addEventListener("click", ()=>{
    display.value = display.value.substr(0, display.value.length - 1);
});