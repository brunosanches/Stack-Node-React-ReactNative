import React from 'react'
import { ImgMarker } from '../../assets/stylesheets/global'
import { List } from './styles'

const ListUser = ({ users, localizeMarker }) => (
  <List>
    {users.map(user => (
      <div key={user.id}>
        <ImgMarker src={user.image} onMouseOver={e => localizeMarker(user)} />
      </div>
    ))}
  </List>
)

export default ListUser
