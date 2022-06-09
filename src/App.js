// Utils
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Components
import { Container } from 'react-bootstrap'

// Pages
import { Home } from './pages/Home'
import { CatDetails } from './pages/CatDetails'

function App() {
  return (
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
  )
}

export default App
