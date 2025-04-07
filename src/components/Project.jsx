import { gsap } from 'gsap'
import { useEffect, useRef, useState } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollTitle from './elements/ScrollTitle'
import projects from '../json/projects.json'

const Project = () => {
  const galleryRef = useRef(null)
  const projectRefs = useRef([])
  const [flipped, setFlipped] = useState({})

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const updateAnimation = () => {
      if (!galleryRef.current || projectRefs.current.length === 0) return

      const firstProject = projectRefs.current[0]
      const lastProject = projectRefs.current[projectRefs.current.length - 1]

      const initialShift = firstProject.offsetLeft + firstProject.offsetWidth / 2 - window.innerWidth / 2
      const finalShift = lastProject.offsetLeft + lastProject.offsetWidth / 2 - window.innerWidth / 2
      const scrollDistance = finalShift - initialShift

      gsap.set(galleryRef.current, { x: -initialShift })

      gsap.to(galleryRef.current, {
        x: `-${finalShift}px`,
        ease: 'none',
        scrollTrigger: {
          trigger: galleryRef.current,
          start: 'center center',
          end: `+=${scrollDistance}`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          snap: {
            snapTo: 1 / (projectRefs.current.length - 1),
            duration: 0.5,
            ease: 'power1.inOut',
          },
        }
      })
      ScrollTrigger.refresh()
    }

    updateAnimation()
    window.addEventListener('resize', updateAnimation)
    return () => {
      window.removeEventListener('resize', updateAnimation)
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const toggleFlip = index => {
    setFlipped(prev => ({ ...prev, [index]: !prev[index] }))
  }

  return (
    <section className='flex flex-col overflow-x-hidden mb-[40vh] font-grotesk'>
      <span className='h-[50vh] flex justify-center items-center'>
        <ScrollTitle
          animationDuration={3}
          ease='back.inOut(2)'
          scrollStart='top bottom+=50%'
          scrollEnd='bottom bottom-=30%'
          stagger={0.1}
          textClassName='text-6xl uppercase'
        >
          Mes réalisations
        </ScrollTitle>
      </span>

      <div ref={galleryRef} className='relative h-full w-max flex justify-center items-center space-x-10 flex-nowrap overflow-hidden'>
        {projects.map((project, index) => (

          <article
            key={index}
            ref={(el) => projectRefs.current[index] = el}
            onClick={() => toggleFlip(index)}
            className={`relative ${!flipped[index] ? 'group' : ''} cursor-pointer overflow-hidden rounded-3xl perspective-[1000px]`}
          >
            <div className={`relative transition-transform duration-1000 transform-3d border-2 rounded-3xl ${flipped[index] ? 'rotate-y-180' : ''}`}>
              {/* Face avant */}
              <div className='flex flex-col items-center justify-center w-full h-full overflow-hidden rounded-3xl backface-hidden'>
                <div className='w-full h-full overflow-hidden'>
                  <img
                    src={project.image.src}
                    alt={project.name}
                    className={`w-[50vw] ${flipped[index] ? 'backface-hidden' : ''} transition-transform duration-300 group-hover:scale-105 rounded-3xl`}
                  />
                  <div className='absolute inset-0 bg-purple-200 opacity-0 group-hover:opacity-70 transition duration-300 pointer-events-none rounded-3xl'></div>
                  <h2 className='absolute inset-0 flex items-center justify-center text-4xl font-bold opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none'>
                    {project.name}
                  </h2>
                </div>
              </div>
              {/* Face arrière */}
              <div className='absolute inset-0 flex flex-col items-center justify-center w-full h-full rounded-3xl rotate-y-180 bg-purple-200/70 backface-hidden'>

                <div className='w-2/3 flex flex-col justify-center space-y-12'>
                  <div className='text-4xl font-bold'>
                    <h3>{project.name}</h3>
                  </div>
                  <div>
                    <p className='text-xl'>
                      {project.description}
                    </p>
                  </div>

                  {/* Chips */}
                  <div className='inline-flex space-x-8'>
                    {(project.techs || []).map((tech, id) => (
                      <div className='border py-1 px-4 rounded-full bg-violet-400/40 whitespace-nowrap' key={id}>{tech}</div>
                    ))}
                  </div>



                  {/* Liens */}
                  <div className='flex flex-col gap-8 mt-4'>
                    <span>
                      <a href={project.url.url} className={`text-lg relative no-underline leading-8 ${flipped[index] ? 'group' : ''}`}>
                        {project.url.label}
                        <span className='absolute bottom-[-0.25rem] right-0 w-0 h-[2px] bg-black rounded transition-all duration-400 group-hover:w-full group-hover:left-0'></span>
                      </a>
                    </span>
                    {project['url-presentation'] && (
                      <span>
                        <a href={project['url-presentation']} target='_blank' rel='noopener noreferrer' className={`w-auto relative no-underline text-lg leading-8 ${flipped[index] ? 'group' : ''}`}>
                          Présentation vidéo
                          <span className='absolute bottom-[-0.25rem] right-0 w-0 h-[2px] bg-black rounded transition-all duration-400 group-hover:w-full group-hover:left-0'></span>
                        </a>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </article>

        ))}
      </div>
    </section>
  )
}

export default Project
