import React, { Fragment } from 'react'
import { Marker } from 'react-map-gl'

const MarkerMap = ({ repositories }) => (
  <Fragment>
    {repositories.map(repository => (
      <Marker
        key={repository.id}
        latitude={repository.latitude}
        longitude={repository.longitude}
      >
        <img
          style={{
            borderRadius: 100,
            width: 48,
            height: 48
          }}
          src={repository.image}
        />
      </Marker>
    ))}
  </Fragment>
)

export default MarkerMap
