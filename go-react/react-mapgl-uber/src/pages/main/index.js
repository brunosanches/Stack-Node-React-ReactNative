import React, { Component, Fragment } from 'react'
import MapGL from 'react-map-gl'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Creators as UsersActions } from '../../store/ducks/users'

import MarkerMap from '../../components/markerMap'
import ListUser from '../../components/users/list'
import AddUser from '../../components/users/add'

class Main extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -23.5439948,
      longitude: -46.6065452,
      zoom: 14
    },
    isShowMarker: false,
    user: {}
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

  handleSaveMarker = async username => {
    const user = {
      username,
      latitude: this.state.user.latitude,
      longitude: this.state.user.longitude
    }

    this.props.addRequest(user)

    this.setState({ user: '', isShowMarker: false })
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
    const { viewport } = this.state
    return (
      <Fragment>
        <ListUser localizeMarker={this.handleLocalizeMarker} />
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
          <MarkerMap />
        </MapGL>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(UsersActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
