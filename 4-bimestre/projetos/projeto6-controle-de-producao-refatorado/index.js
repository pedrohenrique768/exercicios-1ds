// CRIE UMA LÓGICA ABAIXO   
const prompt = require("prompt-sync")()

console.log("=== Sistema de Controle de Produção ===")

let dias = parseInt(prompt("Quantos dias deseja registrar? "))

let producoes = []

for (let i = 1; i <= dias; i++) {
  let producao = parseInt(prompt(`Digite a quantidade produzida no dia ${i}: `))
  producoes.push(producao)
}

let total = 0
let maior = producoes[0]
let menor = producoes[0]

for (let i = 0; i < producoes.length; i++) {
  total += producoes[i] }

let media = total / dias

for(let i = 1; i < producoes.length; i++){
  if (producoes[i] > maior) {
    maior = producoes[i]
  }

  if (producoes[i] < menor) {
    menor = producoes[i]
  }
}

console.log(`--- RELATÓRIO DE PRODUÇÃO ---
Produções registradas: ${producoes}
Total produzido: ${total}
Média diária: ${media}
Maior produção: ${maior}
Menor produção: ${menor}
Ordem crescente: ${producoes.sort((a, b) => a-b)}
Ordem decrescente: ${producoes.sort((a, b) => b-a)} 
`)

let mensagem = ""
if (media >= maior / 2) {
  mensagem = "Produção estável!"
} else {
  mensagem = "Produção abaixo do ideal."
}
console.log(mensagem)