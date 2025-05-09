// Boas práticas
// Case sensitive
// Sintaxe básica e comentário
// Declaração de variáveis(var, let, const)
let nome = "Alysson"
let idade = 17

// Console e Debug
console.log(nome)
console.log(idade)
nome = "Renata"
idade = "25"
console.log(nome, idade)

// Tipos de dados
// text == string
let cidade = "americana"

// numérico == number
let salario = 1500.35

// booleano == boolean
let fumante = false

console.log(typeof cidade)
console.log(typeof salario)
console.log(typeof fumante)

// Operadores
//     Operador Atribuição ( = )
//     Operadores aritméticos( +, -, /, *)
console.log("10 + 15")
let n1 = 10
let n2 = 5
console.log(n1 + n2) // soma
console.log(n1 - n2) // subtração
console.log(n1 * n2) // multiplicação
console.log(n1 / n2) // divisão
console.log(n1 % 3) // resto da divisão

//     Operadores relacionais ( ==, ===, !=, !==, >, <, >=, <=)
console.log(n1 == n2) // igual
console.log(n1 !== n2) // diferente
console.log(n1 > n2) // maior
console.log(10 < 10) // menor
console.log(10 <= 10) // menor ou igual 
console.log(150 >= 175) // maior ou igual

//     Operadores lógicos ( &&, ||, !)
console.log(!10 > 2)
console.log(!false)

console.log(10 > 2 && 35 < 100 && n1 > n2 && 100 < 90) // E - todas as verificações precisam ser verdadeiras para o resultado ser verdadeiro

console.log(10 < 2 || 100 == 150 || 57 == 57) // OU - apenas uma verificação precisa ser verdadeira para o resultado ser verdadeiro, o resultado só será falso quando TODAS as verificações forem falsas

// DESAFIO
let preco = 100
let precoAcrescimo = 0
let precoDesconto = 0
// faça um código que acrescente 17% ao preço e imprima
let precoComAcrescimo = 100 + (100 * 0.17)
console.log("preço com acrescimo: " + precoComAcrescimo.toFixed(2))
// faça um código que desconte 7% do preço e imprima
let precoComDesconto = 100 - (100 * 0.07)
console.log("preço com desconto: " + precoComDesconto.toFixed(2))




// Estrutura
//     Estrutura de controle/decisão
if(10 > 100){
    console.log("10 é maior que 5")
}else{
    console.log("10 não é menor que 100")
}

let idadeDoCandidato = 17
if(idadeDoCandidato >= 18){
    console.log("Pode dirigir")
}else{
    console.log("volte mais tarde")
}

let salarioFunc = 3000
// DESAFIO
// faça um código que verifique se o salário do funcionário é maior que 5000, se for mostre a mensagem "salário OK" se não mostre a mensagem "Precisa de um aumento de X reais"
if(salarioFunc > 5000){
    console.log("salário OK")
}else{
    console.log("precisa de um aumento de X reais")
}


//     Laços de repetição
// quero mostrar 10 vezes a mensagem "Senac Americana"
let controle = 0
while(controle <= 10){
    console.log("Senac Americana")
    controle = controle + 1
}

controle = 1  // definição da variavel  de controle
while(controle <= 100){ // condição 
    console.log(controle)
    controle = controle + 2 // incremento
}

// mostrar 10 vezes "Senac Americana"
for(let i = 1; i <= 10; i = i + 1){
    console.log("Senac Americana")
}

for(let i = 1; i <= 50; i = i + 1){
    console.log(i)
}

// Arrays 

// Funções básicas
// Escopo


// Alterar conteúdo e atributos *
// incluir js em página html *
// Eventos *
// DOM *
// Objeto
// parâmetros e retorno*

// Programação assíncrona***
// API Fetch ***

// JSON ****
// funções modernas (arrow functions) ****


// Spread e REST  ************
 