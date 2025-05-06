 function Teste() {
     console.log("clicou")
     const texto = document.getElementById("texto")
     texto.textContent = ' <h2 id="result">resultado</h2>'
     const result = document.getElementById("result")
     result.textContent = (2 * 50).toString()
 }