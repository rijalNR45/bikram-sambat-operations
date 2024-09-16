var submitButtonSelect = document.querySelector(".submitButton");
submitButtonSelect.addEventListener('click', main());



function storeInput(){
    console.log("hi")
    var obtainedResult;
    var input1 = document.querySelector("#inputDate1").value;
    
   
    var input2 = document.querySelector("#inputDate2").value;
    

   
    obtainedResult = NepaliFunctions.BsDatesDiff(input1, input2) 
   
 


    console.log(obtainedResult);
    
    
   
}