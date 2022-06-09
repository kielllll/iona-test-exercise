import React, { useContext } from 'react'

// Components
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

// Utils
import { Link, useParams } from 'react-router-dom'
import { getCatDetails } from '../../api/cat'
import { useEffectOnce } from '../../utils/useEffectOnce'
import { GlobalAppContext } from '../../contexts/GlobalAppState'

const CatDetails = () => {
  const { state, func } = useContext(GlobalAppContext)
  const { catDetails, error } = state
  const { setCatDetails, setError } = func
  const { id } = useParams()

  // Only run once when the page has been loaded with id being provided
  useEffectOnce(() => {
    getCatDetails(id).then(({ data, error: err }) => {
      // Short-circuit if an error has occurred
      if (err) {
        setError(true)

        return alert(
          'Apologies but we could not load new cats for you at this time! Miau!'
        )
      }

      setCatDetails(data)
    })
  }, [id])

  const cat = catDetails.breeds?.[0] ?? {}

  return (
    <Card>
      <Card.Header>
        <Link to={-1}>
          <Button>Back</Button>
        </Link>
      </Card.Header>
      <Card.Img
        variant="top"
        src={
          !error
            ? catDetails?.url
            : 'https://cdn.searchenginejournal.com/wp-content/uploads/2020/08/404-pages-sej-5f3ee7ff4966b-1520x800.png'
        }
      />
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
