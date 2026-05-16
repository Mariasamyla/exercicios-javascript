// Selecionar os elementos do DOM
const paragrafo = document.getElementById('minha-linha');
const botao = document.getElementById('botao');


// Definir a função que será executada no clique

function sumirTexto() {
paragrafo.style.visibility = "hidden";
}

botao.addEventListener('click', sumirTexto); // quando a função está (sumirTexto()) ela acaba executando a tarefa no momento exato


