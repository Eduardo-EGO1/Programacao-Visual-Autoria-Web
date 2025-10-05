  const nomes = document.querySelectorAll('.nomes');
  const nomeAlterado = document.getElementById ('nomes-misturados');


function misturaNome() {
  
  const nome1 = nomes[0].value;
  const nome2 = nomes[1].value;
  nomeAlterado.value = "";

  const max = (nome1.length) + (nome2.length);

  for (i = 0; i < max; i++) {
    if (i < nome1.length) {
      nomeAlterado.value += nome1[i]
    };     
    if (i < nome2.length) {
      nomeAlterado.value += nome2[i]
    }; 
  }
}
