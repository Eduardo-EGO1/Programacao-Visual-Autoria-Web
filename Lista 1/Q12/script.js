function searchAndHighlight() {
  const container = document.getElementById('textContainer');
  const searchInput = document.getElementById('pesquisar');
  const messageArea = document.getElementById('messageArea');

  if (!container.dataset.originalContent) {
    container.dataset.originalContent = container.innerHTML;
  }

  const originalHTML = container.dataset.originalContent;
  const searchTerm = searchInput.value.trim();

  container.innerHTML = originalHTML;
  messageArea.textContent = '';

  if (searchTerm === '') {
    messageArea.textContent = 'Digite uma palavra para pesquisar.';
    return;
  }

  const escapedSearchTerm = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(escapedSearchTerm, 'gi');

  const matches = originalHTML.match(regex);
  let count;

  if (matches) {
    count = matches.length;
  } else {
    count = 0;
  };

  if (count === 0) {
    messageArea.textContent = `Nenhum resultado encontrado para "${searchTerm}".`;
  } else {
    messageArea.textContent = ` ${count} palavra(s) encontrada(s) para "${searchTerm}".`;

    const highlightedHTML = originalHTML.replace(regex, (match) => {
      return `<span class="highlight">${match}</span>`;
    });
    container.innerHTML = highlightedHTML;
  }
}