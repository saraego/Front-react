import React from 'react';
import {H1,Container, Image, ContainerItens, InputLabel, Input,Button} from './styles'

import Peoples from '../../assets/peoples.svg'
import Seta from '../../assets/seta.svg'

function App() {
  return (
   <Container>
      <Image src={Peoples} alt='peoples'/>
      <ContainerItens>
          <H1>Olá</H1>
          <InputLabel>Nome</InputLabel>
          <Input placeholder='Nome'/>

          <InputLabel>Idade</InputLabel>
          <Input placeholder='Idade'/>

          <Button>Cadastrar <img src={Seta} alt="seta" /></Button>
      </ContainerItens>
     
   </Container>
  )
}

export default App;
