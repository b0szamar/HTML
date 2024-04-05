/*fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(json => {
        let li = `<tr><th>id</th><th>Title</th></tr>`;
        json.forEach(user => {
            li += `<tr>
                <td>${user.id} </td>
                <td>${user.title}</td>        
            </tr>`;
        });
    document.getElementById("ki").innerHTML = li;
});*/
/*fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    body: JSON.stringify({
      userId: 2,
        title: "delectus aut",
        completed: false
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
.then(response => response.json())
.then(json => console.log(json));*/
/*fetch("https://jsonplaceholder.typicode.com/todos/5", {
    method: "PUT",
    body: JSON.stringify({
        title: "Szulejman",
        userId: 1,
        completed: true
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
.then(response => response.json())
.then(json => console.log(json));*/

/*fetch("https://jsonplaceholder.typicode.com/todos/6", {
    method: "PATCH",
    body: JSON.stringify({
        title: "Babkonzerv",
            completed: false,
            userId: 3
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
.then(response => response.json())
.then(json => console.log(json));*/

fetch("https://jsonplaceholder.typicode.com/todos/4", {
    method: "DELETE",
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
.then(response => {
    if (response.ok) {
        return response.json();
    }
    throw new Error('Network response was not ok.');
})
.then(json => console.log(json))
.catch(error => console.error('There was a problem with the fetch operation:', error));