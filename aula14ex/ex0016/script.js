function contar() {
    var iniciarPasso = document.getElementById('txtinicio')
    var fimPasso = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.querySelector('div#res')

    if (iniciarPasso.value.length == '' || fimPasso.value.length == '') {
        alert('[Erro] Insira um número no Início')

    }else {
        iniciar = Number(iniciarPasso.value)
        fim = Number(fimPasso.value)
        passos = Number(passo.value)
        for (var iniciar; fim <= iniciar ; passos)
        }
        res.style.textAling = 'center'
        res.innerHTML = `Contanto: ${iniciar} de ${passos} em ${passos} até ${fim} `
            }
}