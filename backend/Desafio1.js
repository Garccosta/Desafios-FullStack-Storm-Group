/*
Dado um array de números inteiros, retornar índice dos dois 
números cuja soma seja igual a um alvo específico

Premissas:
1- Há sempre apenas uma solução disponível;
2- Cada entrada possui apenas uma solução;
3- Os números são inteiros;
4- Não pode-se utilizar o mesmo elemento mais de uma vez;

Restrições:
Todos os números são positivos ou há também negativos?
Há números duplicados no array?
O que retornar se não houver uma solução?

Exemplos:
nums = [2, 7, 11, 15]; alvo=9; return: [0,1]
*/

let nums = [2, 7, 11, 4]
let alvo = 15;

/* Solução não otimizada
    Time complexity : O(N*N) -> devido ao for loop aninhado
    Space complexity : O(1)
*/
const encontrarParSoma = function(nums, alvo) {
    
    for(p1=0; p1 < nums.length - 1; p1++) {
        let num1 = nums[p1];
        let numeroProcurado = alvo - num1;
    
        for (let p2 = p1 + 1 ; p2 < nums.length; p2++) {
            let num2 = nums[p2];
    
            if(numeroProcurado == num2){
                return [p1,p2];
            } 
        }
    }
    return null;
}

/* Solução otimizada(uso de um HashMap)
    Time complexity : O(N) 
    Space complexity : O(N)
*/

const encontrarParSomaOtimizada = function(nums, alvo) {
    const mapaNumerosProcurados = {}

    for(p=0; p < nums.length - 1; p++) {
        const valorAtualMapeado = mapaNumerosProcurados[nums[p]]

        if(valorAtualMapeado >= 0) {       // undefined >= 0 => false
            return [valorAtualMapeado, p];
        } else {
            const numeroProcurado = alvo - nums[p];
            mapaNumerosProcurados[numeroProcurado] = p;
        }
    }
    return null;
}

resposta = encontreParSoma(nums, alvo);
if(resposta){
    console.log(resposta)
} else {
    console.log(null)
}