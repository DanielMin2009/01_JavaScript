function runFunction01() {
    console.log("Hola Mundo!")
}

function runFunction02() {
    alert("Me llamo Daniel")
}

function runFunction03() {
    let name = "Daniel";
    let surname = "Minguella"

    document.getElementById("answer").innerHTML = "Me llamo " + name + " " + surname;
}

function runFunction04() {
    let n1 = 5;
    let n2 = 24;
    let result = n1 + n2;

    document.getElementById("answer").innerHTML = n1 + " + " + n2 + " = " + result;
}


function runFunction05() {

    let nota = 4.6;

    if (nota < 5) {
        alert("Ooh.., has suspensido el examen con un " + nota);
    } 
}

let commonPhrase = "Tinc un cotxe de color "; 

function runFunction06() {
    let green = "verd";
        
    document.getElementById("answer").innerHTML = commonPhrase + "<span class='green'>"  + green + "</span>";
    document.getElementById("click06").setAttribute("class", "dnone");
    document.getElementById("click06B").removeAttribute("class");
}

function changeFunction06() {
    let blue = "blau";

    document.getElementById("answer").innerHTML = commonPhrase + "<span class='blue'>"  + blue + "</span>";
    document.getElementById("click06B").setAttribute("class", "dnone");
    document.getElementById("click06").setAttribute("class", "dblock");
}

function clearData() {
    let clearData = "";
    clearData = document.getElementById("answer").innerHTML = "";
}



