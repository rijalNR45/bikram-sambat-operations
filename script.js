//for operation 1

    const submitButton1Select = document.querySelector("#submit1");
    const outputHolder1 = document.getElementById("container1st");

    function updateOutput(input1){
        if(outputHolder1.firstChild){
            outputHolder1.removeChild(outputHolder1.firstChild)
        }
        
    var obtainedResult = NepaliFunctions.BS2AD(input1);
    console.log(obtainedResult); 
    const output1 = document.createElement('h3');
    output1.textContent = ("The date in AD is:"+ " "+ obtainedResult);
    outputHolder1.appendChild(output1);   
    }
    submitButton1Select.addEventListener('click', firstOperation);

    
function firstOperation(){
    
    var input1 = document.querySelector("#inputDate1").value;
    if(input1.trim() !==""){
    updateOutput(input1);
    }
    else{
        updateOutput("Please enter a valid input.");
    }
    document.querySelector("#inputDate1").value = "";
}

//for operation2

var submitButton2Select = document.querySelector("#submit2");
submitButton2Select.addEventListener('click', secondOperation);


function secondOperation(){

var input2 = document.querySelector("#inputDate2").value;
var obtainedResult = NepaliFunctions.AD2BS(input2);
console.log(obtainedResult); 
const outputHolder2 = document.getElementById("container2nd");
let output2 = document.createElement("h3");
output2.textContent = ("The date in BS is:"+ obtainedResult);
outputHolder2.appendChild(output2);
document.querySelector("#inputDate2").value = "";
}



//for operation3

var submitButton3Select = document.querySelector("#submit3");
submitButton3Select.addEventListener('click', thirdOperation);


function thirdOperation(){

var input3A = document.querySelector("#inputDate3A").value;
var input3B = document.querySelector("#inputDate3B").value;

var obtainedResult = NepaliFunctions.BsDatesDiff(input3A, input3B, 'YYYY-MM-DD')
console.log(obtainedResult); 
const outputHolder3 = document.getElementById("container3rd");
let output3 = document.createElement("h3");
output3.textContent = ("The difference is: " + obtainedResult + " days.");
outputHolder3.appendChild(output3);
document.querySelector("#inputDate3A").value = "";
document.querySelector("#inputDate3B").value = "";

}





// //for operation4

// var submitButton4Select = document.querySelector("#submit4");
// submitButton4Select.addEventListener('click', fourthOperation);


// function fourthOperation(){

// var input4A = document.querySelector("#inputDate4A").value;
// var input4B = document.querySelector("#inputDate4B").value;

// var formattedInput4A = NepaliFunctions.ConvertToDateObject(input4A, "YYYY-MM-DD");


// var obtainedResult = NepaliFunctions.BsAddDays(formattedInput4A, input4B, 'YYYY-MM-DD')
// console.log(obtainedResult); 
// const outputHolder4 = document.getElementById("container4th");
// let output4 = document.createElement("h3");
// output4.textContent = ("The final date is: " + obtainedResult + " B.S." );
// outputHolder4.appendChild(output4);

// }



//for operation5

var submitButton5Select = document.querySelector("#submit5");
submitButton5Select.addEventListener('click', fifthOperation);


function fifthOperation(){

var input5A = document.querySelector("#inputDate5A").value;
var input5B = document.querySelector("#inputDate5B").value;

var obtainedResult = NepaliFunctions.AdDatesDiff(input5A, input5B, 'YYYY-MM-DD')
console.log(obtainedResult); 
const outputHolder5 = document.getElementById("container5th");
let output5 = document.createElement("h3");
output5.textContent = ("The difference is: " + obtainedResult + " days" );
outputHolder5.appendChild(output5);
document.querySelector("#inputDate5A").value = "";
document.querySelector("#inputDate5B").value = "";

}



