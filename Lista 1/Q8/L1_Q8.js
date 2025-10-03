function validarCPF() {
    const cpfInput = document.getElementById('cpf');
    const resultado = document.getElementById('resultado');
    const cpf = cpfInput.value;

    if (cpf.length !== 11 || isNaN(cpf)) {
        resultado.textContent = 'CPF inválido';
        resultado.style.color = 'red';
        return;
    }

    if (/^(\d)\1{10}$/.test(cpf)) {
        resultado.textContent = 'CPF inválido';
        resultado.style.color = 'red';
        return;
    }

    if (cpf.startsWith("123456789") || cpf.startsWith("987654321")) {
        resultado.textContent = 'CPF inválido';
        resultado.style.color = 'red';
        return;
    }

    resultado.textContent = 'CPF válido';
    resultado.style.color = 'green';
}
