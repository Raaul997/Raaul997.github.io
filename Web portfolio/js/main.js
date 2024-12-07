// * Tarjeta izquierda
const tarjeta1 = document.querySelector('#tarjeta1');

tarjeta1.addEventListener('click', () => {
	tarjeta1.classList.toggle('active');
});

// * Tarjeta medio
const tarjeta2 = document.querySelector('#tarjeta2');

tarjeta2.addEventListener('click', () => {
	tarjeta2.classList.toggle('active');
});

// * Tarjeta derecha
const tarjeta3 = document.querySelector('#tarjeta3');

tarjeta3.addEventListener('click', () => {
	tarjeta3.classList.toggle('active');
});

// * Corazón Votaciones

const heartIcons = document.querySelectorAll(".like-button .heart-icon");
const likesAmountLabels = document.querySelectorAll(".like-button .likes-amount");

let likesAmounts = [300, 209, 309]; 

heartIcons.forEach((heartIcon, index) => {
  heartIcon.addEventListener("click", () => {
    
    heartIcon.classList.toggle("liked");

    if (heartIcon.classList.contains("liked")) {
      likesAmounts[index]++;
    } else {
      likesAmounts[index]--;
    }
    likesAmountLabels[index].innerHTML = likesAmounts[index];
  });
});