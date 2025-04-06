import BlurText from './elements/BlurText'
import Arrow from './svg/Arrow'
import Sound from './svg/Sound'
import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'
import ScrollTrigger from 'gsap/ScrollTrigger'

const Home = () => {
  const [showForm, setShowForm] = useState(true) 
  const [soundEnabled, setSoundEnabled] = useState(false)
  const [savedSoundEnabled, setSavedSoundEnabled] = useState(false)
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

  const handleSave = () => {
    setShowForm(false)
    setSavedSoundEnabled(soundEnabled)
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

      {/* menu tr */}
      <div className='absolute h-8 top-4 right-4 flex flex-col justify-center items-center'>
        <Sound isMuted={!savedSoundEnabled} />
      </div>

      {/* info scroll */}
      <div ref={scrollDivRef} className='absolute bottom-18 inline-flex justify-center items-center bg-white/50 rounded-full p-2 whitespace-nowrap'>
        <Arrow />
        <p>Scroll down</p>
        <Arrow />
      </div>

      {/* Cookies */}
      {showForm && (
      <div className={`absolute bottom-0 left-0 w-full h-1/4 bg-purple-800/80 flex justify-around items-center px-8 transition-opacity duration-500 ${showForm ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className='flex flex-col justify-center gap-4'>
          <p className='text-sm text-white'>Ce site utilise des sons et de la musique, il est conseillé de les utiliser pour une expérience optimale</p>
          <p className='text-sm text-white'>Ce site n'utilise aucuns cookies </p>
        </div>
        <div className='flex flex-col gap-8 items-end'>
          <div className='inline-flex justify-center items-center gap-2'>
            <p className='text-sm text-white'>Activer les effets sonores :</p>

            <label className="relative inline-flex items-center cursor-pointer">
              <input className="sr-only peer" type="checkbox" checked={soundEnabled} onChange={(e) => setSoundEnabled(e.target.checked)}/>
              <div className="peer rounded-full outline-none duration-100 after:duration-500 w-16 h-7 bg-purple-300 peer-focus:outline-none after:content-['Non'] after:absolute after:outline-none after:rounded-full after:h-5 after:w-7 after:bg-white after:top-1 after:left-1 after:flex after:justify-center after:items-center after:text-purple-800 after:text-xs peer-checked:after:translate-x-7 peer-checked:after:content-['Oui'] peer-checked:after:border-white" />
            </label>
          </div>
          <button className='py-1 px-4 text-zinc-800 text-xs rounded-full cursor-pointer bg-purple-300/50 hover:bg-purple-500/70 active:bg-purple-300/50 transition duration-300' onClick={handleSave}>Enregistrer</button>
        </div>
      </div>
      )}
    </section>
  )
}

export default Home
