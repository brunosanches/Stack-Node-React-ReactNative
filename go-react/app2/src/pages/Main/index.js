import React from 'react'
import { Container, Form } from './styles'

import logo from '../../assets/images/logo.png'

import CompareList from '../../components/CompareList'

const Main = () => (
  <Container>
    <img src={logo} alt="Github compare" />

    <Form>
      <input type="text" placeholder="usuário/repositório" />
      <button type="submit">OK</button>
    </Form>

    <CompareList />
  </Container>
)

export default Main
