import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  state = {
    Post:[
    {
      nomeUsuario: 'paulinha',
      fotoUsuario: 'https://picsum.photos/50/50',
      fotoPost: 'https://picsum.photos/200/150'
    },
    {
      nomeUsuario: 'angeloOdwyer',
      fotoUsuario: 'https://avatars.githubusercontent.com/u/70985334?s=460&u=b0db5806864c8b5337772b0b63f8519229f3521d&v=4',
      fotoPost: 'https://picsum.photos/200/300/?blur=2'
    },
    {
      nomeUsuario: 'karinerOdwyer',
      fotoUsuario: 'https://source.unsplash.com/user/erond',
      fotoPost: 'https://source.unsplash.com/random'
    }
  ],
      valorInputUsuario: '',
      linkInputFoto: '',
      linkPostFoto: ''
  }

  onChangeInputUsuario = (e) => {
      this.setState({ valorInputUsuario: e.target.value})
  }

  onChangeInputFoto = (e) => {
    this.setState({ linkInputFoto: e.target.value})
  }

  onChangePostFoto = (e) => {
    this.setState({ linkPostFoto: e.target.value})
  }

  adicionarPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputUsuario,
      fotoUsuario: this.state.linkInputFoto,
      fotoPost: this.state.linkPostFoto
    }

    const postAcumulado = [novoPost, ...this.state.Post]

    this.setState({ Post: postAcumulado, valorInputUsuario:'', linkInputFoto: '', linkPostFoto:'' })

    alert('Caso a fotos não apareçam, certifique-se de ter usado um link válido. ^^')
  }

  render() {

    const listaDePost = this.state.Post.map(post => {
      return <Post nomeUsuario={post.nomeUsuario} fotoUsuario={post.fotoUsuario}  fotoPost={post.fotoPost} />
    })

    return (
      <div className={'app-container'}>
        <div>
          <input
          value={this.state.valorInputUsuario}
          onChange={this.onChangeInputUsuario}
          placeholder={'Digite aqui o nome do usuário'}
          />
          <input
          value={this.state.linkInputFoto}
          onChange={this.onChangeInputFoto}
          placeholder={'Digite ou cole aqui o link da foto do usuário'}
          />
          <input
          value={this.state.linkPostFoto}
          onChange={this.onChangePostFoto}
          placeholder={'Digite ou cole aqui o link da foto que deseja postar'}
          />
          <button onClick={this.adicionarPost}>Adicionar Post</button>
        </div>
        {listaDePost}
      </div>
    );
  }
}

export default App;
