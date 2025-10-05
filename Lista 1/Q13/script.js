
function converterData() {
  const inputData = document.getElementById('data').value;
  const resultadoElement = document.getElementById('resultado');

  const meses = [
    "janeiro", "fevereiro", "março", "abril",
    "maio", "junho", "julho", "agosto",
    "setembro", "outubro", "novembro", "dezembro"
  ];

  const partesData = inputData.split('/');

  if (partesData.length !== 3) {
    resultadoElement.textContent = "Erro: Por favor, use o formato 'dd/mm/aaaa'.";
    return;
  }

  const dia = partesData[0];
  const mesNumero = parseInt(partesData[1]);
  const ano = partesData[2];

  const indiceMes = mesNumero - 1;

  if (isNaN(mesNumero) || mesNumero < 1 || mesNumero > 12) {
    resultadoElement.textContent = "Erro: O mês é inválido.";
    return;
  }
  const mesExtenso = meses[indiceMes];

  const dataExtenso = `${dia} de ${mesExtenso} de ${ano}`;
  resultadoElement.textContent = dataExtenso;
}

function formatarDataInput() {
    const input = document.getElementById('data');
    let valor = input.value.replace(/\D/g, ''); 

    if (valor.length > 2) {
        valor = valor.substring(0, 2) + '/' + valor.substring(2);
    }
    if (valor.length > 5) {
        valor = valor.substring(0, 5) + '/' + valor.substring(5, 9);
    }
    
    input.value = valor;
}