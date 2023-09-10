import './App.css'
import SocialMenu from './components/social-menu/SocialMenu'
import { WebsiteLogo } from './components/website-logo/WebsiteLogo'
import ThemeToggle from './components/theme-toggle/ThemeToggle'
import React, { useState } from 'react';
import NavMenu from './components/nav-menu/NavMenu';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { MyJourney } from './pages/my-journey/MyJourney';
import { MyPortfolio } from './pages/my-portfolio/MyPortfolio';
import { MySkills } from './pages/my-skills/MySkills';
import MobileHeader from './components/mobile-header/MobileHeader';

interface IThemeContext {
  darkMode: boolean,
  toggleDarkMode: () => void
}

export const ThemeContext = React.createContext<IThemeContext>({
  darkMode: true,
  toggleDarkMode: () => {}
});

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => { setDarkMode((prev) => !prev) }

  const containerStyle = {
    backgroundColor: darkMode ? 'black' : 'white'
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <section className='main-container' style={containerStyle}>
        <div className='mobile-header-container'> 
          <MobileHeader /> 
        </div>
        <div className='left-container'>
          <div className='relative-container'>
            <WebsiteLogo darkMode={darkMode}/>
            <NavMenu/>
          </div>
        </div>
        <div className='center-container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/my-journey" element={<MyJourney />} />
            <Route path="/my-portfolio" element={<MyPortfolio />} />
            <Route path="/my-tools" element={<MySkills />} />
          </Routes>
        </div>
        <div className='right-container'>
          <div className='relative-container'>
            <SocialMenu/>
            <div className='theme-container'>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </section>
    </ThemeContext.Provider>
  )
}

export default App
