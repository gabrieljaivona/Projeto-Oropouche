const tagsOropouche = ["Oropouche", "doença", "vírus", "picada", "mosquito", "dengue", "chikungunya"]
const tagsTransmissao = [ "Transmissão", "Transmissao", "Sintomas", "Febre", "súbito", "subito", "Dor de cabeça", "Dor muscular e articular", "Náusea", "diarreia", "Nausea", "diarreia", "Ciclo Silvestre", "Ciclo Urbano", "roedores", "aves", "bichos-preguiça", "bichos-preguica", "bichos preguiça"]
const tagsTratamento = ["tratamento", "Diagnóstico", "Diagnostico", "Prevenção", "Prevencao", "epidêmico", "epidemico", "sintomático", "sintomatico"]

function pesquisar(){

    let inputPesquisa = document.getElementById("inputPesquisa").value.toLowerCase()
    let secaoOropouche = document.getElementById("primeiraSecao")
    let secaoTransmissao = document.getElementById("segundaSecao")
    let secaoTratamento = document.getElementById("terceiraSecao")
    //let conteudo = document.getElementById("resultado-pesquisa")
    let aviso = document.getElementById("secaoAviso")

    secaoOropouche.style.display = 'none'
    secaoTransmissao.style.display = 'none'
    secaoTratamento.style.display = 'none'
    aviso.style.display = 'none'

    if (tagsOropouche.some(tag => inputPesquisa.includes(tag.toLowerCase()))) {
        secaoOropouche.style.display = 'flex';
        secaoOropouche.scrollIntoView({ behavior: 'smooth' });
    } else if (tagsTransmissao.some(tag => inputPesquisa.includes(tag.toLowerCase()))) {
        secaoTransmissao.style.display = 'flex';
        secaoTransmissao.scrollIntoView({ behavior: 'smooth' });
    } else if (tagsTratamento.some(tag => inputPesquisa.includes(tag.toLowerCase()))) {
        secaoTratamento.style.display = 'flex';
        secaoTratamento.scrollIntoView({ behavior: 'smooth' });
    } else {
        aviso.style.display = 'flex'
        aviso.innerHTML = `<div>Nada encontrado</div>`;
        aviso.scrollIntoView({ behavior: 'smooth' });
    }
}
