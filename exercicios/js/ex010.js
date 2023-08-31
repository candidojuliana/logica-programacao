// Para este exercicio aplique a lógica necessária para mostrar os anos que são realmente bissextos, respeitando a regra: Os anos bissextos são múltiplos de 4, não múltiplos de 100 (1900 não é bissexto) e múltiplos de 400 (2000 é bissexto).

var ano = 1000

while(ano <= 2017){
   ano = ano + 4

   if(ano % 4 === 0){
      document.write(ano + '<br>');
   }
}





