// Importamos nuestro propio SASS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import web1 from '../assets/web1.jpg'

import web2 from '../assets/web2.png'

import web3 from '../assets/web3.jpg'

import socialmedia from '../assets/social-media-logo-in-black-and-white-color-free-vector.png'

import gustis from '../assets/GustisBanner.png'

import curro from '../assets/fotocurro.png'

import training from '../assets/training2.png'

import cafeteria from '../assets/cafeteria.png'

import cifp from '../assets/screenshot12.jpg'

import kittens from '../assets/screenshot.png'

import logos from '../assets/logos.png'

//---------------- Modal Pedir presupuesto --------------------

const myModal = document.getElementById('exampleModal')
const myInput = document.getElementById('myInput')

if(myModal){
    myModal.addEventListener('shown.bs.modal', () => {
    if(myInput){
        myInput.focus()
    }
    })
};


//------------------ Spinner Pedir presupuesto ------------------

document.addEventListener('DOMContentLoaded', function() {  //Añade un spinner al botón de enviar información para pedir presupuesto al pié del landing page
    var sendButton = document.getElementById('botonSpinner');
    if (sendButton) {
      sendButton.addEventListener('click', function() {
        // Agrega el spinner al botón
        this.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Enviando...';
      
        // Elimina el spinner después de 5 segundos
        setTimeout(() => {
          this.innerHTML = 'Enviar';
        }, 5000);
      });
    }
  });


// ---------------- Tooltip social-media ------------------------------

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))