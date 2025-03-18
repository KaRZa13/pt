import { useRef, useEffect } from 'react'
import skills from '../json/skills.json'
import Tilt from 'react-parallax-tilt'
import ScrollTitle from '../components/ScrollTitle'
import ContentScroll from '../components/ContentScroll'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'


const Skills = () => {
  const skillsRef = useRef(null)
  const maxAngle = 10

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    gsap.fromTo(skillsRef.current, {
      opacity: 0,
      y: 100
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: skillsRef.current,
        start: 'top 70%',
        end: 'bottom 85%',
        scrub: true,
        toggleActions: 'play none none reverse',
        // markers: true
      }
    })
  })

  return (
    <>
      <div className='w-screen h-screen flex flex-col justify-around items-center mb-[40vh] font-grotesk'>
        <div>
          <ScrollTitle
            animationDuration={3}
            ease='back.inOut(2)'
            scrollStart='center bottom+=50%'
            scrollEnd='bottom bottom-=30%'
            stagger={0.1}
            textClassName='!text-6xl uppercase'
          >
            Mes compétences
          </ScrollTitle>
        </div>

        <div ref={skillsRef}>
          <ContentScroll
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0}
            animateOpacity
            scale={0.8}
            threshold={0.2}
          >
            <div className='w-[80vw] h-auto flex flex-wrap justify-center items-center gap-4'>
              {skills.map((skill, index) => (
                <Tilt
                  key={index}
                  tiltMaxAngleX={maxAngle}
                  tiltMaxAngleY={maxAngle}
                  className='h-60 flex flex-col bg-purple-200/50 items-center justify-around rounded-lg border border-black shadow-lg aspect-square py-8
              before:w-8 before:h-8 before:border before:border-tertiary before:absolute before:z-10 before:opacity-30 before:duration-500 before:top-6 before:right-6 before:border-b-0 before:border-l-0 
              hover:before:w-[calc(100%_-_3rem)] hover:before:h-[calc(100%_-_3rem)] hover:after:w-[calc(100%_-_3rem)] hover:after:h-[calc(100%_-_3rem)]
              after:w-8 after:h-8 after:border after:border-tertiary after:absolute after:z-10 after:opacity-30 after:duration-500 after:bottom-6 after:left-6 after:border-t-0 after:border-r-0 '
                >
                  <img
                    src={skill.src}
                    alt={skill.alt}
                    className='w-24 h-24'
                  />
                  <span className='text-lg font-medium mt-2'>
                    {skill.name}
                  </span>
                </Tilt>
              ))}
            </div>
          </ContentScroll>
        </div>
      </div>
    </>
  )
}

export default Skills