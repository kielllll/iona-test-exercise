import React from 'react'
import PropTypes from 'prop-types'

// Components
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const CatCard = ({ image, id }) => (
  <Card style={{ maxWidth: '20vw' }}>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Link to={`/${id}`} state={{ id }}>
        <Button variant="primary">View Details</Button>
      </Link>
    </Card.Body>
  </Card>
)

CatCard.propTypes = {
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}

export default CatCard
