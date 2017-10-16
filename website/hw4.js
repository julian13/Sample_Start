let userNumber = prompt("Please enter a number between 2 and 10: ")

userNumber =  parseInt(userNumber)


let msgArea = document.getElementById("messageArea")
let invalid = false

if (2 <= userNumber &  userNumber <= 10 ) {
}
else
{
msgArea.innerHTML = "Your input is 100. The valid input number is between 2 and 10. Please reload this page and try again."
msgArea.setAttribute("class","red")
invalid = true
}

let counter = document.getElementById("counter")
let quotient = userNumber
let count = 0
if (invalid === false){
document.getElementById("counter").setAttribute("class","borderGreen")
while ( quotient > 0.000001) {
quotient = quotient / 2
count += 1
}
msgArea.innerHTML = "The number of times to divide the number " + userNumber + " by 2 to get a value less than one millionth is " + count



let temporaryCounter = userNumber
while (userNumber > 0){
while (temporaryCounter > 0){
counter.innerHTML = counter.innerHTML + "*"
temporaryCounter = temporaryCounter - 1
}
counter.innerHTML = counter.innerHTML + "<br>"
userNumber = userNumber -1
temporaryCounter = userNumber
}

}
