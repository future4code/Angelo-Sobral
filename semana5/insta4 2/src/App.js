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
  ]
  }


  render() {

    const listaDePost = this.state.Post.map(post => {
      return <Post nomeUsuario={post.nomeUsuario} fotoUsuario={post.fotoUsuario}  fotoPost={post.fotoPost} />
    })

    return (
      <div className={'app-container'}>
        <div>
          <input/>
          <input/>
          <input/>
          <button>Adicionar Post</button>
        </div>
        {listaDePost}
      </div>
    );
  }
}

export default App;
