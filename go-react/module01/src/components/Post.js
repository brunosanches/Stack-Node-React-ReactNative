import React, { Component } from 'react'
import PropTypes from 'prop-types'

import PostHeader from './PostHeader'

const Post = props => (
  <div className="post">
    <PostHeader
      avatar={props.data.avatar}
      name={props.data.name}
      time={props.data.time}
    />
    <p className="post-content">{props.data.body}</p>
  </div>
)

Post.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }).isRequired
}

export default Post
