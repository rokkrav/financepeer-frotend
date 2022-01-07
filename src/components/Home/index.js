import ReactFileReader from 'react-file-reader'

import Header from '../Header'

import './index.css'

const Home = () => {
  const updateDataToDatabase = () => {}

  const handleFiles = files => {
    const reader = new FileReader()
    reader.onload = function (e) {
      const data = reader.result
      console.log(data)
      //   const updatedData = data.map(each => ({
      //     user_id: each.userId,
      //     id: each.id,
      //     title: each.title,
      //     body: each.body,
      //   }))
      //   console.log(updatedData)
    }
    reader.readAsText(files[0])
    updateDataToDatabase()
  }

  return (
    <>
      <Header />
      <div className="home-container">
        <h1>Home</h1>
        <ReactFileReader fileTypes={['.json']} handleFiles={handleFiles}>
          <button className="btn">Upload</button>
        </ReactFileReader>
      </div>
    </>
  )
}

export default Home
