import { ReactLenis } from 'lenis/react'
import Background from './components/Background'
import SplashCursor from './components/SplashCursor'

import Home from './pages/Home'
import Profil from './pages/Profil'
import Skills from './pages/Skills'
import Project from './pages/Project'

const App = () => {

  return (
    <>
      <Background
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}
        color={[1, 1, 1]}
        mouseReact={false}
        amplitude={0.1}
        speed={0.5}
      />
      <SplashCursor />
      <ReactLenis className='w-screen h-screen' root options={{ smoothWheel: true, orientation: 'vertical' }}>
        <Home />
        <Profil />
        <Skills />
        <Project />
      </ReactLenis>
    </>
  )
}

export default App
