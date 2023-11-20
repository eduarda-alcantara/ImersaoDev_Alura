const form = document.querySelector('#forms')

form.addEventListener('submit', function (evento){
    evento.preventDefault()
    const valorEmDolar = evento.target.querySelector('#Dolar')

    const dolar = Number(valorEmDolar.value)
    const cotaçãoDoDolar = 4.85

    const valorConvertido = getConversao (dolar, cotaçãoDoDolar)

    const conversao = `$${dolar} dólar(es) => equivale(m) a R$${valorConvertido} reais`
    setresultado(conversao)
})

function getConversao (dolar, cotaçãoDoDolar){
    const valorEmReal = dolar * cotaçãoDoDolar
    return valorEmReal.toFixed(2)
}

function CriaP(){
    const p = document.createElement('p')
    return p
}

function setresultado(mensagem){
    const resultado = document.querySelector('#resultado')

    resultado.innerHTML = ''

    const p = CriaP()
    p.classList.add('paragrafo-conversao')

    p.innerHTML = mensagem
    resultado.appendChild(p) 
}

