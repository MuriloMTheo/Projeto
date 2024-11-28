const btnAbrirJornal = document.getElementById('abrir-jornal');
const jornalContainer = document.querySelector('.jornal-container');
btnAbrirJornal.addEventListener('click', function() { 
    jornalContainer.classList.add('mostrar');
    btnAbrirJornal.style.display = 'none';
});
