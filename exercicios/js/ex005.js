// Pedir para usuário digitar dois números, depois mostrar na tela o resto da divisão do primeiro número pelo segundo e em seguida mostrar o resultado da exponenciação do primeiro pelo segundo

var n1 = prompt("Digite um número");
   n1 = parseInt(n1);

var n2 = prompt("Digite outro número");
   n2 = parseInt(n2);

var resto = n1 % n2;

var expo = n1 ** n2;

alert("o resto da divisão de " + n1 + " por " + n2 + " é: " + resto);

alert("A exponenciação de " + n1 + " elevado a " + n2 + " é: " + expo);