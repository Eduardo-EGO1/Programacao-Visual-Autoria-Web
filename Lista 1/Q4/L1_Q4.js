function Movimento() {
        const texto = document.getElementById('Texto');
        if (texto.style.display === 'none') {
            texto.style.display = 'block';
        } else {
            texto.style.display = 'none';
        }
    }