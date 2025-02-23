/*Efecto para menu*/
var burgerMenu = document.getElementById('burger-menu');
var show = document.getElementById('menu');

burgerMenu.addEventListener('click', function(){
    this.classList.toggle("close");
    show.classList.toggle("show");
})


//this code work to animate loader
window.addEventListener("load", function() {
    const loader = document.querySelector(".loader");
    loader.className += " hidden";
});

// checkbox buton idiom

// Al cargar la página, recupera el estado del checkbox y ajusta los textos
window.addEventListener('load', function() {
    const checkboxState = localStorage.getItem('checkboxState'); // Recupera el estado del checkbox desde localStorage
    const checkbox = document.querySelector('.check'); // Selecciona el checkbox

    if (checkboxState === 'true') { // Si el estado es 'true'
        checkbox.checked = true; // Marca el checkbox como seleccionado
    } else {
        checkbox.checked = false; // De lo contrario, no lo marca
    }

    // Selecciona todos los elementos con las clases .textBox1 y .textBox2
    const textBoxes1 = document.querySelectorAll('.textBox1');
    const textBoxes2 = document.querySelectorAll('.textBox2');
    
    // Recorre todos los pares de elementos
    textBoxes1.forEach(function(textBox1, index) {
        const textBox2 = textBoxes2[index]; // Selecciona el par correspondiente
        
        if (checkbox.checked) { // Si el checkbox está seleccionado
            textBox1.style.display = 'none'; // Oculta el texto 1
            textBox2.style.display = 'block'; // Muestra el texto 2
        } else {
            textBox1.style.display = 'block'; // Muestra el texto 1
            textBox2.style.display = 'none'; // Oculta el texto 2
        }
    });
});

// Código que ya tienes para guardar el estado del checkbox cuando cambia
document.querySelectorAll('.check').forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        // Guardar el estado del checkbox en LocalStorage
        localStorage.setItem('checkboxState', checkbox.checked);

        // Selecciona todos los elementos con las clases .textBox1 y .textBox2
        const textBoxes1 = document.querySelectorAll('.textBox1');
        const textBoxes2 = document.querySelectorAll('.textBox2');
        
        // Recorre todos los pares de elementos
        textBoxes1.forEach(function(textBox1, index) {
            const textBox2 = textBoxes2[index]; // Selecciona el par correspondiente
            
            if (checkbox.checked) {
                textBox1.style.display = 'none';
                textBox2.style.display = 'block';
            } else {
                textBox1.style.display = 'block';
                textBox2.style.display = 'none';
            }
        });
    });
});


/*Efecto de textos animados*/
let animux = document.querySelectorAll(".animux");

function mostrarscroll(){
    let scrollTop = document.documentElement.scrollTop;
    for (var i=0; i< animux.length; i++ ) {
        let alturaanimux = animux[i].offsetTop;
        if (alturaanimux - 500 < scrollTop) {
            animux[i].style.opacity =1;
            animux[i].classList.add("mostrarArriba");
        }
    }
}

window.addEventListener('scroll', mostrarscroll);

// this efect work to show preview of img of sections certified

document.addEventListener('DOMContentLoaded', () => {
	const imgLightBox = document.querySelectorAll('.materialboxed');
	M.Materialbox.init(imgLightBox, {
		inDuration: 500,
		outDuration: 500
	});
});



//scrpt para cambio de imagen
const images = [
    { url: "../img/fondo2.jpg", class: "" }, // Imagen normal
    { url: "../img/fondo22.jpg", class: "light-background" }, // Imagen clara
    { url: "../img/fondo222.jpg", class: "" } // Imagen normal
];

let currentIndex = 0;
const backgroundElement = document.querySelector(".background-image-two");

function changeBackground() {
    // Actualiza la imagen
    currentIndex = (currentIndex + 1) % images.length;
    backgroundElement.style.backgroundImage = `url(${images[currentIndex].url})`;

    // Actualiza la clase
    backgroundElement.className = `background-image-two ${images[currentIndex].class}`;
}

// Cambiar cada 5 segundos
setInterval(changeBackground, 5000);




