import {Component} from 'react'
import Header from '../Header'

import './index.css'

class Posts extends Component {
  state = {postsList: [], isLoading: true}

  componentDidMount() {
    this.getPostsList()
  }

  getPostsList = async () => {
    const getPostsApiUrl = 'https://posts-web-app.herokuapp.com/posts'
    const response = await fetch(getPostsApiUrl)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      const updatedData = data.map(each => ({
        userId: each.user_id,
        id: each.id,
        title: each.title,
        body: each.body,
      }))
      console.log(updatedData)
      this.setState({
        postsList: updatedData,
        isLoading: false,
      })
    }
  }

  render() {
    const {isLoading, postsList} = this.state

    return (
      <>
        <Header />
        <div className="posts-container">
          <p className="posts-heading">Posts</p>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <ul className="posts-list">
              {postsList.map(each => (
                <li key={each.id} className="each-list-item">
                  <p className="each-item-style">user: {each.userId}</p>
                  <p className="each-item-style">{each.title}</p>
                  <p className="each-item-style">{each.body}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </>
    )
  }
}

export default Posts
