import React, { Component } from 'react'
import moment from 'moment'

import logo from '../../assets/images/logo.png'
import api from '../../services/api'

import { Container, Form } from './styles'
import CompareList from '../../components/CompareList'

export default class Main extends Component {
  constructor (props) {
    super(props)

    if (!localStorage.getItem('@GithubCompare:Repositories')) {
      localStorage.setItem('@GithubCompare:Repositories', '[]')
    }

    this.state = {
      loading: false,
      repositoryInput: '',
      repositoryError: false,
      repositories: JSON.parse(
        localStorage.getItem('@GithubCompare:Repositories')
      )
    }
  }

  getRepository = async (id, repositoryName) => {
    try {
      const { data: repository } = await api.get(`repos/${repositoryName}`)

      repository.lastCommit = moment(repository.pushed_at).fromNow()

      let repositories = JSON.parse(
        localStorage.getItem('@GithubCompare:Repositories')
      )

      if (
        repositories.filter(repo => String(repo.id) === String(id)).length === 1
      ) {
      } else {
        this.setState({
          repositoryInput: '',
          repositoryError: false,
          repositories: [...this.state.repositories, repository]
        })

        localStorage.setItem(
          '@GithubCompare:Repositories',
          JSON.stringify(this.state.repositories)
        )
      }
    } catch (error) {
      this.setState({
        repositoryError: true,
        repositoryInput: ''
      })
    } finally {
      this.setState({ loading: false })
    }
  }

  onHandleRefresh = async e => {
    this.getRepository(e.target.dataset.id, e.target.dataset.repository)
  }

  handleAddRepository = async e => {
    e.preventDefault()

    if (this.state.repositoryInput === '') {
      this.setState({
        repositoryError: true
      })
      return false
    }

    this.setState({ loading: true })

    try {
      const { data: repository } = await api.get(
        `repos/${this.state.repositoryInput}`
      )

      repository.lastCommit = moment(repository.pushed_at).fromNow()

      this.setState({
        repositoryInput: '',
        repositoryError: false,
        repositories: [...this.state.repositories, repository]
      })

      localStorage.setItem(
        '@GithubCompare:Repositories',
        JSON.stringify(this.state.repositories)
      )
    } catch (error) {
      this.setState({
        repositoryError: true,
        repositoryInput: ''
      })
    } finally {
      this.setState({ loading: false })
    }
  }

  render () {
    return (
      <Container>
        <img src={logo} alt="Github Compare" />

        <Form
          withError={this.state.repositoryError}
          onSubmit={this.handleAddRepository}
        >
          <input
            type="text"
            placeholder="usuário/repositório"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">
            {this.state.loading ? (
              <i className="fa fa-spinner fa-pulse" />
            ) : (
              'OK'
            )}
          </button>
        </Form>

        <CompareList
          repositories={this.state.repositories}
          onBigButtonClick={this.onHandleRefresh}
        />
      </Container>
    )
  }
}
