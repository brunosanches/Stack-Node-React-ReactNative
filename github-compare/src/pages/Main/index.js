import React, { Component } from 'react'
import moment from 'moment'

import logo from '../../assets/images/logo.png'
import api from '../../services/api'

import { Container, Form } from './styles'
import CompareList from '../../components/CompareList'

export default class Main extends Component {
  constructor (props) {
    super(props)

    this.state = {
      loading: false,
      repositoryInput: '',
      repositoryError: false,
      repositories: []
    }
  }

  async componentDidMount () {
    this.setState({ repositories: await this.getLocalRepositories() })
  }

  getLocalRepositories = async () =>
    JSON.parse(await localStorage.getItem('@GithubCompare:Repositories')) || []

  setLocalRepositories = async () => {
    await localStorage.setItem(
      '@GithubCompare:Repositories',
      JSON.stringify(this.state.repositories)
    )
  }

  getRepository = async (id, repositoryName) => {
    // Check if input empyt
    if (typeof id === 'undefined') {
      if (this.state.repositoryInput === '') {
        this.setState({
          repositoryError: true
        })
        return false
      }
    }

    // init icon loading
    this.setState({ loading: true })

    // init get data in api
    try {
      const searchName =
        typeof repositoryName === 'undefined'
          ? this.state.repositoryInput
          : repositoryName

      // Find repository
      const { data: repository } = await api.get(`repos/${searchName}`)

      const searchId = typeof id === 'undefined' ? repository.id : id

      // add data custom with moment
      repository.lastCommit = moment(repository.pushed_at).fromNow()

      let repositories = await this.getLocalRepositories()

      // check if repository exist in localstorage
      let findRepository = repositories.filter(
        repo => String(repo.id) === String(searchId)
      )

      if (findRepository.length === 1) {
        repositories.map(repo => {
          if (String(repo.id) === String(searchId)) {
            repo.stargazers_count = repository.stargazers_count
            repo.forks_count = repository.forks_count
            repo.open_issues_count = repository.open_issues_count
            repo.lastCommit = repository.lastCommit
          }

          return repo
        })
      } else {
        // Update with data if not exist repository in localstorage
        repositories = [...this.state.repositories, repository]
      }

      this.setState({
        repositoryInput: '',
        repositoryError: false,
        repositories: repositories
      })

      await this.setLocalRepositories()
    } catch (error) {
      this.setState({
        repositoryError: true,
        repositoryInput: ''
      })
    } finally {
      this.setState({ loading: false })
    }
  }

  handleAddRepository = async e => {
    e.preventDefault()
    this.getRepository()
  }

  handlerRemoveRepository = async id => {
    let { repositories } = this.sate
    const updateRepositories = repositories.filter(
      repository => String(repository.id) !== String(id)
    )

    this.setState({ repositories: updateRepositories })

    await this.setLocalRepositories()
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
          onRefreshClick={e =>
            this.getRepository(e.target.dataset.id, e.target.dataset.repository)
          }
          onRemoveClick={e => this.handlerRemoveRepository(e.target.dataset.id)}
        />
      </Container>
    )
  }
}
