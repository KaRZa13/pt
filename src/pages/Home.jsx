import BlurText from '../components/BlurText'
import Arrow from '../components/svg/Arrow'
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
        start: 'top 75%',
        end: 'bottom 60%',
        scrub: true,
        toggleActions: 'play none none reverse',
        // markers: true
      }
    })
  }, [])

  return (
    <>
      <div className='w-screen h-screen font-grotesk'>
        <div className='flex flex-col justify-center items-center w-full h-9/10'>
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
        <div className='h-1/10 flex justify-center items-center'>
          <div ref={scrollDivRef} className='inline-flex justify-center items-center bg-white/50 rounded-full p-2 whitespace-nowrap'>
            <Arrow />
            <div>Scroll down</div>
            <Arrow />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
