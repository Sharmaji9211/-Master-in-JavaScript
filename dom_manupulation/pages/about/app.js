document.addEventListener('DOMContentLoaded', () => {
    const aboutContent = document.getElementById('about-content');

    // Fetch the JSON data from a file or API
    fetch('data.json')  // Replace with your API endpoint if it's a live API
        .then(response => response.json())
        .then(data => {
            // Inject the data into the HTML
            const company = data.company;
            const team = data.team;

            let companyHTML = `
                <h2>${company.name}</h2>
                <p><strong>Founded:</strong> ${company.founded}</p>
                <p><strong>Mission:</strong> ${company.mission}</p>
                <p>${company.description}</p>
            `;

            let teamHTML = `<h3>Our Team</h3>`;
            team.forEach(member => {
                teamHTML += `
                    <div>
                        <h4>${member.name} - ${member.position}</h4>
                        <p>${member.bio}</p>
                    </div>
                `;
            });

            // Combine all the HTML and inject it into the page
            aboutContent.innerHTML = companyHTML + teamHTML;
        })
        .catch(error => console.error('Error fetching data:', error));
});
