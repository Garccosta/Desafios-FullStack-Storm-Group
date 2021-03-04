/*
Dados n inteiros não negativos representando um mapa de elevação, onde a
largura de cada barra é 1, calcular quanto água é retida após a chuva.

Premissas:
1 - Os números são inteiros e positivos;
2 - A posição zero não conta na retenção de água;

Exemplos:

Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6

*/

let input = [0,1,0,2,1,0,1,3,2,1,2,1]

/* 
    Solução não otimizada:
    Time complexity : O(N*N) -> mesmo que o for loop aninhado seja
    potencialmente invocado poucas vezes, no pior caso, pode-se considerar
    que seja invocado N vezes.
    Space complexity : O(1)
*/

const calcularAguaRetidaAposChuva = function(entrada) {
    let totalDeAguaRetida = 0;
    let maximoRelevoParaEsquerda = 0;
    let maximoRelevoParaDireita = 0;

    const calculaMaximoRelevoParaDireita = (posicao) => {
        maximoRelevoParaDireita = 0;

        for (posicao; posicao < entrada.length; posicao++){
            if(entrada[posicao] > maximoRelevoParaDireita)
                maximoRelevoParaDireita = entrada[posicao];
        }
    }

    calculaMaximoRelevoParaDireita(2);

    for(let p = 1; p < entrada.length; p++){
        let elevacaoRelevoAtual = entrada[p];

        if(elevacaoRelevoAtual == maximoRelevoParaDireita)
            calculaMaximoRelevoParaDireita(p + 1);

        if(entrada[p - 1]  > maximoRelevoParaEsquerda)
            maximoRelevoParaEsquerda = entrada[p - 1];

        let maximaColunaDeAgua = Math.min(maximoRelevoParaEsquerda, maximoRelevoParaDireita);
        let aguaRetidaNaPosicao = maximaColunaDeAgua - elevacaoRelevoAtual;
        
        if(aguaRetidaNaPosicao > 0)
            totalDeAguaRetida += aguaRetidaNaPosicao;
    }
    return totalDeAguaRetida;
}

/* 
Solução:
 Time complexity : O(N) -> apenas um loop
 Space complexity : O(1)
*/

const calcularAguaRetidaAposChuvaOtimizado = function(entrada) {
    let totalDeAguaRetida = 0;
    let maximoRelevoParaEsquerda = 0;
    let maximoRelevoParaDireita = 0;
    let ponteiroEsquerdo = 0;
    let ponteiroDireito = entrada.length - 1;

    while (ponteiroEsquerdo < ponteiroDireito){
        if(entrada[ponteiroEsquerdo] <= entrada[ponteiroDireito]){
            if(entrada[ponteiroEsquerdo] >= maximoRelevoParaEsquerda){
                maximoRelevoParaEsquerda = entrada[ponteiroEsquerdo];
            } else {
                totalDeAguaRetida += maximoRelevoParaEsquerda - entrada[ponteiroEsquerdo];
            }
            ponteiroEsquerdo++;
        } else {
            if(entrada[ponteiroDireito]  >= maximoRelevoParaDireita){
                maximoRelevoParaDireita = entrada[ponteiroDireito];
            } else {
                totalDeAguaRetida += maximoRelevoParaDireita - entrada[ponteiroDireito];
            }
            ponteiroDireito--;
        }
    }
    return totalDeAguaRetida;
}

console.log(calcularAguaRetidaAposChuva(input));
console.log(calcularAguaRetidaAposChuvaOtimizado(input));