import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";



var button = document.getElementById("button-1");

var output = document.getElementById("div-1");

var north = document.getElementById("north");
var south = document.getElementById("south");
var east = document.getElementById("east");
var west = document.getElementById("west");

north.addEventListener("click", function(){
    alert("North");
})
south.addEventListener("click", function(){
    alert("South");
})
east.addEventListener("click", function(){
    alert("East");
})
west.addEventListener("click", function(){
    alert("West");
})
button.addEventListener("click", getJoke())

function getJoke(){
    const promise1 = fetch('https://studypoints.info/jokes/api/jokes/period/hour');
    const promise2 = promise1.then(function(response){
        return response.json();
    })
    promise2.then(function(data){
        output.innerHTML = data.joke;
    })
}

window.onload = function() {
    setInterval(() => {
        getJoke();
    }, 3600000);
};




