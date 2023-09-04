
const textarea = document.getElementById('miTextarea');
const contador = document.getElementById('contador');


textarea.addEventListener('input', function () {
    const longitudTexto = textarea.value.length;

    contador.textContent = longitudTexto;

    if (longitudTexto >= 200) {
        textarea.value = textarea.value.substring(0, 200);
        contador.style.color = 'red'; 
    } else {
        contador.style.color = 'black'; 
    }
});
