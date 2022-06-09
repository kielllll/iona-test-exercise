import React from 'react'

import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const NotFound = () => (
  <div
    style={{
      width: 'inherit',
      height: 'inherit',
      margin: 0,
      padding: 0,
      overflow: 'hidden',
    }}
  >
    <img
      style={{
        height: '500px',
        width: '750px',
      }}
      alt="404: not found"
      src="https://img.freepik.com/free-vector/internet-connection-problem-concept-illustration-404-found-error-page-isolated-white-background-funny-gray-cat-isolated-vector-illustrations_450656-204.jpg?w=2000"
    />
    <Link to={-1}>
      <Button>Back</Button>
    </Link>
  </div>
)

export default NotFound
