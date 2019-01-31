document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  // const button = document.querySelector('#button');
  // button.addEventListener('click', handleButtonClick);
  //
  // const textInput = document.querySelector('#input');
  // textInput.addEventListener('input', handleInput);
  //
  // const select = document.querySelector('#select');
  // select.addEventListener('change', handleSelectChange);

  const formDetails = document.querySelector('#new-item-form');
  formDetails.addEventListener('submit', handleFormSubmit);

  const formDelete = document.querySelector('#delete-form');
  formDelete.addEventListener('submit', handleFormDelete);
})


// const handleButtonClick = function () {
//   const resultParagraph = document.querySelector('#button-result');
//   resultParagraph.textContent = 'That button has definitely been clicked.';
// };
//
// const handleInput = function (event) {
//   const resultParagraph = document.querySelector('#input-result');
//   resultParagraph.textContent = `You typed: ${event.target.value}`;
// };
//
// const handleSelectChange = function (event) {
//   const resultParagraph = document.querySelector('#select-result');
//   resultParagraph.textContent = `You went with: "${event.target.value}".`;
// };

const handleFormSubmit = function (event) {
  event.preventDefault();
  const resultForm = document.querySelector('#reading-list-ul');
  const newListItem = document.createElement('li');
  newListItem.textContent = `
    Title: ${this.title.value} \r\n
    Author: ${this.author.value} \r\n
    Selection: ${this.category.value} \r\n
  `;

  resultForm.appendChild(newListItem);


  newListItem.classList.add("media-card");
  newListItem.classList.add("flex");


  formDetails = document.querySelector('#new-item-form');
  formDetails.reset();
};

const handleFormDelete = function (event){
  event.preventDefault();
  // const resultForm = document.querySelector('#reading-list');
  const resultFormul = document.querySelector('#reading-list-ul');
  // resultForm.removeChild(resultFormul);
  resultFormul.innerHTML = '';
  console.dir(handleFormDelete);
}


// const list = document.querySelector('ul');
//   list.appendChild(newListItem);
