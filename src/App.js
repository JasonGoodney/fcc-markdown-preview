import React from 'react'
import Editor from './components/Editor'
import Preview from './components/Preview'
import './App.css'

const App = () => {

  return (
    <div className="App">

      <Editor className='Editor' />
      <Preview className='Preview' />
    </div>
  )
}

export default App
