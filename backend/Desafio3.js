/*
Dado um array cujos elementos representam o valor de determinada ação 
em determinado dia(index), retorne lucro máximo possível em uma transação
(compra e venda dessa ação)

Premissas:
1- Os números são inteiros e positivos;

Restrições:
E se não houver lucro, mas ao contrário, uma perda? -> Retornar 0.
Não pode-se vender uma ação antes de comprá-la.
Há sempre 2 valores no input?

Exemplos:

Input: [7,1,5,3,6,4]
Output: 5 (Comprou no dia 2 (preço igual a 1) e vendeu no dia 5 (preço
igual a 6), lucro foi de 6 – 1 = 5

Input: [7,6,4,3,1]
Output: 0 (Nesse caso nenhuma transação deve ser feita, lucro máximo
igual a 0)

*/

let input1 = [7,1,5,3,6,4]
let input2 = [7,6,4,3,1]

/* 
    Solução não otimizada
    Time complexity : O(N*N) -> devido ao for loop aninhado
    Space complexity : O(1)
*/

const buscarLucroMaximo = function(entrada) {
    let precoVenda = 0;
    let lucroMaximo = 0;

    for(p1 = 0; p1 < entrada.length; p1++){
        let precoCompra = entrada[p1];

        for(p2 = p1 + 1; p2 < entrada.length; p2++){

            if(precoVenda < entrada[p2])
                precoVenda = entrada[p2];
        
        }

        let lucro = precoVenda - precoCompra;
        
        if(lucroMaximo < lucro)
            lucroMaximo = lucro;
        
        precoVenda = 0
    }
    
    return lucroMaximo;
}

/* 
    Solução otimizada(refatoração)
    Time complexity : O(N) 
    Space complexity : O(1)
*/

// make sure we have at least 2 prices
//   if (stockPricesYesterday.length < 2) {
//     throw new Error('Getting a profit requires at least 2 prices');
// }

const buscarLucroMaximoOtimizado = function(entrada) {
    let precoCompra = entrada[0];
    let lucroMaximo = 0;

    for(p = 1; p < entrada.length; p++){
        let preco = entrada[p];

        if(preco < precoCompra) 
            precoCompra = preco;

        let lucro = preco - precoCompra;
        
        lucroMaximo = Math.max(lucro, lucroMaximo);
    }
    
    return lucroMaximo;
}

console.log("Codigo original");
console.log("Lucro no input1: ", buscarLucroMaximo(input1));
console.log("Lucro no input2: ", buscarLucroMaximo(input2));

console.log();

console.log("Codigo refatorado");
console.log("Lucro no input1: ", buscarLucroMaximoOtimizado(input1));
console.log("Lucro no input2: ", buscarLucroMaximoOtimizado(input2));