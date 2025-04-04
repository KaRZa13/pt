import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollTitle from './elements/ScrollTitle'
import DecryptedText from './elements/DecryptedText'
import career from '../json/career.json'

const Career = () => {
  const leftDivRef = useRef(null)
  const rightDivRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {

    gsap.fromTo(
      leftDivRef.current,
      {
        opacity: 0,
        x: -100,
        scale: 0.8,
      }, {
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: leftDivRef.current,
        start: 'top bottom-=20%',
        end: 'top top+=25%',
        scrub: true,
        // markers: true,
      }
    }
    )

    gsap.fromTo(
      rightDivRef.current,
      {
        opacity: 0,
        x: 100,
        scale: 0.8,
      }, {
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: rightDivRef.current,
        start: 'top bottom-=20%',
        end: 'top top+=25%',
        scrub: true,
        // markers: true,
      }
    }
    )
  })

  return (
    <section className='w-screen h-screen font-grotesk flex flex-col justify-center mb-[50vh]'>
      <h3 className='w-full h-full flex justify-center items-center'>
        <ScrollTitle
          animationDuration={3}
          ease='back.inOut(2)'
          scrollStart='top bottom+=50%'
          scrollEnd='bottom bottom-=30%'
          stagger={0.1}
          textClassName='text-5xl uppercase'
        >
          Mon parcours
        </ScrollTitle>
      </h3>

      <div className='w-full h-full inline-flex gap-8 px-8 '>

        {/* Professionnel */}
        <div ref={leftDivRef} className='w-1/2 h-[75vh] flex flex-col items-center bg-purple-300/60 rounded-lg p-4'>
          <h3>
            <DecryptedText
              text='Professionnel'
              speed={125}
              animateOn='view'
              revealDirection='start'
              sequential={true}
              className='text-3xl'
              parentClassName='text-3xl'
            />
          </h3>

          <div className='w-full h-2/3 flex justify-end space-y-6 px-4 py-16'>
            <div className='flex flex-col space-y-6'>
              {career.career.map((item, index) => (
                <div key={index} className='inline-flex flex-row-reverse gap-4'>
                  <div className='flex justify-center items-start'>
                    <img src={item.logo} alt='Logo' className='w-auto h-16 p-1 rounded-lg' />
                  </div>
                  <div className='flex flex-col justify-center items-end'>
                    <h4 className='text-2xl'>{item.name}</h4>
                    <div className='inline-flex items-center gap-2'>
                      <p className='text-md'>{item.job}</p>
                      <p className='text-sm'>{item.date}</p>
                    </div>
                    <p className='text-md'>{item.location}</p>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Formation */}
        <div ref={rightDivRef} className='w-1/2 h-[75vh] flex flex-col items-center bg-purple-300/60 rounded-lg p-4'>
          <h3>
            <DecryptedText
              text='Formation'
              speed={125}
              animateOn='view'
              revealDirection='start'
              sequential={true}
              className='text-3xl'
              parentClassName='text-3xl'
            />
          </h3>
          <div className='w-full h-2/3 flex px-4 py-16'>
            <div className='flex flex-col space-y-6'>
              {career.education.map((item, index) => (
                <div key={index} className='inline-flex gap-4'>
                  <div className='flex justify-center items-start'>
                    <img src={item.logo} alt='Logo' className='w-16 h-16 p-2 rounded-lg' />
                  </div>
                  <div className='flex flex-col justify-center items-start'>
                    <h4 className='text-2xl'>{item.name}</h4>
                    <div className='inline-flex items-center gap-2'>
                      <p className='text-md'>{item.school}</p>
                      <p className='text-sm'>{item.date}</p>
                    </div>
                    <p className='text-md'>{item.location}</p>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Career