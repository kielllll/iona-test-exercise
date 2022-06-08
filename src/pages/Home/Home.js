import React, { useState, useEffect } from 'react'

// Components
import Button from 'react-bootstrap/Button'
import { SelectField } from '../../components/SelectField'

// Utils
import { listCatBreed } from '../../api/cat'

const Home = () => {
  const [catBreeds, setCatBreeds] = useState([])
  useEffect(() => {
    listCatBreed().then(({ data, error }) => {
      if (error) alert('An error has occurred while processing the request.')

      // parse only the necessary properties
      setCatBreeds(data.map(({ id, name }) => ({ label: name, value: id })))
    })
  }, [])

  return (
    <div>
      <h1>Cat Browser</h1>
      <p>Breed</p>
      <SelectField options={catBreeds} defaultText="Select breed" disabled={!catBreeds} />
      <p>No cats available</p>
      <Button variant="success">Load more</Button>
    </div>
  )
}

export default Home
