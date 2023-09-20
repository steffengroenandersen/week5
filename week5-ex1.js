/*
    Exercise 1
*/

const URL = "https://jsonplaceholder.typicode.com/users/";

document.querySelector("#get-user-button").onclick = (evt) => {
    evt.preventDefault();
    console.log("Get User Button was Clicked!");
    showUser();
}

// Function that display the user inside innerHTML
async function showUser(){
    const userId = document.querySelector("#user-id-input").value;
    const userObject = await fetchUserById(userId);
    console.log(userObject);
    const userHTML = convertUserObjectToString(userObject);
    const showUserHTML = document.querySelector("#show-user");
    showUserHTML.innerHTML = userHTML;
}

// Function that transform userObject toString
function convertUserObjectToString(userObject){
    return  "<p>" + "Name: " + userObject.name +  "<br />" + "Email: " + userObject.email + "</p>" +
            "<p>" + "Address: " + "<br />" + 
            "City: " + userObject.address.city + "<br />" +
            "Street: " + userObject.address.street + "</p>";
}

// Function that fetches one user by id
async function fetchUserById(userId){
    const response = await fetch(URL + "/" + userId);
    return await response.json();
}

/*

    Exercise 2

*/

// Add event listener
document.querySelector("#get-all-users-button").onclick = (evt) => {
    evt.preventDefault();
    console.log("Get All Users Button Clicked");
    showAllUsers();
}

// Function that displays all users in table
async function showAllUsers(){
    // fetch all users from api
    const allUsers = await fetchAllUsers();
    
    // convert array to proper html syntax
    const allUsersHTML = allUsers.map(u => `<tr><td>${u.name}</td><td>${u.email}</td></tr>`).join("");
    
    // change innerHTML
    const userTableData = document.querySelector("#tbody");
    userTableData.innerHTML = allUsersHTML;
}

// function that fetches from db
async function fetchAllUsers(){

    const response = await fetch(URL)
        .then(res => res.json())
        .then(data => data);
    console.log(response);
    return await response;
}

/*

    Example of simple fetch

    fetch(URL)
    .then(res => res.json())
    .then(data => console.log(data));

*/

/*
    Example of fetch

    fetch('https://jsonplaceholder.typicode.com/users/')
    .then( res => {
        if(res.ok){
            console.log("SUCCESS");
        } else {
            console.log("NOT SUCCESFULL");
        }
    }).catch(error => console.log("ERROR"))
*/

