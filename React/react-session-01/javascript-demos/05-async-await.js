async function getUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if(!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const users = await response.json();
        users.forEach(user => {
            console.log(user.name);
        })
    } catch (error) {
        console.log("Error is: ", error.message);
    }
}
getUsers();

// Notes:
// fetch() : sends the HTTP request
// async : make the function asynchronous
// await : Promise settle hone tak us async function me execution pause karta hai
// response.json() : it parses the response body to JSON format
// try/catch : for error handling