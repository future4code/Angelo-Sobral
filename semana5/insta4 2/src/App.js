import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'angeloOdwyer'}
          fotoUsuario={'https://avatars.githubusercontent.com/u/70985334?s=460&u=b0db5806864c8b5337772b0b63f8519229f3521d&v=4'}
          fotoPost={'https://picsum.photos/200/300/?blur=2'}
        />
        <Post
          nomeUsuario={'karinerOdwyer'}
          fotoUsuario={'https://source.unsplash.com/user/erondu'}
          fotoPost={'https://source.unsplash.com/random'}
        />
      </div>
    );
  }
}

export default App;
