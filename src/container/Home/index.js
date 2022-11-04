import React ,{useState, useRef} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {H1, Image, ContainerItens, InputLabel, Input} from './styles'

import ContainerP from '../../components/ContainerPrincipal';
import ContainerI from '../../components/ContainerItens';
import TitleH1 from '../../components/TitleH1';
import Btn from '../../components/Button';

import Peoples from '../../assets/peoples.svg'
import Seta from '../../assets/seta.svg'


function App() {
  const history = useHistory()
  const [ users, setUsers] = useState([])
  const nome = useRef()
  const idade = useRef()

  async function addNewUser(){
    const {data:usuario} = await axios.post("http://localhost:3000/enviar", {name:nome.current.value, age:idade.current.value})
    setUsers([...users,usuario])

    console.log(usuario);

    history.push('/users')
  }
  return (
   <ContainerP>
      <Image src={Peoples} alt='peoples'/>
      <ContainerI>
          <TitleH1>Olá</TitleH1>
          <InputLabel>Nome</InputLabel>
          <Input ref={nome} placeholder='Nome'/>

          <InputLabel>Idade</InputLabel>
          <Input ref={idade} placeholder='Idade'/>

          <Btn onClick={addNewUser}>Cadastrar <img src={Seta} alt="seta" /></Btn>
      </ContainerI>
     
   </ContainerP>
  )
}

export default App;
