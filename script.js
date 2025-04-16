function comparar() {
    let precoEtanol = parseFloat(document.getElementById("precoEtanol").value)
    let precoGasolina = parseFloat(document.getElementById("precoGasolina").value)
    let kmEtanol = parseFloat(document.getElementById("eficienciaEtanol").value)
    let kmGasolina = parseFloat(document.getElementById("eficienciaGasolina").value)
    let valorPorKmEtanol = precoEtanol / kmEtanol
    let valorPorKmGasolina = precoGasolina / kmGasolina
    let vantagem = ''
    let msg = ''


    if (valorPorKmEtanol < valorPorKmGasolina) {


    }
}
