import Navbar from './composants/navbar/navbar';

import './App.css';
import { Route, Routes } from 'react-router-dom';

import Accueil from './composants/pages/Accueil';
import Contenu1 from './composants/pages/Contenu1';
import Contenu2 from './composants/pages/Contenu2';
import Contenu3 from './composants/pages/Contenu3';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/accueil" element={<Accueil />}/>
      <Route path="/contenu1" element={<Contenu1 />}/>
      <Route path="/contenu2" element={<Contenu2 />}/>
      <Route path="/contenu3" element={<Contenu3 />}/>
      
    </Routes>
    </>
  );
}

export default App;
