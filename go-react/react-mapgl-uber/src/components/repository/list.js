import React from 'react'
import { Container } from './styles'

const ListRepository = ({ repositories }) => (
  <Container>
    {repositories.map(repository => (
      <div key={repository.id}>
        <img
          style={{
            borderRadius: 100,
            width: 48,
            height: 48
          }}
          src={repository.image}
        />
      </div>
    ))}
  </Container>
)

export default ListRepository
