import React, { useState } from 'react'

// Components
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

// Utils
import { Link, useParams } from 'react-router-dom'
import { getCatDetails } from '../../api/cat'
import { useEffectOnce } from '../../utils/useEffectOnce'

const CatDetails = () => {
  const [catDetails, setCatDetails] = useState({})
  const { id } = useParams()

  // Only run once when the page has been loaded with id being provided
  useEffectOnce(() => {
    getCatDetails(id).then(({ data, error }) => {
      // Short-circuit if an error has occurred
      if (error) alert('An error has occurred while processing the request.')

      setCatDetails(data)
    })
  }, [id])

  const cat = catDetails.breeds?.[0] ?? {}

  return (
    <Card>
      <Card.Header>
        <Link to="/">
          <Button>Back</Button>
        </Link>
      </Card.Header>
      <Card.Img variant="top" src={catDetails?.url} />
      <Card.Body>
        <h4>{cat?.name}</h4>
        <h5>{!cat?.origin ? '' : `Origin: ${cat?.origin}`}</h5>
        <h6>{cat?.temperament}</h6>
        <p>{cat?.description}</p>
      </Card.Body>
    </Card>
  )
}

export default CatDetails
