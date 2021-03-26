import './App.css';
import CreatePlaylist from './components/CreatPlaylist';
import { Playlist } from './components/Playlist';

function App() {
  return (
    <div className="App">
      <CreatePlaylist />
      <Playlist />
    </div>
  );
}

export default App;
