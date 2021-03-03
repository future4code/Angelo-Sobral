const text = document.getElementById('text')
const list = document.getElementById('list')

function addList() {
    if (!text.value) {
        alert('Digite algum item para adicionar a lista.')
    }

    list.innerHTML += `<p>${text.value}</p>`
    text.value = ''
}