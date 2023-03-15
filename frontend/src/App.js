import './App.css'
import Login from './components/Login'
import { AuthContextProvider } from './context/AuthContext'
function App() {
  return (
    <AuthContextProvider>
      <div className='App'>
        <header className='App-header'>
          <h1>Auth JWT React</h1>
          <Login />
        </header>
      </div>
    </AuthContextProvider>
  )
}

export default App
