// Const Veriales
const projectsContainer = document.querySelector(".projectsContainer");
const root = document.documentElement;

// Script Helper Variales
let projectsData = [];
let hua = Math.floor(Math.random() * 358);

// Change link color every 1 second
function changeColor(){
    setInterval(() => {
        root.style.setProperty("--hua", hua + "deg");

        hua += 3;
        if (hua > 358){
            hua = 0;
        }


    }, 100);
}

// Set the Data
function setProjectsData() {
    projectsData.forEach(project => {
        let projectKey = project.key;
        let projectName = project.name;
        let projectUrlCode = project.url;
        let projectGenre = project.genre;
        let projectLanguages = project.languages;

        let projectHtml = `<div class="project">
        <div class="imageContainer">
            <a href="/img/${projectKey}.png" target="_blank"><img src="img/${projectKey}.png"
                    alt="${projectName} ${projectGenre}"></a>
        </div>
        <div class="descriptionContainer">
            <h2 class="projectName">${projectName}</h2>
           <p>Genre: <span>${projectGenre}</span></p>
           <p>Languages: <span>${projectLanguages}</span></p>
            <p class="links"><a href="https://theprojectsx.github.io/${projectUrlCode}" target="_blank">Live
                    Demo</a> <a href="https://github.com/TheProjectsX/${projectUrlCode}" target="_blank">Source
                    Code</a></p>
        </div>
    </div>`

        projectsContainer.innerHTML += projectHtml;
    });
}

// Get Data from File
function parseData() {
    fetch("data/projectDetails.json")
        .then(response => response.json())
        .then(data => {
            projectsData = data.data;
            setProjectsData();
        })
        .catch(error => console.error(error));
}

changeColor();
parseData();

