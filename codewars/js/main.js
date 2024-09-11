let userData = null;

function fetchData() {
    const username = document.getElementById('username').value.trim();
    if (!username) {
        document.getElementById('results').innerHTML = '<p>Please enter a username.</p>';
        return;
    }

    const url = `https://www.codewars.com/api/v1/users/${username}`;
    
    console.log(`Fetching data from URL: ${url}`);
    
    fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
    .then(response => {
        console.log('Response Status:', response.status);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        userData = data;
        console.log('Fetched data:', userData);
        showTotalPoints(); // Display data by default
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        document.getElementById('results').innerHTML = '<p>Error fetching data. Please check the username and try again.</p>';
    });
}

function showTotalPoints() {
    if (!userData || !userData.languages) {
        document.getElementById('results').innerHTML = '<p>No data available. Please fetch data first.</p>';
        return;
    }

    console.log('Displaying total points');

    let totalPoints = 0;
    let table = '<table><tr><th>Language</th><th>Points</th></tr>';
    
    for (const [language, points] of Object.entries(userData.languages)) {
        totalPoints += points;
        table += `<tr><td>${language}</td><td>${points}</td></tr>`;
    }
    
    table += `<tr><td><strong>Total Points</strong></td><td><strong>${totalPoints}</strong></td></tr></table>`;
    document.getElementById('results').innerHTML = table;
}

function showLanguagePoints() {
    if (!userData || !userData.languages) {
        document.getElementById('results').innerHTML = '<p>No data available. Please fetch data first.</p>';
        return;
    }

    console.log('Displaying language points');

    let table = '<table><tr><th>Language</th><th>Points</th></tr>';
    
    for (const [language, points] of Object.entries(userData.languages)) {
        table += `<tr><td>${language}</td><td>${points}</td></tr>`;
    }
    
    document.getElementById('results').innerHTML = table;
}
