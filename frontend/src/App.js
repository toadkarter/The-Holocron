import './App.css';
import NavBar from './Components/NavBar.jsx';
// import PageHeader from './Components/PageHeader/PageHeader';
import MainSection from './Components/MainSection';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
        <BrowserRouter>
            <NavBar/>
            <MainSection/>
        </BrowserRouter>
    </div>
  );
}

export default App;
