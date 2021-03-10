import React, {Component} from 'react'
import './CompartilharPost.css'

export class CompartilharPost extends Component {
	state = {
        botao1: 'Instagram',
        botao2: 'Facebook',
        botao3: 'Twitter',
	}

	render() {
		return <div className={'compartilhar-container'}>
            <input 
                value={this.state.Comentario}
                onChange={this.props.changeCometario}
                placeholder={'Compartilha deixando uma mensagem...'}
            />
			<button onClick={this.props.redeSocial1}>{this.state.botao1}</button>
			<button onClick={this.props.redeSocial2}>{this.state.botao2}</button>
			<button onClick={this.props.redeSocial3}>{this.state.botao3}</button>
		</div>
	}
}
