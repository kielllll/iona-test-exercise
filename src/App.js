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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cat" element={<CatDetails />} />
        </Routes>
      </Router>
    </Container>
  )
}

export default App
