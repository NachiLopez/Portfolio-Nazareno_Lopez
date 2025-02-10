import './App.css'
import Index from './pages/content/Index'
import 'primeicons/primeicons.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
        
function App() {

  return (
    <Router>
      <Routes>
        <Route path="*" element={<Index />} />
      </Routes>
    </Router>
  )
}

export default App
