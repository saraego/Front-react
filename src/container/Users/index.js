import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Container, Image, ContainerItens, Button, Li } from './styles'

import ContainerP from '../../components/ContainerPrincipal';
import ContainerI from '../../components/ContainerItens'
import TitleH1 from '../../components/TitleH1';


import Avatas from '../../assets/avatas.svg'
import Seta from '../../assets/seta.svg'
import Trash from '../../assets/trash.svg'

function App() {
  const history = useHistory()
  const [users, setUsets] = useState([])

  useEffect(() => {
    async function usuarios() {
      const { data: newUser } = await axios.get("http://localhost:3000/")
      setUsets(newUser)
    }
    usuarios()
  }, [])


  async function deleteUser(userId) {
    const { data: newUser } = await axios.delete(`http://localhost:3000/enviar/${userId}`)
    console.log(newUser);

    const dell = users.filter((user) => user.id !== userId)
    setUsets(dell)
  }

  function goBackPage(){
    history.push("/")
  }

  return (
    <Container >
      <Image src={Avatas} alt='peoples' />
      <ContainerI isBlur={true}>
          <TitleH1>Usuários</TitleH1>
        <ul>
          {users.map((user) => (
            <Li key={user.id}>
              <p>{user.name}</p>
              <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}><img src={Trash} alt="lixeira" /></button>
            </Li>
          ))}
        </ul>
        <Button onClick={goBackPage}><img src={Seta} alt="seta" /> Voltar</Button>
      </ContainerI>

    </Container>
  )
}

export default App;
