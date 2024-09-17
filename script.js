var submitButtonSelect = document.querySelector(".submitButton");
submitButtonSelect.addEventListener('click', storeInput);



 


    console.log(obtainedResult);

    //for operation 1

    var submitButtonSelect = document.querySelector(".submit1");
    submitButtonSelect.addEventListener('click', storeInput);

    
function storeInput(){
    console.log("hi")
    
    var input1 = document.querySelector("#inputDate1").value;
    var testDate = input1;
    var formattedInput = NepaliFunctions.BS2AD(testDate);
    console.log(formattedInput);
    
    
   
    

   
   
    
   
}