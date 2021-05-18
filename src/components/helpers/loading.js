import React from 'react'


const Loading = (props) => (
  (props.load) ?
    <></>
  :
    <div className="loading text-center w-100 h-100 py-5">

      <span className="words">C</span>
      <span className="words">A</span>
      <span className="words">R</span>
      <span className="words">G</span>
      <span className="words">A</span>
      <span className="words">N</span>
      <span className="words">D</span>
      <span className="words">O</span>

    </div>
)

export default Loading