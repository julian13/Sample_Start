const  initialCandidates = {
  "peter_parker": { name: 'Peter Parker', likes: '700'},
  "tony_stark":{ name: 'Tony Stark', likes: '135'},
  "dash":{ name: 'dash', likes: '0'},
  "dash1":{ name: 'dash1', likes: '1'},
  "jonathan_dufault":{ name: 'Jonathan Dufault', likes:'-4'}
}

const candidates = {}


let namesTable = $("#listNames")[0]
namesTable.insertRow(0)
let addNames = $("#addNames")


function createTable(){
	let userID
	let userName
	let likes
	for (userID in initialCandidates){
		userName = initialCandidates[userID].name
		likes = initialCandidates[userID].likes
		candidates[userID] = {'name': userName, 'likes':likes}
		insertUserRow(userID)
    } 
}

// takes user's name and inserts into candidates object, while assigning
// a unique id to the user
function createUser(userName,likes){
	if (likes === undefined){likes = 0}
	let i=0
	let userID = userName.toLowerCase().replace(" ","_")
		while (true){
		userID = userName + i

		if (candidates[userID] == undefined){
			break
		}
		i = i+1
	}
	candidates[userID] = {name: userName, likes: likes}
	insertUserRow(userID)	
	return userID
}

function insertUserRow(userID){

// First find out where the user is supposed to go based on points and
// then alphabetically
let userIndex = indexNumber(userID)
let userName = candidates[userID].name
let userLikes = candidates[userID].likes
// next create a row at the right spot in the table

let row = namesTable.insertRow(userIndex)

// create the cells in the row

let userCell = row.insertCell()
let pointCell = row.insertCell()
let likeCell = row.insertCell()
let deleteCell = row.insertCell()

// insert user data into the table

userCell.innerHTML = userName
pointCell.innerHTML = userLikes
deleteCell.innerHTML = '<button onClick="deleteUser('+"'"+userID+"'"+')">delete</button>'
likeCell.innerHTML = '<button onClick="likeUser('+"'"+userID+"'"+')">like</button>'
// set CSS for like/delete buttons
likeCell.className = "like"
deleteCell.className = "delete"


}


// function returns the index number of the user
function indexNumber(userID){
let indexNumber = 0
let likes = candidates[userID].likes
let name = candidates[userID].name


// first go through and count the number of people with more points, if points equal, then add point if name is further in alphabet

for (iteration in candidates){
	let iterationLikes = candidates[iteration].likes
	let iterationName = candidates[iteration].name

	if (candidates[iteration].userID != userID){
		if (iterationLikes > likes){
			indexNumber += 1
		}
		else if (iterationLikes == likes && iterationName > name){
			indexNumber +=1
		}
	}
}
	return indexNumber
}

// function deletes user from table based on userID

function deleteUser(userID){
	//let userLikes = candidates[userID].likes
	let tableIndex = indexNumber(userID)
	namesTable.deleteRow(tableIndex)
		
	delete candidates[userID]
	
}

//function adds a point to a user's like and 
// updates position in table (if need be)

function likeUser(userID){
let likes = parseInt(candidates[userID].likes)+1
let userName = candidates[userID].name
deleteUser(userID)
let newID = createUser(userName,likes)

}
function buttonSubmit(){
createUser($("#newName").val())
$("#newName").val("")
}
createTable()
