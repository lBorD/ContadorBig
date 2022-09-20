function contar() {
    var init = document.getElementById('init1')
    var fim = document.getElementById('fim1')
    var passo = document.getElementById('pass1')
    var res = document.getElementById('res')
    
    if (init.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
       res.innerHTML = 'Impossivel Contar!'

    } else 
    {
       res.innerHTML = 'Contando: '
       var i = Number(init.value)
       var f = Number(fim.value)
       var p = Number(passo.value)

        if (p <= 0){
            window.alert('Passo inválido! Considerando passo 1')
            p = 1
        }

        if (i > f) 
        {
            //Contagem crescente
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449} `
            } 
        } else
        {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} `
            } 
        } res.innerHTML += ` \u{1F3C1} `
    }   
        

} 

