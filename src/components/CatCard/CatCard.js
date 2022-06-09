import React from 'react'
import PropTypes from 'prop-types'

// Components
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const CatCard = ({ image, handleClick }) => (
  <Card style={{ width: '20vw' }}>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Button varian="primary" onClick={handleClick}>
        View Details
      </Button>
    </Card.Body>
  </Card>
)

CatCard.propTypes = {
  image: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
}

export default CatCard
