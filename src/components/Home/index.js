import {Link} from 'react-router-dom'

import ReactFileReader from 'react-file-reader'

import Header from '../Header'

import './index.css'

const Home = () => {
  const updateDataToDatabase = async postsList => {
    const url = 'https://posts-web-app.herokuapp.com/'
    const options = {
      method: 'POST',
      body: JSON.stringify(postsList),
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const response = await fetch(url, options)
    console.log(response.ok)
  }

  const handleFiles = files => {
    const reader = new FileReader()
    reader.onload = function (e) {
      const data = JSON.parse(reader.result)
      console.log(data)

      const updatedData = data.map(each => ({
        user_id: each.userId,
        id: each.id,
        title: each.title,
        body: each.body,
      }))
      console.log(updatedData)
      updateDataToDatabase(updatedData)
    }
    reader.readAsText(files[0])
  }

  return (
    <>
      <Header />
      <div className="home-container">
        <h1 className="home-heading">Home</h1>
        <ReactFileReader fileTypes={['.json']} handleFiles={handleFiles}>
          <button className="home-btn">Upload</button>
        </ReactFileReader>

        <Link to="/posts">
          <button type="button" className="home-btn display-btn">
            Display Posts
          </button>
        </Link>
      </div>
    </>
  )
}

export default Home
