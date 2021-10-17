var userInput = document.querySelector("#user-dob")
var userButton = document.querySelector("#user-btn")
var userOutput = document.querySelector("#user-out")

userButton.addEventListener('click',clickHandler)

function clickHandler(){
var userDob = userInput.value
    if(userDob!=0){
        var stringDob = userDob.slice(0,4)
        console.log(stringDob)
        if(stringDob % 4==0){
            userOutput.innerHTML="You Birthday Year is leap year"
        }else if(stringDob % 100==0){
            userOutput.innerHTML="You Birthday Year is leap year"
        }else if(stringDob % 400==0){
            userOutput.innerHTML="You Birthday Year is leap year"
        }else{
            userOutput.innerHTML="You Birthday Year is Not a leap year"
        }
    }else{
        userOutput.innerHTML="Please Select Your Birthday Date"  
    }

}
