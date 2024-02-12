import './bootstrap/js/index.esm.js';
import './bootstrap/js/index.umd.js';

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})