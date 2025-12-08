import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Connexion from './pages/Connexion';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Connexion />} />

        <Route path='/connexion' element={<Connexion />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
