import React, { Component, Fragment } from 'react'
import MapGL from 'react-map-gl'

import api from '../../services/api'
import MarkerMap from '../../components/markerMap'
import ListUser from '../../components/users/list'
import AddUser from '../../components/users/add'

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
      isShowMarker: false,
      userInput: '',
      user: {},
      users: []
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

    this.setState({ isShowMarker: true, user: { latitude, longitude } })
  }

  handleSaveMarker = async userInput => {
    const { data } = await api.get(`/users/${userInput}`)

    const latitude = this.state.user.latitude
    const longitude = this.state.user.longitude

    const user = {
      id: Math.random(),
      latitude,
      longitude,
      image: data.avatar_url
    }

    this.setState({
      users: [...this.state.users, user],
      user: '',
      isShowMarker: false
    })
  }

  handleCloseMarker = () => {
    this.setState({ isShowMarker: false, user: '' })
  }

  handleLocalizeMarker = user => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        latitude: user.latitude,
        longitude: user.longitude
      }
    })
  }

  render () {
    const { viewport, users } = this.state
    return (
      <Fragment>
        <ListUser users={users} localizeMarker={this.handleLocalizeMarker} />
        {this.state.isShowMarker ? (
          <AddUser
            closeMarker={this.handleCloseMarker}
            saveMarker={this.handleSaveMarker}
          />
        ) : null}
        <MapGL
          {...viewport}
          onClick={this.handleMapClick}
          mapStyle="mapbox://styles/mapbox/basic-v9"
          mapboxApiAccessToken={
            'pk.eyJ1IjoiZGllZ28zZyIsImEiOiJjamh0aHc4em0wZHdvM2tyc3hqbzNvanhrIn0.3HWnXHy_RCi35opzKo8sHQ'
          }
          onViewportChange={viewport => this.setState({ viewport })}
        >
          <MarkerMap users={users} />
        </MapGL>
      </Fragment>
    )
  }
}
