// SELECTING ALL TEXT ELEMENTS */
var button01 = document.forms['myForm']['click01'];
var button02 = document.forms['myForm']['click02'];
var button03 = document.forms['myForm']['click03'];
var button04 = document.forms['myForm']['click04'];
var button05 = document.forms['myForm']['click05'];
var button06 = document.forms['myForm']['click06'];
var button06B = document.forms['myForm']['click06B'];
var button06C = document.forms['myForm']['click06C'];
var button07 = document.forms['myForm']['click07'];
var button08 = document.forms['myForm']['click08'];
var buttonClear = document.forms['myForm']['clear'];

// SETTING ALL EVENT LISTENERS
button01.addEventListener('click', runFunction01, true);
button02.addEventListener('click', runFunction02, true);
button03.addEventListener('click', runFunction03, true);
button04.addEventListener('click', runFunction04, true);
button05.addEventListener('click', runFunction05, true);
button06.addEventListener('click', runFunction06, true);
button06B.addEventListener('click', changeFunction06, true);
button06C.addEventListener('click', changeFunction06Again, true);
button07.addEventListener('click', runFunction07, true);
button08.addEventListener('click', calculate, true);
buttonClear.addEventListener('click', clearData, true);

function escalable(button) {
    let buttonElements = document.querySelectorAll(".button");
    for (var i = 0; i < buttonElements.length; i++) {
        if (button !== buttonElements[i]) {
            buttonElements[i].disabled = true;
        }
    }
}

function runFunction01() {
    escalable(button01);
    console.log("Hola Mundo");
}

function runFunction02() {
    alert("Me llamo Daniel")
    escalable(button02);
}

function runFunction03() {
    let name = "Daniel";
    let surname = "Minguella";

    document.getElementById("answer").innerHTML = "Me llamo " + name + " " + surname;

    escalable(button03);
}

function runFunction04() {
    let n1 = 5;
    let n2 = 24;
    let result = n1 + n2;

    document.getElementById("answer").innerHTML = n1 + " + " + n2 + " = " + result;

    escalable(button04);
}


function runFunction05() {

    let nota = 4.6;

    if (nota < 5) {
        alert("Ooh.., has suspensido el examen con un " + nota);
    }

    escalable(button05);
}

var commonPhrase = document.getElementById("commonPhrase").textContent;

function runFunction06() {
    var green = " verd";

    document.getElementById("answer").innerHTML = commonPhrase + "<span class='green'>" + green + "</span>";
    document.getElementById("click06").setAttribute("class", "dnone");
    document.getElementById("click06B").removeAttribute("class");
    document.getElementById("click06C").removeAttribute("class");
    document.getElementById("click06B").setAttribute("class", "bgGreen");

    escalable(button06);
}

function changeFunction06() {
    var blue = " blau";

    document.getElementById("answer").innerHTML = commonPhrase + "<span class='blue'>" + blue + "</span>";
    document.getElementById("click06B").setAttribute("class", "dnone");
    document.getElementById("click06").setAttribute("class", "dlineblock");
    document.getElementById("click06C").removeAttribute("class");
    document.getElementById("click06").setAttribute("class", "bgBlue");
    
    escalable(button06B);
}

function changeFunction06Again() {

    var newPhrase = commonPhrase.replace(/o/gi, "u");

    document.getElementById("answer").innerHTML = newPhrase;

    escalable(button06C);
}


function runFunction07() {

    var officeObjects = new Array("taula", "cadira", "ordinador", "llibreta");
    let i;

    for (i = 0; i < officeObjects.length; i++) {
        document.getElementById("answer").innerHTML += "a la posició " + (i + 1) + " hi ha: " + officeObjects[i] + "<br>";
    }

    escalable(button07);

    /*var officeObjects = [
        { id: 1, name: "taula" },
        { id: 2, name: "cadira" },
        { id: 3, name: "ordinador" },
        { id: 4, name: "llibreta" }
    ];

    function findByName(name) {
        return officeObjects.find(function (object) {
            return object.name === name;
        });
    }*/
    //console.log(findByName("taula"));
}

function clearData() {

    document.getElementById("answer").innerHTML = "";

    //To function06
    document.getElementById("click06B").setAttribute("class", "dnone");
    document.getElementById("click06C").setAttribute("class", "dnone");
    //document.getElementById("click06").setAttribute("class", "dlineblock");
    document.getElementById("calculadoraGrid").setAttribute("class", "dnone");

    var buttonElements = document.querySelectorAll(".button");

    disabled = true;

    for (var i = 0; i < buttonElements.length; i++) {
        buttonElements[i].disabled = false;
    }
}
