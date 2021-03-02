// hoje tive diversos prolemas e por isso não pude entragar o exercícios finalizado. Vou tentar fazer até o final do dia, mas acho dificil.


function createTask() {
    alert('Clicou no botão criar tarefa!')

    let task = document.getElementById('tarefa').value

    console.log(task)
    let dayOfWeek = document.getElementById('dias-semana')
    // let dayOfWeekIndex
    // for (let index = 0; index < dayOfWeek.length; index++) {
    //     console.log(dayOfWeek[index])
        
    // }

    for (item of dayOfWeek) {
        console.log(item)
    }
    // console.log(dayOfWeek)
}