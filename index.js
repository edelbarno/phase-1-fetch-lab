document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
function fetchBooks() {
  fetch("https://anapioficeandfire.com/api/books")
  return fetch("https://anapioficeandfire.com/api/books")
    .then(response => response.json())
    .then(json => renderBooks(json))
}

  function renderBooks(books) {
    const object = document.getElementById('object');
  
}
