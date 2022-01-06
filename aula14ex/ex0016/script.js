function contar(){
        let ContIni = window.document.getElementById('txtinicio')
        let ContFim = window.document.getElementById('txtfim')
        let p =  window.document.getElementById('txtpasso')
        let cInicia = Number(ContIni.value)
        let cFim = Number(ContFim.value)
        let passo = Number(p.value)
        let res = window.document.getElementById('res')
        if (cInicia == '' || cFim == '' || passo == ''){
                res.innerHTML = `Impossível contar`
                alert(`Ambos os campos precisam ser preenchidos com um valor a partir de 1`)
                
        }else {
                 res.innerHTML = 'Contando: <br>'
                if (passo <=0 ){
                        alert('Passo inválido, vamos considerar o passo como sendo 1')
                        passo=1
                }

                if (cInicia<cFim){
                           for(let c = cInicia ; c <= cFim; c+= passo ){
                        res.innerHTML += ` ${c} \u{1F449}`	
                        }
                
                } else{
                        for(let c = cInicia; c>= cFim ; c -= passo){
                                res.innerHTML += `${c} \u{1F449}`
                        }
                }  
                res.innerHTML += `\u{1F3C1}` 
        }
}
