// Seleccionamos todos los botones en la página
const botones = document.querySelectorAll('button');

// Establecemos el enlace al que quieres redirigir
const enlace = 'https://wa.me/5492233554211'; // Cambia este enlace por el que necesites

// Asignamos la redirección a todos los botones
botones.forEach(boton => {
    boton.addEventListener('click', function() {
        window.location.href = enlace; // Redirige al enlace cuando se hace clic
    });
});
