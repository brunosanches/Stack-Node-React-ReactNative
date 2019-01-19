import React from 'react'
import { connect } from 'react-redux'

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

const mapStateToProps = state => ({
  users: state.users.data
})

export default connect(mapStateToProps)(ListUser)
