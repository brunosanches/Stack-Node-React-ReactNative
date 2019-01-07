import React from 'react'
import PropTypes from 'prop-types'

import { Container, Repository } from './styles'

const CompareList = ({ repositories, onRefreshClick, onRemoveClick }) => {
  return (
    <Container>
      {repositories.map(repository => (
        <Repository key={repository.id}>
          <header>
            <div className="optionsRepository">
              <i
                className="fa fa-refresh"
                data-action="refresh"
                data-id={repository.id}
                data-repository={`${repository.owner.login}/${repository.name}`}
                onClick={e => onRefreshClick(e)}
              />
              <i
                className="fa fa-trash-o"
                data-action="remove"
                data-id={repository.id}
                data-repository={`${repository.owner.login}/${repository.name}`}
                onClick={e => onRemoveClick(e)}
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
