/* programa para calcular e mostrar o valor a ser pago pelo cliente de um restaurante */
function calcularPreco() {
    let inQuilo = document.getElementById("inQuilo");   
    let inConsumo = document.getElementById("inConsumo");
    let ValorDeSaida = document.getElementById("ValorDeSaida")

    let kg = Number(inQuilo.value);
    let consumo = Number(inConsumo.value);

    let valor = (kg / 1000) * consumo;

    ValorDeSaida.textContent = "Valor a pagar R$: " + valor.toFixed(2);
}

let btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularPreco);