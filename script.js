function comparar() {
    var precoEtanol = parseFloat(document.getElementById("precoEtanol").value)
    var precoGasolina = parseFloat(document.getElementById("precoGasolina").value)
    var kmEtanol = parseFloat(document.getElementById("eficienciaEtanol").value)
    var kmGasolina = parseFloat(document.getElementById("eficienciaGasolina").value)
    var custoPorKmEtanol = precoEtanol / kmEtanol
    var custoPorKmGasolina = precoGasolina / kmGasolina 
    var empate = ''
    var vantagem = ''
    
    
    if (custoPorKmEtanol < custoPorKmGasolina) {
        vantagem = 'O combustivel mais vantajoso é o <strong>Etanol</strong>'
    }
    if (custoPorKmEtanol > custoPorKmGasolina) {
        vantagem = 'O combustivel mais vantajoso é a <strong>Gasolina</strong>'
    }
    if(custoPorKmEtanol === custoPorKmGasolina){
        empate = 'Os dois combustiveis são <strong>vantajosos</strong>'
    }
    

    resposta = vantagem + '<br>' +empate+ '<br>' + '<br>' + 'O custo por KM do Etanol é ' + custoPorKmEtanol.toFixed(2) + '<br>' + 'O custo por KM da Gasolina é ' + custoPorKmGasolina.toFixed(2)
    
    document.getElementById("resposta").innerHTML = resposta
}
