// function pergunte(pergunta, sim, nao){
// if (confirm(pergunta)) sim()
// else nao()
// }

// function mostrarOk(){
//     alert("Você concordou." );
// }

// function mostrarCancel(){
//     alert("Você cancelou a execução");
// }

// // Chamando a função pergunte com os parâmetros em ordem
// pergunte("Você concorda?", mostrarOk, mostrarCancel);

// let digaOi = function(){
//     alert("oi")
// }
// let func = digaOi

// digaOi();//Hello!
// func();//hello!

// function ask(question, yes, no){
//     if (confirm(question))yes()
//     else no()
// }

// ask(
//     "Do you agree?",
//     function () {alert("You agreen.");},
//     function () {alert("You canceled the execution");},
// );


// function pergunte(pergunta, sim, nao){
// if (confirm(pergunta)) sim()
// else nao()
// }

// function mostrarOk(){
//     alert("Aqui está seus Cookies!" );
    
// }

// function mostrarCancel(){
//     alert("Você não quiz Cookies!");
// }


// // Chamando a função pergunte com os parâmetros em ordem
// pergunte("Você quer Cookies?", mostrarOk, mostrarCancel);



// // Chamando a função pergunte com os parâmetros em ordem
// pergunte("Você concorda?", mostrarOk, mostrarCancel);

   
// function perguntarInformacao(pergunta, condicao) {
//     let resultado = prompt(pergunta);
    
//     while (!condicao(resultado)) {
//       alert("Resposta incorreta. Tente novamente.");
//       resultado = prompt(pergunta);
//     }
  
//     alert("Resposta correta!");
//   }
  
//   function condicaoCapitalBrasilia(entrada) {
//     // Vamos considerar a resposta correta sendo "Brasília" (case-insensitive)
//     return entrada.trim().toLowerCase() === "brasilia";
//     // .trim().toLowerCase() para resposta com letra maiuscula e minuscula
//   }
  
//   // Exemplo de uso:
//   perguntarInformacao("Qual é a capital do Brasil?", condicaoCapitalBrasilia);