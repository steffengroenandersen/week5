/*
    Event Handler.. on click
    activate method, that takes value from input
    and creates a new string https://jsonplaceholder.typicode.com/users/INPUT
    creates innerHTML of p tag?
*/

const URL = "https://jsonplaceholder.typicode.com/users/";

document.querySelector("#show-user").innerHTML = "User X!";


document.querySelector("#get-user-button").onclick = (evt) => {
    evt.preventDefault();
    console.log("User Button was Clicked!");
    showUser();

 
}

// Function that display the user inside innerHTML
async function showUser(){
    const userId = document.querySelector("#user-id-input").value;
    const userObject = await fetchUserById(userId);
    console.log(userObject);

}

// Function that fetches one user by id
async function fetchUserById(userId){
    const response = await fetch(URL + "/" + userId);
    return await response.json();
}

// TODO: Function that transform userObject toString


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

