import React, { Component } from 'react'

const PostHeader = props => (
  <div className="post-header">
    <div
      className="post-header-avatar"
      style={{ backgroundImage: `url('${props.avatar}')` }}
    />
    <div className="post-header-data">
      <strong>{props.name}</strong>
      <span>{props.time}</span>
    </div>
  </div>
)

export default PostHeader
