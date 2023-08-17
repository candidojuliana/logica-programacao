// Fazer jogador1 e jogador2 digitar um número cada, se forem iguais, mostrar a mensagem de empate e encerrar o programa, se forem diferentes sortear um número entre o 0 e 1, se o sorteado for 0, ganha quem escolher o número menor, senão ganha quem escolheu o menor

var nJogador1 = prompt("Digite um número Jogador 1");
   nJogador1 = parseInt(nJogador1);

var nJogador2 = prompt("Digite outro número Jogador 2");
   nJogador2 = parseInt(nJogador2);

if(nJogador1 === nJogador2) {
   alert("Vocês empataram");
} else {
   var nSorteado = parseInt(Math.random() * 2);

   if(nSorteado === 0) {
      if(nJogador1 < nJogador2) {
         alert('Ganhou o Jogador 1!');
      } else {
         alert('Ganhou o Jogador 2!');
   
      }
 } else {
   if(nJogador1 > nJogador2){
      alert('Ganhou jogador 1!');
   } else {
      alert('Ganhou Jogador 2!')
   }
 }
}