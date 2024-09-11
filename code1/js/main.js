function olvasas() {
    let user = document.getElementById('inp').value;  // Use 'inp' as the ID of the input element
    let url = `https://www.codewars.com/api/v1/users/${user}`;

    fetch(url, {
        method: "GET",
        headers: {
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();  
    })
    .then(json => {
        let ki = user;
        if (Array.isArray(json)) {
            json.courses.forEach(course => {
                ki += `<tr>
                    <td id="size">${course.id}</td>
                    <td>${course.name}</td>`;
                
                // Ensure students is an array
                if (Array.isArray(course.students)) {
                    course.students.forEach(student => {
                        ki += `<td>${student.id}, ${student.name}</td>`;
                    });
                }
                
                ki += `</tr>`;
            });
        }
        
        // Insert HTML into the document
        document.getElementById("ki").innerHTML = ki;
    })
    .catch(error => {
        // Handle errors
        console.error('Error during GET request:', error);
    });
}
