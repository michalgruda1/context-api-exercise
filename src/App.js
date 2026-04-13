import './App.css';
import PlaylistsPage from './pages/PlaylistsPage';
import UserName from './components/UserName';
import UserContextProvider from './context/UserContext';

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <header className="App-header">
          Playlists of <UserName />
        </header>
        <div>
          <PlaylistsPage />
        </div>
      </div>
    </UserContextProvider>
  );
}

export default App;
