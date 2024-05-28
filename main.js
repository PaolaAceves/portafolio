let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,//que se repita
  delay: 75,//la velocidad

});
 
typewriter
  .pauseFor(2500)
  .typeString('Estoy aprendiendo a desarrollar sitios web y este es mi portafolio.')
  // .typeString('Desarrollo sitios web y escribo artículos sobre programa')
  .pauseFor(200)
  .deleteChars(10)
  .start();
