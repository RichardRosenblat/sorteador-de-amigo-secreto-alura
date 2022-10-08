import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import './App.css';
import Card from './componentes/Card';
import Formulario from './componentes/Formulario';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<Card><Formulario/></Card>} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
