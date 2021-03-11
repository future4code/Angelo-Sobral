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
import { CompartilharPost } from '../CompartilharPost/CompartilharPost'

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvarPost: false,
    compartilhando: false,
    botao1: 'Instagram',
    botao2: 'Facebook',
    botao3: 'Twitter',
    comentario:''
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

  compartilharPost = () => {
    this.setState({
      compartilhando: !this.state.compartilhando
    })
  }

  onChangeCometario = (e) => {
    this.setState({comentario: e.target.value})
  }

  imprimeRedeSocial = () => {
    console.log(`${this.state.comentario} - Post compartilhado no ${this.state.botao1}`)
    this.setState({compartilhando: false})
  }
  
  imprimeRedeSocial2 = () => {
    console.log(`${this.state.comentario} - Post compartilhado no ${this.state.botao2}`)
    this.setState({compartilhando: false})
  }

  imprimeRedeSocial3 = () => {
    console.log(`${this.state.comentario} - Post compartilhado no ${this.state.botao3}`)
    this.setState({compartilhando: false})
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

    let componenteCompartilhar

    if(this.state.compartilhando) {
      componenteCompartilhar = <CompartilharPost 
                                  redeSocial1={this.imprimeRedeSocial} 
                                  redeSocial2={this.imprimeRedeSocial2} 
                                  redeSocial3={this.imprimeRedeSocial3}
                                  changeCometario={this.onChangeCometario}
                                />
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
          share={iconeCompartilhar}
          compartilhar={this.compartilharPost}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </div>
      {componenteCompartilhar}
      {componenteComentario}
    </div>
  }
}

export default Post