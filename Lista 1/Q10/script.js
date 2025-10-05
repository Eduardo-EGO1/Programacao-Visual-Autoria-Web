const result = document.querySelector('.result')
const numbers = document.querySelectorAll('.numbers')

function criarTabela() {

result.innerHTML = '';

const arrayN = Array.from(numbers).map(n => parseFloat(n.value) || 0); // resultado da transformação de nodelist dos inputs recebidos em array, transformar de string para numero 
const soma = arrayN[0] + arrayN[1] + arrayN[2];
const media = (arrayN[0] + arrayN[1] + arrayN[2]) / 3;
const produto = arrayN[0] * arrayN[1] * arrayN[2];
const maior = Math.max(...arrayN); // método que verifica o maior número passado pelos argumentos, no caso de array, utiliza "..." para servir cada item como parametro 
const menor = Math.min(...arrayN); // método que verifica o menor número passado pelos argumentos, no caso de array, utiliza "..." para servir cada item como parametro
const resultados = [soma, media, produto, maior, menor];


resultados.forEach(calculo => { // criando dinamicamente uma nova coluna, que recebe o valor igual ao index atual
  const td = document.createElement('td');
  td.textContent = calculo;
  result.appendChild(td);
 });

}