import React, { useState } from 'react'

// Components
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { SelectField } from '../../components/SelectField'
import { CatCard } from '../../components/CatCard'

// Utils
import { listCatBreed, listCatsByBreed } from '../../api/cat'
import { useEffectOnce } from '../../utils/useEffectOnce'

const Home = () => {
  const [catBreeds, setCatBreeds] = useState([])
  const [cats, setCats] = useState([])
  // Only run once when the page has been loaded
  useEffectOnce(() => {
    listCatBreed().then(({ data, error }) => {
      // Short-circuit if an error has occurred
      if (error) alert('An error has occurred while processing the request.')

      // parse only the necessary properties
      setCatBreeds(
        data.map(({ id, name, image }) => ({
          label: name,
          value: id,
          imageId: image?.id,
        }))
      )
    })
  }, [])

  /**
   * Event handler of select input field
   *
   * @param {object} e
   */
  const handleSelect = async (e) => {
    const breed = e.target.value
    if (!breed) return

    const { data, error } = await listCatsByBreed(breed)
    if (error) alert('An error has occurred while processing the request.')

    // parse only the necessary properties
    setCats(data.map(({ url }) => ({ image: url })))
  }

  const renderCatCards = () =>
    cats?.length > 0 &&
    cats.map(({ image }) => (
      <Col xs={3}>
        <CatCard image={image} onClick={() => console.log('clicked')} />
      </Col>
    ))

  return (
    <div>
      <h1>Cat Browser</h1>
      <p>Breed</p>
      <SelectField
        options={catBreeds}
        defaultText="Select breed"
        disabled={!catBreeds}
        onChange={handleSelect}
      />
      <Row>{renderCatCards()}</Row>
      <p>No cats available</p>
      <Button variant="success">Load more</Button>
    </div>
  )
}

export default Home
