import React, { Component } from 'react'
import { AddMarker, Form, FormOptions } from './styles'

export default class AddUser extends Component {
  state = {
    userInput: ''
  }

  render () {
    return (
      <AddMarker>
        <Form>
          <input
            type="text"
            placeholder="Usuário no Github"
            name="repositoty"
            onChange={e => this.setState({ userInput: e.target.value })}
          />
          <FormOptions>
            <button
              type="button"
              className="cancel"
              onClick={e => this.props.closeMarker()}
            >
              Cancelar
            </button>
            <button
              type="button"
              className="save"
              onClick={e => this.props.saveMarker(this.state.userInput)}
            >
              Salvar
            </button>
          </FormOptions>
        </Form>
      </AddMarker>
    )
  }
}
