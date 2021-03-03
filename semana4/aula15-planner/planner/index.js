// consegui finzalizar os exercícios, ficou pendente os desafios que tento amanhã

function createTask() {
    // alert('Clicou no botão criar tarefa!')

    let task = document.getElementById('tarefa')
    // console.log(task)

    let daysOfWeek = document.getElementById('dias-semana')
    // console.log(daysOfWeek.value)

    let printTask = document.getElementById(daysOfWeek.value)
    // console.log(pritnTask)

    printTask.innerHTML += `<p>${task.value}</p>`

    task.value = ''
}