import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Connexion';
import Connexion from './pages/Dashboard';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/connexion' element={<Connexion />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
