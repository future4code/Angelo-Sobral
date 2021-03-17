import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  color: ${({completa}) => (completa ? 'green' : 'red')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`
const ApagarDiv = styled.div`
display: flex;
`
const ApagarBotao = styled.button`
margin: 0 10px;
`

class App extends React.Component {
    state = {
      tarefas: [
        {
          id: Date.now(),
          texto: "Lavar roupas",
          completa: false
        },
        {
          id: setInterval(() => {
            Date.now()
          }, 100),
          texto: "Lavar o banheiro",
          completa: true
        }
      ],
      inputValue: '',
      filtro: 'pendentes',
      pesquisa:''
    }

  componentDidUpdate() {
      
  };

  componentDidMount() {
   
  };

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value})
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }
    const arrayTarefas = [...this.state.tarefas, novaTarefa]

    this.setState({ tarefas: arrayTarefas, inputValue: ''})
  }

  selectTarefa = (id) => {
    // pode fazer com map tbm
    const novaListaTarefas = [...this.state.tarefas]
    novaListaTarefas.forEach(item => item.completa = item.id === id ? !item.completa : item.completa )

    this.setState({ tarefas: novaListaTarefas })
  }

  onChangeFilter = (event) => {
    this.setState({
      filtro: event.target.value
    })
  }

  apagarTodasTarefas = () => {
    console.log(this.state.tarefas)
    if (!this.state.tarefas.length) {
      alert('Não tem nada para apagar!')
    } else if (window.confirm('Tem certeza que deseja apagar todas as tarefas?')) {
        
        this.setState({ tarefas: [] })
    }
  }

  apagarTarefa = (id) => {
    const apagarTarefa = [...this.state.tarefas]
    const apagarTarefasFiltro = apagarTarefa.filter((item) => {
      return item.id !== id
    })
    this.setState({ tarefas:apagarTarefasFiltro })
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
          case '':
            return <div></div>
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <ApagarDiv>
                <Tarefa
                  completa={tarefa.completa}
                  onClick={() => this.selectTarefa(tarefa.id)}
                >
                  {tarefa.texto}
                </Tarefa>
                <ApagarBotao onClick={() => this.apagarTarefa(tarefa.id)}>x</ApagarBotao>
              </ApagarDiv>
            )
          })}
        </TarefaList>
        <button onClick={this.apagarTodasTarefas}>Apagar todas as tarefas</button>
      </div>
    )
  }
}

export default App
