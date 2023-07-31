
//Modal en contactame//
const myModal = document.getElementById('modal-contactame');
const myElement = document.getElementById('modal-contactame');

myModal.addEventListener('shown.bs.modal', () => {
  myElement.focus()
})


//--------------------------------------//
//ANIMACIÓN EN MI NOMBRE//
var app = document.getElementById('typewriter');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
});

typewriter
//1000 milisegundos es 1 sendos 
  .pauseFor(1000)
  .typeString('Aime Hernández')
  .pauseFor(300)
  .deleteChars(15)
  .typeString('Aime Hernández')
  .pauseFor(300)
  .start();
