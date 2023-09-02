import './App.css'
import SocialMenu from './components/social-menu/SocialMenu'
import { WebsiteLogo } from './components/website-logo/WebsiteLogo'
import ThemeToggle from './components/theme-toggle/ThemeToggle'
import React, { useState } from 'react';
import NavMenu from './components/nav-menu/NavMenu';
import { Route, Routes } from 'react-router-dom';

interface IThemeContext {
  darkMode: boolean,
  toggleDarkMode: () => void
}

export const ThemeContext = React.createContext<IThemeContext>({
  darkMode: true,
  toggleDarkMode: () => {}
});

function Home() {
  return (
    <p style={{ wordWrap: 'break-word'}}>
      <h1 style={{ color: 'red' }}> Home HomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHome </h1>
    </p>
  )
}

function About() {
  return (
    <>
    <h1 style={{ color: 'red' }}> About Us </h1>
    <h1 style={{ color: 'red' }}> About Us </h1>
    </>
  )
}

function Testing() {
  return <h1 style={{ color: 'red' }}> Testing </h1>
}

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => { setDarkMode((prev) => !prev) }

  const containerStyle = {
    backgroundColor: darkMode ? 'black' : 'white'
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className='main-container' style={containerStyle}>
        <div className='left-container'>
          <div className='relative-container'>
            <WebsiteLogo/>
            <NavMenu/>
          </div>
        </div>
        <div className='center-container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/my-experience" element={<Testing />} />
            <Route path="/about-me" element={<About />} />
          </Routes>
        </div>
        <div className='right-container' >
          <div className='relative-container'>
            <SocialMenu/>
            <ThemeToggle/>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

// function Home() {
//   return <><h1> Home </h1></>
// }

export default App
