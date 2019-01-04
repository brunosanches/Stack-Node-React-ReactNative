import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'

import api from '../../services/api'
import { Container, Repository } from './styles'

const CompareList = props => {
  const handleRefreshRepository = async e => {
    props.onBigButtonClick(e)
  }

  const handleRemoveRepository = e => {
    console.log(e.target.dataset.id)
    console.log(e.target.dataset.repository)
  }

  return (
    <Container>
      {props.repositories.map(repository => (
        <Repository key={repository.id}>
          <header>
            <div className="optionsRepository">
              <i
                className="fa fa-refresh"
                data-id={repository.id}
                data-repository={`${repository.owner.login}/${repository.name}`}
                onClick={handleRefreshRepository}
              />
              <i
                className="fa fa-trash-o"
                data-id={repository.id}
                data-repository={`${repository.owner.login}/${repository.name}`}
              />
            </div>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <strong>{repository.name}</strong>
            <small>{repository.owner.login}</small>
          </header>

          <ul>
            <li>
              {repository.stargazers_count} <small>stars</small>
            </li>
            <li>
              {repository.forks_count} <small>forks</small>
            </li>
            <li>
              {repository.open_issues_count} <small>issues</small>
            </li>
            <li>
              {repository.lastCommit} <small>last commit</small>
            </li>
          </ul>
        </Repository>
      ))}
    </Container>
  )
}

CompareList.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      owner: PropTypes.shape({
        login: PropTypes.string,
        avatar_url: PropTypes.string
      }),
      stargazers_count: PropTypes.number,
      forks_count: PropTypes.number,
      open_issues_count: PropTypes.number,
      pushed_at: PropTypes.string
    })
  )
}

export default CompareList
