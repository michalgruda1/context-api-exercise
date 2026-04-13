import './App.css';
import PlaylistsPage from './pages/PlaylistsPage';
import UserName from './components/UserName';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Playlists of <UserName />
      </header>
      <div>
        <PlaylistsPage />
      </div>
    </div>
  );
}

export default App;
