const setaDireita = window.document.getElementById("setasDireita")
const leonardo = window.document.getElementById("leonardo");
const samantha = window.document.getElementById("samantha");
const bruna = window.document.getElementById("bruna");
const setaEsquerda = window.document.getElementById("setasEsquerda")

function rolarDireita () {
    leonardo.style = "display:none"
    samantha.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex"
}

function rolarEsquerda () {
    leonardo.style = "display:flex"
    samantha.style = "display:none"
    setaDireita.style = "display:flex"
    setaEsquerda.style = "display:none"
}

