import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import { AuthContextProvider } from './context/AuthContext'
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom'
function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <div className='App'>
          <header className='App-header'>
            <h1>Auth JWT React</h1>
            <Routes>
              <Route path='/' axact element={<Login />} />
              <Route path='/profile'  element={<Profile />} />
            </Routes>
          </header>
        </div>
      </BrowserRouter>
    </AuthContextProvider>
  )
}

export default App
