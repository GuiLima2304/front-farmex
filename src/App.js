import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

import Interactions from './Interactions';

function App() {

  return (
    <div className="external-style">
    <div className="App">
      <h1 class="title-farmex">Farmex</h1>
      <span class="apresentation-text">Bem Vindo - Farmex tem o objetivo de auxiliar profissionais da área da saúde com interações
        medicamentosas, este projeto está em desenvolvimento, então não é algo totalmente completo,
        clicando no botão abaixo, será redirecionado para a página de interações !!!
      </span><br />

      <Link to="/interactions">
        <Button class="button-interaction" variant="success">Interações medicamentosa</Button>
      </Link>
    </div>
    </div>
  );
}

export default App;
