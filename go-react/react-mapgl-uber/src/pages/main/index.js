import React, { Component, Fragment } from 'react'
import MapGL from 'react-map-gl'

import api from '../../services/api'
import MarkerMap from '../../components/markerMap'
import ListRepository from '../../components/repository/list'
import AddRepository from '../../components/repository/add'

export default class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
        latitude: -23.5439948,
        longitude: -46.6065452,
        zoom: 14
      },
      repositories: [
        {
          id: 0.7176157022202423,
          latitude: -46.60195325818818,
          longitude: -23.547535604084402,
          image: 'https://avatars1.githubusercontent.com/u/6765963?v=4'
        },
        {
          id: 0.33986580895232454,
          latitude: -46.62800287213057,
          longitude: -23.542342392132568,
          image: 'https://avatars2.githubusercontent.com/u/2254731?v=4'
        },
        {
          id: 0.9697620111604126,
          latitude: -46.635598888060734,
          longitude: -23.537975214245975,
          image: 'https://avatars1.githubusercontent.com/u/1322514?v=4'
        },
        {
          id: 0.46892581628788466,
          latitude: -46.58002351727729,
          longitude: -23.537896525016784,
          image: 'https://avatars0.githubusercontent.com/u/16706860?v=4'
        },
        {
          id: 0.07704145650767136,
          latitude: -46.60547231640546,
          longitude: -23.55473494496833,
          image: 'https://avatars1.githubusercontent.com/u/5114666?v=4'
        },
        {
          id: 0.9992978115812128,
          latitude: -46.5718266865329,
          longitude: -23.551312356666976,
          image: 'https://avatars1.githubusercontent.com/u/1322514?v=4'
        },
        {
          id: 0.3626138465584483,
          latitude: -23.545706200521177,
          longitude: -46.5986058613262,
          image: 'https://avatars2.githubusercontent.com/u/2254731?v=4'
        },
        {
          id: 0.8717207013215986,
          latitude: -23.53775881876139,
          longitude: -46.63096403087163,
          image: 'https://avatars1.githubusercontent.com/u/5114666?v=4'
        },
        {
          id: 0.45546889785784384,
          latitude: -23.55011246263713,
          longitude: -46.59053777659918,
          image: 'https://avatars0.githubusercontent.com/u/16706860?v=4'
        },
        {
          id: 0.6605989868829791,
          latitude: -23.548027374870806,
          longitude: -46.571311702390666,
          image: 'https://avatars3.githubusercontent.com/u/463230?v=4'
        },
        {
          id: 0.6694079009783955,
          latitude: -23.536578473579713,
          longitude: -46.57792066539313,
          image: 'https://avatars2.githubusercontent.com/u/2254731?v=4'
        },
        {
          id: 0.027836652704808174,
          latitude: -23.53244718203825,
          longitude: -46.617359866753226,
          image: 'https://avatars1.githubusercontent.com/u/6765963?v=4'
        }
      ]
    }
  }

  componentDidMount () {
    window.addEventListener('resize', this._resize)
    this._resize()
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this._resize)
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth,
        height: window.innerHeight
      }
    })
  }

  handleMapClick = async e => {
    const [longitude, latitude] = await e.lngLat
    const repository = {
      id: Math.random(),
      latitude,
      longitude,
      image: 'https://avatars2.githubusercontent.com/u/2254731?v=4'
    }

    this.setState({ repositories: [...this.state.repositories, repository] })
  }

  render () {
    const { viewport, repositories } = this.state
    return (
      <Fragment>
        <ListRepository repositories={repositories} />
        <MapGL
          {...viewport}
          onClick={this.handleMapClick}
          mapStyle="mapbox://styles/mapbox/basic-v9"
          mapboxApiAccessToken={
            'pk.eyJ1IjoiZGllZ28zZyIsImEiOiJjamh0aHc4em0wZHdvM2tyc3hqbzNvanhrIn0.3HWnXHy_RCi35opzKo8sHQ'
          }
          onViewportChange={viewport => this.setState({ viewport })}
        >
          <MarkerMap repositories={repositories} />
        </MapGL>
      </Fragment>
    )
  }
}
