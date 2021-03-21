import AppContextWrapper from './components/AppContextWrapper'
import Navbar from './components/Navbar'
import Routes from './components/Routes'
import './App.css';

function App() {
  return (
    <div className="App">
      <AppContextWrapper>
        <Navbar/>
        <Routes/>
      </AppContextWrapper>
    </div>
  );
}

export default App;
