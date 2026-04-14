import './App.css';
import UserName from './components/UserName';
import PlaylistsContextProvider from './context/PlaylistsContext';
import PlaylistsPage from './pages/PlaylistsPage';

function App() {
  return (
    <PlaylistsContextProvider>
      <div className='App'>
        <header className='App-header'>
          Playlists of <UserName />
        </header>
        <div>
          <PlaylistsPage />
        </div>
      </div>
    </PlaylistsContextProvider>
  );
}

export default App;
