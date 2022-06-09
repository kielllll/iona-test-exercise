// Dependencies
import React, { useState, useMemo } from 'react'

// Utils
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GlobalAppContext } from './contexts/GlobalAppState'

// Pages
import { Home } from './pages/Home'
import { CatDetails } from './pages/CatDetails'
import { NotFound } from './pages/NotFound'

function App() {
  const [catBreeds, setCatBreeds] = useState([])
  const [catDetails, setCatDetails] = useState({})
  const [error, setError] = useState(false)
  const [cats, setCats] = useState([])
  const [value, setValue] = useState('')
  const [page, setPage] = useState(1)

  const values = useMemo(() => ({
    state: {
      catBreeds,
      cats,
      catDetails,
      value,
      page,
      error,
    },
    func: {
      setCatBreeds,
      setCats,
      setCatDetails,
      setValue,
      setPage,
      setError,
    },
  }))

  return (
    <GlobalAppContext.Provider value={values}>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<CatDetails />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </GlobalAppContext.Provider>
  )
}

export default App
