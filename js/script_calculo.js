const valorAdd = (objLote) =>{
    let resposta = ''

    if((objLote.valor) <= 20000){
        resposta = `Isento`
    }else if((objLote.valor > 20000) && (objLote.valor <= 100000)){
        resposta = `Valor adicional de 5%`
    }else if((objLote.valor > 100000) && (objLote.valor <= 500000)){
        resposta = `Valor adicional de 10%`
    }else if((objLote.valor > 500000) && (objLote.valor <= 1000000)){
        resposta = `Valor adiconal de 15%`
    }else{
        resposta = `Valor adicional de 20%`
    }

    return resposta
}

export {valorAdd}