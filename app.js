function cricartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = ('cartao')

    cartao.innerHTML = 
     <div class="cartao__conteudo">
    <h3>$(categoria)</h3>
      <div class="cartao__conteudo__pergunta">
       <p>$(pergunta)</p>
      </div>
     <div class="cartao__conteudo__pergunta">
    <p> $(resposta)</p>
  </div>
 </div>

 let respostaEstaVisivível = false
 function viracartao(){
    respostaEstaVisivível = !respostaEstaVisível
    cartao.classList.toggle('active', respostaEstaVisivível)
 }
  cartao.eddEventListener('click', viracartao)

 container.appendChild(cartao)
}