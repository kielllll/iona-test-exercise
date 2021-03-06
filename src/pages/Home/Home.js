import React, { useContext } from 'react'
import { useSearchParams } from 'react-router-dom'

// Components
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { SelectField } from '../../components/SelectField'
import { CatCard } from '../../components/CatCard'

// Utils
import { listCatBreed, listCatsByBreed } from '../../api/cat'
import { useEffectOnce } from '../../utils/useEffectOnce'
import { GlobalAppContext } from '../../contexts/GlobalAppState'

const Home = () => {
  const { state, func } = useContext(GlobalAppContext)
  const { catBreeds, cats, value, page } = state
  const { setCatBreeds, setCats, setValue, setPage } = func
  const [searchParams, setSearchParams] = useSearchParams()

  /**
   * Calls the Cat API to pull the list of cats by breed
   *
   * @param {string} breed
   */
  const getCatsbyBreed = async (breed) => {
    const { data, error } = await listCatsByBreed(breed)
    if (error)
      return alert(
        'Apologies but we could not load new cats for you at this time! Miau!'
      )

    // exit if no result
    if (data.length === 0)
      return alert(
        'Apologies but we could not find the breed! Please select another one from the dropdown. Miau!'
      )

    // parse only the necessary properties
    setCats(data.map(({ url, id }) => ({ image: url, id })))
    setValue(breed)
    setSearchParams({ breed })
    // reset as selecting cats by breed always start at page 1
    setPage(1)
  }

  // Only run once when the page has been loaded
  useEffectOnce(() => {
    listCatBreed().then(({ data, error }) => {
      // Short-circuit if an error has occurred
      if (error)
        return alert(
          'Apologies but we could not load new cats for you at this time! Miau!'
        )

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

  useEffectOnce(() => {
    const breed = searchParams.get('breed')
    if (breed) return getCatsbyBreed(breed)
  }, [searchParams])

  /**
   * Event handler of select input field
   *
   * @param {object} e
   */
  const handleSelect = async (e) => {
    const breed = e.target.value
    if (!breed) {
      setCats([])
      setValue('')
      setSearchParams('')
      return
    }

    await getCatsbyBreed(breed)
  }

  /**
   * Event handler of load more button
   */
  const handleClick = async () => {
    const nextPage = page + 1
    const { data, error } = await listCatsByBreed(value, nextPage)
    if (error)
      return alert(
        'Apologies but we could not load new cats for you at this time! Miau!'
      )

    // parse only the necessary properties
    setCats([
      ...cats,
      ...data
        .filter(({ id }) => cats.some(({ id: i }) => id === i))
        .map(({ url, id }) => ({ image: url, id })),
    ])
    setPage(nextPage)
  }

  /**
   * Render cat data into cards
   *
   * @returns {Node}
   */
  const renderCatCards = () =>
    cats?.length > 0 &&
    cats.map(({ image, id }) => (
      <Col md={3} xs={6} key={id}>
        <CatCard image={image} id={id} />
      </Col>
    ))

  const Section = styled(Row)`
    margin-bottom: 12px;
  `

  const SelectFieldSection = styled(Row)`
    padding: 10px 0px;
  `

  const ButtonSection = styled(Section)`
    justify-content: center;
  `

  const LoadMoreButton = styled(Button)`
    width: 40%;
  `

  return (
    <div>
      <Section>
        <h1>Cat Browser</h1>
      </Section>
      <SelectFieldSection>
        <Col md={3} sm={6}>
          <SelectField
            options={catBreeds}
            defaultText="Select breed"
            disabled={!catBreeds}
            onChange={handleSelect}
            label="Breed"
            value={value}
          />
        </Col>
      </SelectFieldSection>
      <Section>{renderCatCards()}</Section>
      {cats.length === 0 && (
        <Section>
          <p>No cats available</p>
        </Section>
      )}
      {cats.length % 10 === 0 && (
        <ButtonSection>
          <LoadMoreButton
            variant="success"
            onClick={handleClick}
            disabled={cats.length === 0}
          >
            Load more
          </LoadMoreButton>
        </ButtonSection>
      )}
    </div>
  )
}

export default Home
