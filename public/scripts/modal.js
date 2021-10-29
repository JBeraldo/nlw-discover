export default function Modal() {
    const wrapper = document.querySelector('.modal-wrapper')
    function Open() {
        wrapper.classList.add('active')
    }
    function Close() {
        wrapper.classList.remove('active')
    }
    return {
        Open,
        Close
    }
}