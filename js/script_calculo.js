const valorAdd = (objLote) =>{
    let resposta = ''

    if((objLote.valor) <= 20000){
        resposta = `Isento de valor adicional`
    }else if((objLote.valor > 20000) && (objLote.valor <= 100000)){
        resposta = `Valor adicional de 5% em torno de R$ ${(parseFloat(objLote.valor) * 0.05).toFixed(2).replace('.',',')} reais`
    }else if((objLote.valor > 100000) && (objLote.valor <= 500000)){
        resposta = `Valor adicional de 10% em torno de R$ ${(parseFloat(objLote.valor) * 0.1).toFixed(2).replace('.',',')} reais`
    }else if((objLote.valor > 500000) && (objLote.valor <= 1000000)){
        resposta = `Valor adiconal de 15% em torno de R$ ${(parseFloat(objLote.valor) * 0.15).toFixed(2).replace('.',',')} reais`
    }else{
        resposta = `Valor dicional de 20%, em torno de R$ ${(parseFloat(objLote.valor) * 0.2).toFixed(2).replace('.',',')} reais`
    }

    return resposta
}

export {valorAdd}