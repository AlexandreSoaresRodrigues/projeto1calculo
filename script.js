var numero1 = parseFloat(prompt("Digite o primeiro número:"));
var numero2 = parseFloat(prompt("Digite o segundo número:"));

if (isNaN(numero1) || isNaN(numero2)) {
    alert("Por favor, insira números válidos.");
  } else { var soma = numero1 + numero2;
    var subtracao = numero1 - numero2;
    var multiplicacao = numero1 * numero2;
    var divisao = numero1 / numero2;
    var resto = numero1 % numero2;
    var somaParImpar = soma % 2 === 0 ? "par" : "ímpar";
    var saoIguais = numero1 === numero2 ? "iguais" : "diferentes";
    
    alert("A soma dos números é: " + soma);
  alert("A subtração dos números é: " + subtracao);
  alert("A multiplicação dos números é: " + multiplicacao);
  alert("A divisão dos números é: " + divisao);
  alert("O resto da divisão dos números é: " + resto);
  alert("A soma dos números é: " + soma + somaParImpar );
  alert("Os números inseridos são " + saoIguais);
}




