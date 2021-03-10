import React from 'react'
import './IconeSalvar.css'

export function IconeSalvar(props) {
	return <div className={'icon-salvar'}>
		<img alt={'Icone'} src={props.icone} onClick={props.salvarPost}/>
	</div>
}
