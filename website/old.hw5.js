
// Variables used by entire program

const messages = [
    'message 01',
    'message 02',
    'message 03',
    'message 04',
    'message 05',
]
let messageArea = document.getElementById("messageArea")



// Put the main meat of the program into its own function to be called at the end
myProgram = function(){
let input = userDecision()

inputHandler(input)
        
}
let userDecision = function(){
let input = prompt("Choose an option \n \n 1. show messages \n 2. add a message \n 3. delete a message \n 0. quite. or quit")

return parseInt(input)
}

let inputHandler = function(choice){
switch(choice){
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

}
}


let exit = function(){
}

let addEntry = function(){
let message = prompt("please input new message")
messages.push(message)
printList()
}

let deleteEntry = function(){
let list_length = messages.length
let number_to_delete = prompt("yo what number to delete from 1 to "+list_length)

messages.splice

}

let printList = function(){
messageArea.innerHTML = ""
for(items in messages){
messageArea.innerHTML += "<p>"
messageArea.innerHTML += messages[items]
messageArea.innerHTML += "</p>"
}
}
myProgram()
