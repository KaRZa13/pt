import { ReactLenis } from 'lenis/react'
import { useEffect, useRef } from 'react'

import Background from './components/elements/Background'
import SplashCursor from './components/elements/SplashCursor'

import Home from './components/Home'
import Profil from './components/Profil'
import Skills from './components/Skills'
import Project from './components/Project'
import Career from './components/Career'
import Contact from './components/Contact'

import backgroundMusic from '/sound/moments_like_this.wav'
import hoverSound from '/sound/hover_sound.mp3'

const App = () => {
  const audioRef = useRef(new Audio(backgroundMusic))

  const handleHoverSound = (enabled) => {
    if (enabled) {
      const audio = new Audio(hoverSound)
      audio.loop = false
      audio.volume = 0.4
      audio.play().catch((err) => {
        console.warn('Impossible de jouer le son :', err)
      })
    }
  }


  const handleSoundToggle = (enabled) => {
    const audio = audioRef.current
    audio.loop = true
    audio.volume = 0.5

    if (enabled) {
      audio.play().catch((err) => {
        console.warn('Impossible de jouer le son :', err)
      })
    } else {
      audio.pause()
    }
  }

  const handleSaveSound = (enabled) => {
    handleSoundToggle(enabled)
  }

  useEffect(() => {
    return () => {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
  }, [])

  return (
    <>
      {/* Desktop */}
        <Background
          style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}
          color={[1, 0.9, 1]}
          mouseReact={false}
          amplitude={0.1}
          speed={0.5}
        />
        <SplashCursor />
        <div className='w-full h-screen hidden xl:block'>
          <ReactLenis root options={{ smoothWheel: true, orientation: 'vertical' }}>
            <Home onSaveSound={handleSaveSound} onToggleSound={handleSoundToggle} />
            <Profil />
            <Skills />
            <Project />
            <Career />
            <Contact hoverSound={handleHoverSound}/>
          </ReactLenis>
        </div>


      {/* Mobile... */}
      <section className='xl:hidden w-full h-screen flex justify-center items-center text-3xl font-grotesk p-4'>
        <div className='flex justify-center items-center bg-purple-300/60 rounded-3xl p-8'>
          <p className='text-xl'>Ce portfolio n'est pas disponible (pour le moment...) sur mobile, pour le découvrir, revenez sur PC !</p>
        </div>
      </section>
    </>
  )
}

export default App
