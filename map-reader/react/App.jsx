import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Hello World</h1>
        <ul role="nav">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/mapreader">譜面を見るやつ</Link></li>
        </ul>
      </div>
    )
  }
})