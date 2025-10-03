function inverterForm() {
  const inputs = document.querySelectorAll(".formulario");
  
  let nomes = Array.from(inputs).map(input => input.value);
  
  nomes.reverse();

  inputs.forEach((input, index) => {
    input.value = nomes[index];
  });
};