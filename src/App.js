import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import PlaylistsPage from './pages/PlaylistsPage';
import UserName from './components/UserName';

ReactDOM.render(
<React.StrictMode>
  <App />
</React.StrictMode>
)

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
