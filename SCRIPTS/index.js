

const logo = document.getElementById("logo");
const mostrarAlerta = () => { 
    alert("le diste click al logo")
    console.log("le diste click al logo")
}
logo.onclick = mostrarAlerta;
