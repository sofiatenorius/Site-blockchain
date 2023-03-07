const button = document.querySelector('button#button-pop')
const popup = document.querySelector('div.pop')
const closeButton = document.querySelector('div.popup-close')
const finalizarInscricao = document.querySelector('button.popup-submit')
button.addEventListener('click', ()=>{
    popup.style.display = 'block'


})

closeButton.addEventListener('click', ()=>{
    popup.style.display = 'none'

})

finalizarInscricao.addEventListener('click', ()=>{
    popup.style.display = 'none'

})

