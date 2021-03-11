import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	// state = {
	// 	novoComentario:''
	// }

	// onChangeComentario = (event) => {
	// 	console.log(event.target.value)
	// 	this.setState({novoComentario: event.target.value})
	// }

	render() {
		return <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				// value={this.state.novoComentario}
				onChange={this.props.comentario}
			/>
			
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</div>
	}
}
