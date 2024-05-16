const url = "https://vvri.pythonanywhere.com/api/courses";


//GET
async function kiiras() {
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Access-Control-Allow-Origin": "*"
            }
        });
        const json = await response.json();

        let ki = `<tr><th>Id</th><th>Course</th><th colspan="25">Kurzus tagok</th></tr>`;
        json.forEach(courses => {
            ki += `<tr>
                <td id="size">${courses.id}</td>
                <td>${courses.name}</td>
            `;
            courses.students.forEach(student => {
                ki += `<td>${student.id}, ${student.name}</td>`;
            });
        });
        document.getElementById("ki").innerHTML = ki;
    } catch (error) {
        console.error('Error during GET request:', error);
    }
}

//POST
async function postolj() {
    try {
        let postolando = document.getElementById("inp").value;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                name: postolando
            }),
        });
        const json = await response.json();
        console.log("Kurzus létrehozva", json);
        await kiiras();
    } catch (error) {
        console.error('Error a kurzus létrehozásánál:', error);
    }
}


async function kereses() {
    try {
        let id = document.getElementById("courseid").value;
        const response = await fetch(`https://vvri.pythonanywhere.com/api/courses/${id}`);
        if (!response.ok) {
            throw new Error("A megadott kurzus nem található.");
        }
        const data = await response.json();
        document.getElementById("adatok").innerHTML = `
            <p>Kurzus ID: ${data.id}</p>
            <p>Név: ${data.name}</p>
        `;
    } catch (error) {
        document.getElementById("adatok").innerHTML = `<p>${error.message}</p>`;
    }
}


//DIAK HOZZADASA
async function postoljDiak() {
    try{
    let postolandodiak = document.getElementById("inpdiak").value;
    let selectedcourseid=document.getElementById("inpkurzus").value;
    const response=await fetch(`https://vvri.pythonanywhere.com/api/students`, {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                name: postolandodiak,
                course_id:selectedcourseid,
            })
            
        })
        const json=await response.json();
        console.log("Diák hozzáadva", json);
            await kiiras()
        }
        catch(error){
            console.error('Error a diák létrehozásánál')
        }
    }



    async function keresesdiak() {
        try {
            let id = document.getElementById("diakid").value;
            const response = await fetch(`https://vvri.pythonanywhere.com/api/students/` + id);
            if (!response.ok) {
                throw new Error("A megadott diák nem található.");
            }
            const student = await response.json();
            let studid = student.id;
            document.getElementById("adatokdiak").innerHTML = `
                <p>Diák ID: ${studid}</p>
                <p>Név: ${student.name}</p>
                Szeretné megváltoztatni a nevét?  <input type="text" id="curid" placeholder="KurzusID" > <input type="text" id="nevvalt" placeholder="Új név" >  
                <button onclick="ujdiaknev(${studid})">Megváltoztatom!</button><br>
                <button onclick="deleteStudent(${studid})">Törlés!</button>
            `;
        } catch (error) {
            document.getElementById("adatokdiak").innerHTML = `<p>${error.message}</p>`;
        }
    }
    
    async function ujdiaknev(studid) {
        try {
            let ujnev = document.getElementById("nevvalt").value;
            let selectedcourseid = document.getElementById("curid").value;
    
            const response = await fetch(`https://vvri.pythonanywhere.com/api/students/` + studid, {
                method: "PUT",
                body: JSON.stringify({
                    name: ujnev,
                    course_id: selectedcourseid
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const json = await response.json();
            console.log("A név meg lett változtatva", json);
            await kiiras();
        } catch (error) {
            console.error('Error a diák frissítésekor:', error);
        }
    }
    
    async function deleteStudent(studid) {
        try {
            await fetch(`https://vvri.pythonanywhere.com/api/students/${studid}`, {
                method: 'DELETE'
            });
            await kiiras();
            console.log("Sikeres Törlés");
        } catch (error) {
            console.log('Hiba történt a diák törlésekor: ' + error);
        }
    }
