const url = "https://vvri.pythonanywhere.com/api/courses";

//GET
fetch(url)
    .then(response => response.json())
    .then(json => {
        let ki = `<tr><th>Id</th><th>Course</th></tr>`;
        json.forEach(courses => {
            ki += `<tr>
                <td id="size">${courses.id}</td>
                <td >${courses.name}</td>
            </tr>`;
        });
        document.getElementById("ki").innerHTML = ki;
    });


//POST
function postolj() {
    let postolando = document.getElementById("inp").value;
    fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                name: postolando
            }),
        })
        .then(response => response.json())
        .then(json => {
            console.log("Kurzus létrehozva", json);
            fetch(url)
                .then(response => response.json())
                .then(json => {
                    let ki = `<tr><th>Id</th><th>Course</th></tr>`;
                    json.forEach(courses => {
                        ki += `<tr>
                            <td>${courses.id}</td>
                            <td>${courses.name}</td>
                        </tr>`;
                    });
                    document.getElementById("ki").innerHTML = ki;
                });
        })
        .catch(error => console.error('Error a kurzus létrehozásánál:', error));
}

//SEARCH
function kereses() {
    let id = document.getElementById("courseid").value;
    fetch("https://vvri.pythonanywhere.com/api/courses/" + id)
        .then(response => {
            if (!response.ok) {
                throw new Error("A megadott kurzus nem található.");
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("adatok").innerHTML = `
                <p>Kurzus ID: ${data.id}</p>
                <p>Név: ${data.name}</p>
            `;
        })
        .catch(error => {
            document.getElementById("adatok").innerHTML = `<p>${error.message}</p>`;
        });
}


function kiiras(courses) {
    let ki = document.getElementById("adatok");
    ki.innerHTML += "<div>Id: " + courses.id + "\n</div>";
    ki.innerHTML += "<div>Name: " + courses.name + "\n</div>";
    document.getElementById("lab").style.display = "none";
    console.log(ki);
}

//DIAK HOZZADASA
function diakhozza() {
    let postolando = document.getElementById("inp").value;
    fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                name: postolando
            }),
        })
        .then(response => response.json())
        .then(json => {
            console.log("Kurzus létrehozva", json);
            fetch(url)
                .then(response => response.json())
                .then(json => {
                    let ki = `<tr><th>Id</th><th>Course</th></tr>`;
                    json.forEach(courses => {
                        ki += `<tr>
                            <td>${courses.id}</td>
                            <td>${courses.name}</td>
                        </tr>`;
                    });
                    document.getElementById("ki").innerHTML = ki;
                });
        })
        .catch(error => console.error('Error a kurzus létrehozásánál:', error));
}
