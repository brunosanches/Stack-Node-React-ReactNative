import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Marker } from 'react-map-gl'

import { ImgMarker } from '../../assets/stylesheets/global'
import { Container } from './styles'

const MarkerMap = ({ users }) => (
  <Fragment>
    <Container>
      {users.map(user => (
        <Marker
          key={user.id}
          latitude={user.latitude}
          longitude={user.longitude}
        >
          <ImgMarker src={user.image} />
        </Marker>
      ))}
    </Container>
  </Fragment>
)

const mapStateToProps = state => ({
  users: state.users.data
})

export default connect(mapStateToProps)(MarkerMap)
