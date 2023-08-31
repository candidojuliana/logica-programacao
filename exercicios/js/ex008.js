// Para esta tarefa reescreva o código da aula anterior, mas inserindo uma linha divisória sempre que mudar a dezena. Ou seja, entre o 10 e o 11, entre o 20 e o 21 e assim por diante.


var numero = prompt("Digite um número: ");
   numero = parseFloat(numero);

var indice = 1;

while (indice <= 1000) {
   document.write(numero + ' x ' + indice + ' = ' + (numero * indice) + '<br/>');
   
   
      if(indice % 10 === 0) {
         document.write("<hr>")
      }
   indice = indice + 1;
}


