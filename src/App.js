import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import PlaylistsPage from './pages/PlaylistsPage';

ReactDOM.render(
<React.StrictMode>
  <App />
</React.StrictMode>
)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Playlists of <span class="userName">username</span>
      </header>
      <div>
        <PlaylistsPage />
      </div>
    </div>
  );
}

export default App;
