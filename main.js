// Setting variables
let inputData = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-button");
let showData = document.querySelector(".show-data span");
let reposData = document.querySelector(".show-data");

getButton.onclick = function () {
    if (inputData.value === '') {
        showData.innerHTML = "Please Enter repo's username!"
    } else {
        getData();
        showData.innerHTML = ""
         
    }
}

function getData() {
      fetch('https://api.github.com/users/hadley/orgs')
     .then((response) => response.json())
     .then((repos) => {
        repos.forEach(repo => {
        // Create div
        let mainDiv = document.createElement("div");
        // Create text
        let repoName = document.createTextNode(repo.name);
        // Add text to mainDiv
        mainDiv.append(repoName);
        // Create Anchor tag
        let link = document.createElement("a");
        // Add text to tag
        let linkText = document.createTextNode("visit");
        // Add text to link
        link.appendChild(linkText);
        // Add href to link
        link.href = `https://github.com/${inputData.value}/${repo.name}`;
        // Add link to mainDiv
        mainDiv.appendChild(link);
        });
        
     });
     
}