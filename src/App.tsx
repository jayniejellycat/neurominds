import { useState } from 'react'
import './App.css'
import Sidebar from './Sidebar'
import Header from './Header'
import Home from './Home'
import Solutions from './Solutions'
import SoundStudio from './SoundStudio'
import Relaxation from './Relaxation'
import Wellness from './Wellness'
import Science from './Science'

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