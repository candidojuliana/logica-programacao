// Pedir dois numeros para o ususário e depois mostrar a soma destes números

        var n1 = prompt("Digite um número");
           n1 = parseFloat(n1);
            var n2 = prompt ("Digite mais um número");
            n2 = parseFloat(n2);
/* 
         Tudo que pedimos para o usuário digitar na tela, retorna como string, por isso é preciso converter esse texto em número usando parseInt(), parseFloat() */
        
            alert(n1 + n2);