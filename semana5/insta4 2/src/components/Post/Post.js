import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeSalvarPost from '../../img/save-button.svg'
import iconePostSalvo from '../../img/save-color.svg'
import iconeCompartilhar from '../../img/share.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import { IconeSalvar } from '../IconeSalvar/IconeSalvar'

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvarPost: false
  }

  onClickCurtida = () => {
    let numCurtidas
    if (this.state.curtido){
      
      numCurtidas = this.state.numeroCurtidas -1
      this.setState({curtido: false, numeroCurtidas: numCurtidas})
    } else {
      
      numCurtidas = this.state.numeroCurtidas +1
      this.setState({curtido: true, numeroCurtidas: numCurtidas})
    }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  salvarPost = () => {
    if (this.state.salvarPost) {
        this.setState({salvarPost:false})
    } else {
      this.setState({salvarPost: true})
    }
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    let marcarPost

    if(this.state.salvarPost) {
      marcarPost = iconePostSalvo
    } else {
      marcarPost = iconeSalvarPost
    }

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeSalvar 
          icone={marcarPost}
          salvarPost={this.salvarPost}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </div>
      {componenteComentario}
    </div>
  }
}

export default Post