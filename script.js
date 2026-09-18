const API_URL = "http://localhost:5000/api";

// LOGIN
async function loginUser(event) {
    if (event) event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch(API_URL + "/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        const data = await response.json();

        if (response.ok) {
            alert("Login successful!");
        } else {
            alert(data.message || "Login failed");
        }

    } catch (error) {
        console.log(error);
        alert("Backend se connection nahi ho raha");
    }
}


// ADD BOOK
async function addBook(event) {
    if (event) event.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;
    const category = document.getElementById("category").value;
    const quantity = document.getElementById("quantity").value;

    try {
        const response = await fetch(API_URL + "/books", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: title,
                author: author,
                isbn: isbn,
                category: category,
                quantity: quantity
            })
        });

        const data = await response.json();

        if (response.ok) {
            alert("Book added successfully!");
        } else {
            alert(data.message || "Book add nahi hua");
        }

    } catch (error) {
        console.log(error);
        alert("Backend se connection nahi ho raha");
    }
}


// ADD STUDENT
async function addStudent(event) {
    if (event) event.preventDefault();

    alert("addStudent function chal raha hai");

    const name = document.getElementById("studentname").value;
    const studentId = document.getElementById("studentId").value;
    const course = document.getElementById("course").value;
    const email = document.getElementById("email").value;

    try {
        const response = await fetch(API_URL + "/students", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                studentId: studentId,
                course: course,
                email: email
            })
        });

        const data = await response.json();

        if (response.ok) {
            alert("Student added successfully!");
        } else {
            alert("Student add nahi hua: " + (data.message || "Unknown error"));
        }

    } catch (error) {
        console.log(error);
        alert("Backend se connection nahi ho raha");
    }
}