let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #fb4993;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #D0A2F7;"> Ingeniera en proceso ... .</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
