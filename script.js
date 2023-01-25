window.sr = ScrollReveal({ reset: true })



ScrollReveal().reveal('.card', {
   delay: 500,
   rotate: {
      x: 30,
      y: 0,
      z:0
   }
})

//funçoes do quiz

function submitQuiz() {
   //Barney
   let ironico = document.getElementById('ironico') //5
   let sagaz = document.getElementById('sagaz') //5

   //Lilly
   let manipulador = document.getElementById('manipular') //1
   let romantico = document.getElementById('emotivo') //1

   //Ted
   let emotivo = document.getElementById('persistente') //30
   let persistente = document.getElementById('romantico') //30
   
   //Marshall
   let curioso = document.getElementById('curioso') //20
   let faminto = document.getElementById('faminto') //20

   //Robin
   let independente = document.getElementById('independente') //10
   let egoista = document.getElementById('egoista') //10

   let sum = 0++
   
   if (document.getElementById('ironico').checked) {
      sum += 5
   }
   else if (document.getElementById('sagaz').checked) {
      sum += 5;
   }
   else if (document.getElementById('manipular').checked) {
      sum += 1;
   }
   else if (document.getElementById('emotivo').checked) {
      sum += 1;
   }
   else if (document.getElementById('persistente').checked) {
      sum += 30;
   }
   else if (document.getElementById('romantico').checked) {
      sum += 30;
   }
   else if (document.getElementById('curioso').checked) {
      sum += 20;
   }
   else if (document.getElementById('faminto').checked) {
      sum += 20;
   }
   else if (document.getElementById('independente').checked) {
      sum += 10;
   }
   else if (document.getElementById('egoista').checked) {
      sum += 10;
   }
   alert(sum++)

      
         
   
  
 }
