import Modal from './modal.js'
const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

// Pegando todos os botoes com clase check
const checkButtons = document.querySelectorAll('.actions a.check')
checkButtons.forEach(button => {
    //adicionar event listener
    button.addEventListener('click', handleClick)
})
// pegando o botão cancelar
const cancelButton = document.querySelector('.button.cancel')
// chamando a funçao pra fechar
cancelButton.addEventListener('click', modal.Close)

//  botão de excluir
const deleteButtons = document.querySelectorAll('.actions a.delete')
deleteButtons.forEach(button => {
    //adicionar event listener
    button.addEventListener('click', (event) => handleClick(event, false))
})

function handleClick(event,check = true){
    event.preventDefault()
    const slug = check ? 'check': 'delete'
    const text = check ? 'Marcar como lida' : 'Excluir'

    const roomId = document.querySelector('#room-id').dataset.id
    const questionId = event.target.dataset.id
    const form = document.querySelector('.modal form')
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta`
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`
    check ? modalButton.classList.remove('red') : modalButton.classList.add('red')
    modal.Open()
}
