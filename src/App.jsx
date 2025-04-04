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
      <section className='md:hidden w-screen h-screen flex justify-center items-center text-3xl font-grotesk p-4'>
        <div className='flex justify-center items-center bg-purple-300/60 rounded-3xl p-8'>
          <p className='text-2xl'>Ce portfolio n'est pas dispobible, pour en profiter, revenez sur PC !</p>
        </div>
      </section>
      <div className='w-screen h-screen hidden md:block'>
        <ReactLenis root options={{ smoothWheel: true, orientation: 'vertical' }}>
          <Home />
          <Profil />
          <Skills />
          <Project />
          <Career />
          <Contact />
        </ReactLenis>
      </div>
    </>
  )
}

export default App
