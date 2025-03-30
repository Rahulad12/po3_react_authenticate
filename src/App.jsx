import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignInPage from './pages/SignInPage'
import SignupPage from './pages/SignupPage'
import HomePage from './pages/HomePage'
import Protected from './components/Protected'
import AddDetailsPage from './pages/AddDetailsPage'
import { Rotate3D } from 'lucide-react'
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<SignInPage />} />
        <Route path='/register' element={<SignupPage />} />
        <Route element={<Protected />}>
          <Route path='/details' element={<AddDetailsPage />} />
          <Route path='/home' element={<HomePage />} />
        </Route>

      </Routes>
    </Router>
  )
}

export default App
