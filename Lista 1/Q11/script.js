const result = document.querySelector('table')
const numbers = document.querySelector('#numbers')

function criarTabela() {

result.innerHTML = '';

const numero = parseInt(numbers.value || 0);

for (i = 0; i < 10; i++){ 
  
  let tabuada = [];
  tabuada = numero * [i+1];

  const tr = document.createElement('tr');
  const td1 = document.createElement('td');
  td1.textContent = `${numero} X ${[i+1]} é =`;
  const td2 = document.createElement('td');
  td2.textContent = tabuada;
  
  tr.appendChild(td1);
  tr.appendChild(td2);
  result.appendChild(tr);
 };
}