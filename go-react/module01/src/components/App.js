import React, { Component, Fragment } from 'react'

import Header from './Header'
import Post from './Post'

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        name: 'Bruno Sanches Ribeiro',
        avatar: 'https://avatars3.githubusercontent.com/u/6765963',
        time: 'há 3min',
        body:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et sem magna. Aenean pharetra gravida metus, ac auctor tortor. Quisque mauris orci, congue quis varius vel, interdum et felis. Sed ornare porttitor lacus, at interdum magna convallis in. Phasellus dignissim malesuada dignissim. Etiam vitae commodo mi. Curabitur aliquam sed libero vitae luctus. Maecenas auctor, velit quis fermentum suscipit, dolor sapien dictum elit, ut ultrices tortor felis in nisl. Cras vitae velit at odio fermentum luctus eu non ipsum. Nunc vel ante purus. Nam ultrices dapibus neque, et venenatis felis mattis quis. Sed ultrices lobortis blandit. Cras ullamcorper mollis justo non ornare. Nulla eget ex lorem.'
      },
      {
        id: 2,
        name: 'Diego Prado Jesus',
        avatar:
          'https://media.licdn.com/dms/image/C5603AQEpkXMlR6U2Kw/profile-displayphoto-shrink_800_800/0?e=1550707200&v=beta&t=2oJbNK--s6HIK-N_Y2SJtO19-dpQjmrcFpNcXHjDn04',
        time: 'há 7min',
        body:
          'Quisque eu rutrum augue, vitae vehicula augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras elit lacus, vestibulum eget suscipit eget, laoreet vitae tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim dolor, hendrerit ac dignissim sed, feugiat eget mauris. Aenean volutpat ut neque id commodo. Pellentesque fermentum in elit eget congue.'
      },
      {
        id: 3,
        name: 'Samuel Rodrigues Almeida e Sousa',
        avatar:
          'https://media.licdn.com/dms/image/C4E03AQGO7dkHEzD5eg/profile-displayphoto-shrink_800_800/0?e=1550707200&v=beta&t=kBj_Ki6fcvUm3pyAFSSbfj-9sTuM0TCR5i_oRPMF8lY',
        time: 'há 7min',
        body:
          'Aenean gravida nibh ac tellus convallis aliquam. Integer molestie lacus sed arcu venenatis, sed commodo mi molestie. Nunc congue ac ante eu rutrum. Maecenas viverra risus vel tellus sagittis mollis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin tincidunt metus nec ex ultrices gravida consectetur ac nibh. Nam at lacus tincidunt, dictum leo non, iaculis ipsum.'
      }
    ]
  }
  render () {
    const { posts } = this.state
    return (
      <Fragment>
        <Header />
        <div className="post-container">
          {posts && posts.map(post => <Post key={post.id} data={post} />)}
        </div>
      </Fragment>
    )
  }
}
