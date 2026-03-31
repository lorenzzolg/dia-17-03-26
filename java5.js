java=2
//entrada (Exemplo: 75kg 175m )
let peso = 75.0
let altura = 1.75
// Cálculo: Peso dividido pela altura ao quadrado
let imc = peso / (altura * altura)
console.log("O IMC é: " + imc)
console.log("Classificação: " + classificarIMC(imc)) 
function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso"
    } else if (imc >= 18.5 && imc < 25) {
        return "Peso normal"
    } else if (imc >= 25 && imc < 30) {
        return "Sobrepeso"
    } else {
        return "Obesidade"
    }
}
