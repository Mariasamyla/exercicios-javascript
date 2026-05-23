const paragrafo = document.getElementById('minha-linha');
const botao = document.getElementById('botao');
const botao2 = document.getElementById('botao2');



// Definir a função que será executada no clique

function toggleVisibility() {
  const element = document.getElementById("minha-linha");
  if (element.style.visibility === "hidden") {
    element.style.visibility = "visible";
  } else {
    element.style.visibility = "hidden";
  }
}


botao.addEventListener('click', toggleVisibility);
botao2.addEventListener('click', toggleVisibility);