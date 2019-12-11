import React from 'react'
import { connect } from 'react-redux'
import marked from 'marked'

const Preview = props => {
  const { markdownString } = props

  const markdownPreview = () => {
    return { __html: markdownString }
  }

  return (
    <div className='Preview' id='container'>
      <div id='header'>Preview</div>
      {/* {markdownArray.length === 0 ? 'empty' :
        <ul>
          {markdownArray.map((md, i) => {
            return <li key={i}>{md}</li>
          })}
        </ul>
      } */}
      <div id='content'>
        <div id='preview' dangerouslySetInnerHTML={markdownPreview()}></div>
      </div>
    </div>

  )
}

const mapStateToProps = (state) => {
  return {
    markdownString: state.markdownString
  }
}

export default connect(mapStateToProps)(Preview)
