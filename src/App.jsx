import { ReactLenis } from 'lenis/react'
import Background from './components/elements/Background'
import SplashCursor from './components/elements/SplashCursor'

import Home from './components/Home'
import Profil from './components/Profil'
import Skills from './components/Skills'
import Project from './components/Project'
import Career from './components/Career'
import Contact from './components/Contact'

const App = () => {

  return (
    <>
      <Background
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}
        color={[1, 0.9, 1]}
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
        <Career />
        <Contact />
      </ReactLenis>
    </>
  )
}

export default App
