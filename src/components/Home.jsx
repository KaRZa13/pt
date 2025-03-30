import BlurText from './elements/BlurText'
import Arrow from './svg/Arrow'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import ScrollTrigger from 'gsap/ScrollTrigger'

const Home = () => {
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
        start: 'top 85%',
        end: 'bottom 70%',
        scrub: true,
        toggleActions: 'play none none reverse',
        // markers: true
      }
    })
  }, [])

  return (
    <>
      <div className='w-screen h-screen font-grotesk flex justify-center items-center relative overflow-hidden'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <h1 className='text-zinc-900 text-3xl'>
            <BlurText
              text="RAFAEL MURO"
              delay={450}
              animateBy="words"
              direction="top"
              className="text-9xl mb-8" />
          </h1>
          <h2>
            <BlurText
              text="Développeur fullstack"
              delay={900}
              animateBy="words"
              direction="top"
              className="text-7xl mb-8" />
          </h2>
        </div>
        <div ref={scrollDivRef} className='absolute bottom-24 inline-flex justify-center items-center bg-white/50 rounded-full p-2 whitespace-nowrap'>
          <Arrow />
          <div>Scroll down</div>
          <Arrow />
        </div>
      </div>
    </>
  )
}

export default Home
