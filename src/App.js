import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useForm } from "react-hook-form"
import { Button, Form } from 'react-bootstrap';

function App() {
 
  const {register, handleSubmit, error} = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="external-style">
    <div className="App">
      <h1>Farmex</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Medicamento 1" name="medicamento01" ref={register}/>
        <input type="text" placeholder="Medicamento 2" name="medicamento01" ref={register}/>
        <input type="text" placeholder="Sintomas 01" name="sintoma01" ref={register}/>
        <input type="text" placeholder="Sintomas 02" name="sintoma02" ref={register}/>
        <input type="text" placeholder="Sintomas 03" name="sintoma03" ref={register}/>
        {/* <Form.Control as="select" ref={register}>
          <option>Dor de cabeça</option>
          <option>Febre</option>
          <option>Tosse</option>
          <option>Tontura</option>
          <option>Diabete</option>
        </Form.Control> */}
        <Button type="submit" variant="success">Enviar</Button>
      </form>
    </div>
    </div>
  );
}

export default App;
