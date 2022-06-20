var requests = document.querySelector('#conrequest');
var connection = document.querySelector('#yourcon');
var username = document.querySelector('#username');

console.log("page loaded...");

function accept(id) {
    var element= document.querySelector(id);
    element.remove();
    requests.innerText--;
    connection.innerText++;
}

function ignore(id) {
    var element= document.querySelector(id);
    element.remove();
    requests.innerText--;

}

function edit() {
    username.innerText = "Alayne T";
}
