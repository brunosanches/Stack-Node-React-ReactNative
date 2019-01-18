import React, { Fragment } from 'react'
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

export default MarkerMap
