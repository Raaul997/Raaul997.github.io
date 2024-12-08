// ------------------------------ WEB PORTFOLIO ---------------------------- //
// Modo oscuro y modo claro
const cambioContenedor = document.getElementById("cambioContenedor");
const sun = document.getElementById("sun");
const cambioTxt = document.getElementById("cambioTxt");

cambioContenedor.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(sun.src.includes("moon.svg")){
    
        sun.src = "icons/sun.svg";
        cambioTxt.textContent = "Light Mode";

    }else{

        sun.src = "icons/moon.svg";
        cambioTxt.textContent = "Dark Mode";

    }
});