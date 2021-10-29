import Modal from './modal.js'
const modal = Modal()

// Pegando todos os botoes com clase check
const checkButtons = document.querySelectorAll('.actions a.check')
checkButtons.forEach(button => {
    //adicionar event listener
    button.addEventListener('click', event => {
        // abrir modal
        modal.Open()
    })
})
// pegando o botão cancelar
const cancelButton = document.querySelector('.button.cancel')
// chamando a funçao pra fechar
 cancelButton.addEventListener('click', modal.Close)

//  botão de excluir
const deleteButtons = document.querySelectorAll('.actions a.delete')
deleteButtons.forEach(button => {
    //adicionar event listener
    button.addEventListener('click', event => {
        // abrir modal
        modal.Open()
    })
})