// Setting variables
let inputData = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-button");
let showData = document.querySelector(".show-data span");
let reposData = document.querySelector(".show-data");

getButton.onclick = function () {
    getData();
}

function getData() {
    // Check if input is empety
    if (inputData.value === '') {
        // Add message to user
        showData.innerHTML = "Please Enter repo's username!"
    } else {
        // fetching data
      fetch(`https://api.github.com/users/${inputData.value}/repos`)
      // get data in json
     .then((response) => response.json())
     // return data
     .then((repos) => {
        
        showData.innerHTML = "";
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
        // Create stars span
        let starsSpan = document.createElement("span");
        // Create text for span
        let starsSpanText = document.createTextNode(`Stars count is : ${repo.stargazers_count}`);
        // Add text to span
        starsSpan.appendChild(starsSpanText);
        // Add stars to mainDiv
        mainDiv.appendChild(starsSpan);
        // Add Class On Main Div
        mainDiv.className = 'repo-box';
        // Append The Main Div To Container
        reposData.appendChild(mainDiv);
        });
        
     });
        
    }
     
}