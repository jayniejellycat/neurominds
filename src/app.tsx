import { useState } from 'react'
import './App.css'
import Sidebar from './Components/Sidebar'
import Header from './Components/Header'
import Home from './pages/Home'
import Solutions from './pages/Solutions'
import SoundStudio from './pages/SoundStudio'
import Relaxation from './pages/Relaxation'
import Wellness from './pages/Wellness'
import Science from './pages/Science'

function App() {
  const [activePage, setActivePage] = useState('Home')

  function renderPage() {
    switch (activePage) {
      case 'Solutions': return <Solutions />
      case 'Sound Studio': return <SoundStudio />
      case 'Relaxation Library': return <Relaxation />
      case 'Wellness Insights': return <Wellness />
      case 'Science Behind': return <Science />
      default: return <Home onNavigate={setActivePage} />
    }
  }

  return (
    <div className="app-layout">
      <Sidebar activePage={activePage} onNavigate={setActivePage} />
      <div className="app-main">
        <Header />
        <main>{renderPage()}</main>
      </div>
    </div>
  )
}

export default App