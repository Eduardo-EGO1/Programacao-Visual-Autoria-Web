function verificar() {
    const p = document.getElementById('palavra').value;

    if (!p) {
        alert('Digite uma palavra!');
        return;
    }

    let palindromo = true;
    for (let i = 0; i < p.length / 2; i++) {
        if (p[i] !== p[p.length - 1 - i]) {
            palindromo = false;
            break;
        }
    }

    alert(palindromo ? 'É palíndromo!' : 'Não é palíndromo!');
}
