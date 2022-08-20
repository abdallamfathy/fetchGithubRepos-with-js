// Setting variables
let inputData = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-button");
let showData = document.querySelector(".show-data span");
let showDataFetched = document.querySelector(".show-data");

getButton.onclick = function () {
    if (inputData.value === '') {
        showData.innerHTML = "Please Enter repo's username!"
    } else {
        getData();
        
         
    }
}

function getData() {
      fetch('https://api.github.com/users/hadley/orgs')
     .then((response) => response.json())
     .then((data) => console.log(data));
     showData.innerHTML = ""
}