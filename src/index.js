const init = () => {
  const inputForm = document.querySelector('form');

  inputForm.addEventListener('submit', event => {
    event.preventDefault();
    const input = document.querySelector('#searchByID');

    fetch(`http://localhost:3000/movies/${input.value}`)
    .then(resp => resp.json())
    .then(json => {
      const title = document.querySelector('#movieDetails h4');
      const summary = document.querySelector('#movieDetails p');

      title.textContent = json.title;
      summary.textContent = json.summary;
    })
  });
  
}

document.addEventListener('DOMContentLoaded', init);