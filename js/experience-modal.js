// const modalContainer = document.getElementById('.modal');
// const openModal = document.querySelector('.open-button');
// const closeModal = document.querySelector('.close-button');

const modalContainers = document.getElementsByClassName('modal');
const openModalButtons = document.getElementsByClassName('open-button');
const closeModalButtons = document.getElementsByClassName('close-button');

// openModalButtons.(button => {
//   button.addEventListener('click', () => {
//     const dialog = button.nextElementSibling
//   })
// }
 
// );

for (i = 0; i < openModalButtons.length; i++) {
  button = openModalButtons[i];
  const dialog = button.nextElementSibling;
  button.addEventListener('click', () => {
    dialog.showModal();
  });

}

for (i = 0; i < closeModalButtons.length; i++) {
  button = closeModalButtons[i];
  const dialog = button.parentElement;
  button.addEventListener('click', () => {
    dialog.close();
  });

}




// openModal.addEventListener("click", () => {
//   modalContainer.showModal();
// });

// closeModal.addEventListener("click", () => {
//   modalContainer.close();
// });
