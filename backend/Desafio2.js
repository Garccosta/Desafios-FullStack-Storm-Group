/*
Dada uma sequência de brackets, retornar SIM, se estiver balanceada
e NAO, caso contrário.

Premissas:
1- A string é sempre composta por uma sequência de brackets
2- Para cada braket de abertura, há um de fechamento correspondente

Exemplos:
{[()]} SIM
{[(])} NAO
{{[[(())]]}} SIM
*/



let input1 = '{[()]}';
let input2 = '{[(])}';
let input3 = '{{[[(())]]}}';

/* 
Solução:
 Time complexity : O(N) -> apenas um loop
 Space complexity : O(N) -> devido a pilhaDeBrackets, 
 demais estruturas de dados: O(1)
*/

const bracketsEstaoBalanceados = function(entrada) {
    let brackets = entrada.split('');
    const bracketsDeFechamento = [')', ']', '}']
    let pilhaDeBrackets = []
    const mapaDeBrackets = {
    ")" : '(',
    "]" : '[',
    "}" : '{'
    }

    for(i=0; i < brackets.length; i++){
        let bracketAtual = brackets[i];
        if (bracketsDeFechamento.indexOf(bracketAtual) != -1) {
            if(pilhaDeBrackets.pop() == mapaDeBrackets[bracketAtual])
                continue;
            else
                return 'NAO'
        }
        pilhaDeBrackets.push(brackets[i]);
    }
    return 'SIM'
}


console.log("Entrada 1: ", bracketsEstaoBalanceados(input1));
console.log("Entrada 2: ", bracketsEstaoBalanceados(input2));
console.log("Entrada 3: ", bracketsEstaoBalanceados(input3));