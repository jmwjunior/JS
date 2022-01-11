function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0){
        alert('Por favor, digite um número.')  
    }else { 
        let n = Number(num.value)
        let c = 1 
        tab.innerHTML = '' // assim antes de receber alguma informaçao eu limpo ela
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` // isso nao faz muito diferença para o JS mas pro PHP sim, porque ele faz a marcação do local onde foi clicado
            tab.appendChild(item) // adicionar um elemento filho
            c++
        }
    }
  
}