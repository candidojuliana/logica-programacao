// Pedir para o usuário digitar um número e depois mostrar este número multiplicado por números de 1 a 1000

var numero = prompt("Digite um número: ");
   numero = parseFloat(numero);

var indice = 1;

while (indice <= 1000) {
   document.write(numero + ' x ' + indice + ' = ' + (numero * indice) + '<br/>');

   indice = indice + 1;
}


