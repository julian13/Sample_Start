
//////////////////////////////////////
// Variables used by entire program //
// ///////////////////////////////////

const messages = [
    'message 01',
    'message 02',
    'message 03',
    'message 04',
    'message 05',
]

let messageArea = document.getElementById("messageArea")


//////////////////////////////////////
// main program                    //
// //////////////////////////////////

myProgram = function() {

    let input = userDecision()

    inputHandler(input)

}


//////////////////////////////////////
// functions to support program    //
// //////////////////////////////////

// function to generate initial prompt and return integer of user choice
let userDecision = function() {
    let input = prompt("Choose an option \n \n 1. show messages \n 2. add a message \n 3. delete a message \n 0. quite. or quit")

    return parseInt(input)
}



// function that deciphers what the user choice needs to do,
// and calls the correct function

let inputHandler = function(choice) {
    switch (choice) {
        case 1:
            printList()
            break
        case 2:
            addEntry()
            break
        case 3:
            deleteEntry()
            break
        case 0:
            exit()
            break
        default:
            refreshMessage()
            break

    }
}

// if user selects 0, do exit routine
let exit = function() {}



// if user selects 2, prompt them for the message, add, and 
// display message

let addEntry = function() {
    let message = prompt("please input new message")
    messages.push(message)
    printList()
}


// if user selects 3, prompt them for message to delete
// and delete the message, and display

let deleteEntry = function() {
    let list_length = messages.length
    let number_to_delete = prompt("yo what number to delete from 1 to " + list_length)
    number_to_delete = parseInt(number_to_delete)

    if (1 <= number_to_delete & number_to_delete <= list_length){


    messages.splice(number_to_delete-1,1)
    printList()

}

    else {
    refreshMessage()
}

}

// if user selects 1, print all the messages

let printList = function() {
    messageArea.innerHTML = ""
    for (items in messages) {
        let display_items = parseInt(items)+1
        messageArea.innerHTML += "<p>"
        messageArea.innerHTML += display_items + ": "
        messageArea.innerHTML += messages[items]
        messageArea.innerHTML += "</p>"
    }
}

// bad input gets refresh message

let refreshMessage = function(){
messageArea.innerHTML = "Please refresh page"
}


myProgram()
