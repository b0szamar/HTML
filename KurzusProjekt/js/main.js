const url = "https://vvri.pythonanywhere.com/api/courses";

//GET
function kiiras(){
fetch(url, {
    method: "GET",
    headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Access-Control-Allow-Origin": "*"
    }
})
    .then(response => response.json())
    .then(json => {
        let ki = `<tr><th>Id</th><th>Course</th><th colspan="25">Kurzus tagok</th></tr>`;
        json.forEach(courses => {
            ki += `<tr>
                <td id="size">${courses.id}</td>
                <td >${courses.name}</td>
            `;
            courses.students.forEach(student => {
                ki+=`<td>${student.id}, ${student.name}`
             })
        });
        document.getElementById("ki").innerHTML = ki;
    });

}
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
            kiiras()
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



//DIAK HOZZADASA
function postoljDiak() {
    let postolandodiak = document.getElementById("inpdiak").value;
    let selectedcourseid=document.getElementById("inpkurzus").value;
    fetch(`https://vvri.pythonanywhere.com/api/students`, {
            method: "POST",
            body: JSON.stringify({
                name: postolandodiak,
                course_id:selectedcourseid,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })

        .then(response => response.json())
        .then(json => {
            console.log("Diák hozzáadva", json);
            kiiras()
        })
        .catch(error => console.error('Error a diák létrehozásánál:', error));
}


function keresesdiak() {
    let id = document.getElementById("diakid").value;
    fetch(`https://vvri.pythonanywhere.com/api/students/` + id)
        .then(response => {
            if (!response.ok) {
                throw new Error("A megadott diák nem található.");
            }
            return response.json();
        })
        .then(student => {
            let studid=student.id
            document.getElementById("adatokdiak").innerHTML = `
            <p>Diák ID: ${studid}</p>
            <p>Név: ${student.name}</p>
            
            Meg szeretné megváltoztatni a nevét? <input type="text" id="nevvalt" placeholder="Új név" >  
            <button onclick="ujdiaknev(${studid})">Megváltoztatom!</button><br>
            <button onclick="deleteStudent(${studid})">Törlés!</button>
                `;
        })
        .catch(error => {
            document.getElementById("adatokdiak").innerHTML = `<p>${error.message}</p>`;
        });
}


function ujdiaknev(studid) {
    let ujnev = document.getElementById("nevvalt").value;

    fetch(`https://vvri.pythonanywhere.com/api/students/` + studid, {
        method: "PUT",
        body: JSON.stringify({
            name: ujnev,
            course_id: studid
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(json => {
        console.log("A név meg lett változtatva", json);
        kiiras();
    })
    .catch(error => console.error('Error a diák frissítésekor:', error));
}

function deleteStudent(studid) {
        fetch(`https://vvri.pythonanywhere.com/api/students/${studid}`, {
            method: 'DELETE'
        })
        .then(() => kiiras())
        .catch(error => console.log('Hiba történt a diák törlésekor: ' + error));
        console.log("Sikeres Törlés")
}
