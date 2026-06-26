const lotes = []

const formLote = document.querySelector('#form-lote')
const loteLista = document.querySelector('#div-lista')

formLote.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const dadosForm = new FormData(formLote)

    const lote = {
        quadra: dadosForm.get('quadra'),
        lot: dadosForm.get('lot'),
        comprimento: dadosForm.get('comp'),
        largura: dadosForm.get('larg'),
        area: (dadosForm.get('larg') * dadosForm.get('comp')),
        valor: (dadosForm.get('larg') * dadosForm.get('comp') * 550)
    }

    console.log(lote.quadra, lote.lot, lote.comprimento, lote.largura, lote.area)

    addLote(lote)

    formLote.reset()
})

const addLote = (objLote)=>{
    lotes.push(objLote)

    listLote()
}

const listLote = () => {
    loteLista.innerHTML = ''

    lotes.forEach((elem, i)=>{
        loteLista.innerHTML += `Descrição: Quadra ${elem.quadra} - Lote ${elem.lot}<p> Comprimento (m): ${elem.comprimento} m<p> Largura (m): ${elem.largura} m<p> Área (m²): ${elem.area} m²<p> Valor do Lote: R$ ${parseFloat(elem.valor).toFixed(2).replace('.',',')} reais<p> Valor adicional:`
    })
}