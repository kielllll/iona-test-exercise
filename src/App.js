// Dependencies
import React, { useState, useMemo } from 'react'

// Components
import { Container } from 'react-bootstrap'

// Utils
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GlobalAppContext } from './contexts/GlobalAppState'

// Pages
import { Home } from './pages/Home'
import { CatDetails } from './pages/CatDetails'

function App() {
  const [catBreeds, setCatBreeds] = useState([])
  const [cats, setCats] = useState([])
  const [value, setValue] = useState('')
  const [page, setPage] = useState(1)

  const values = useMemo(() => ({
    state: {
      catBreeds,
      cats,
      value,
      page,
    },
    func: {
      setCatBreeds,
      setCats,
      setValue,
      setPage,
    },
  }))

  return (
    <GlobalAppContext.Provider value={values}>
      <Container fluid="xs">
        <Router>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:id" element={<CatDetails />} />
            </Routes>
          </div>
        </Router>
      </Container>
    </GlobalAppContext.Provider>
  )
}

export default App
