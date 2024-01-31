import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles.css'
// import { Logo } from '@pmndrs/branding';
import { App } from './App'

function Root() {
  // Navigation now uses the Link component or useNavigate for redirection
  return (
  <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/item/:id' element={<App />} />
        {/* Define more routes as needed */}
      </Routes>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}>
        <a
          style={{
            position: 'absolute',
            bottom: 40,
            left: 90,
            fontSize: '13px',
          }}>
          <br />
        </a>
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            right: 40,
            fontSize: '13px',
          }}>
          {/* 15/06/2023 */}
        </div>
        {/* <Logo
          style={{ position: 'absolute', bottom: 40, left: 40, width: 30 }}
        /> */}
     <Link
          to='/'
          style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}>
          {'< back'}
        </Link>
      </div>
    </Router>
  )
}

const container = document.getElementById('root')
const root = createRoot(container) // Create a root.
root.render(<Root />)
