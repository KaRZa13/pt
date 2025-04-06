import BlurText from './elements/BlurText'
import Cookies from './elements/Cookies'
import Arrow from './svg/Arrow'
import Sound from './svg/Sound'
import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'
import ScrollTrigger from 'gsap/ScrollTrigger'

const Home = ({ onSaveSound, onToggleSound }) => {
  const [showCookiesDiv, setShowCookiesDiv] = useState(true) 
  const [soundEnabled, setSoundEnabled] = useState(false)
  const [savedChoiceSound, setSavedChoiceSound] = useState(false)
  const scrollDivRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    gsap.fromTo(scrollDivRef.current, {
      width: scrollDivRef.current.offsetWidth,
      opacity: 1
    }, {
      width: '0%',
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: scrollDivRef.current,
        start: 'top 70%',
        end: 'bottom 55%',
        scrub: true,
        toggleActions: 'play none none reverse',
        // markers: true
      }
    })
  }, [])

  const toggleSound = () => {
    setSavedChoiceSound((prev) => !prev)
    onToggleSound(!savedChoiceSound)
  }
  
  const handleSave = () => {
    setShowCookiesDiv(false)
    setSavedChoiceSound(soundEnabled)
    onSaveSound(soundEnabled)
  }

  return (
    <section className='w-screen h-screen font-grotesk flex justify-center items-center relative overflow-hidden mb-[25vh]'>

      {/* Title */}
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <h1 className='text-zinc-900 text-3xl'>
          <BlurText
            text='RAFAEL MURO'
            delay={450}
            animateBy='words'
            direction='top'
            className='text-9xl mb-8' />
        </h1>
        <h2>
          <BlurText
            text='Développeur fullstack'
            delay={900}
            animateBy='words'
            direction='top'
            className='text-7xl mb-8' />
        </h2>
      </div>

      {/* toggle music */}
      <div className='absolute h-8 top-4 right-4 flex flex-col justify-center items-center'>
        <Sound isMuted={!savedChoiceSound} onToggle={toggleSound}/>
      </div>

      {/* info scroll */}
      <div ref={scrollDivRef} className='absolute bottom-18 inline-flex justify-center items-center bg-white/50 rounded-full p-2 whitespace-nowrap'>
        <Arrow />
        <p>Scroll down</p>
        <Arrow />
      </div>

      {/* music */}
      {showCookiesDiv && (
        <Cookies
          showCookiesDiv={showCookiesDiv}
          soundEnabled={soundEnabled}
          setSoundEnabled={setSoundEnabled}
          handleSave={handleSave}
        />
      )}
    </section>
  )
}

export default Home
