import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import projects from '../json/projects.json'

gsap.registerPlugin(ScrollTrigger);

const HorizontalGallery = () => {
  const containerRef = useRef(null)
  const scrollRef = useRef(null)
  const [projectList, setProjectList] = useState([])

  useEffect(() => {
    setProjectList(projects)
    const totalWidth = projects.length * 320
    // On ajuste la hauteur pour permettre le défilement vertical
    containerRef.current.style.height = totalWidth + "px"

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: () => `+=${totalWidth}`,
      scrub: 1,
      onUpdate: self => {
        // Utilise la progression du scroll vertical pour caler la translation horizontale
        const progress = self.progress
        gsap.to(scrollRef.current, {
          x: -((totalWidth - window.innerWidth) * progress),
          ease: "none",
        })
      },
    })
  }, [])

  return (
    <div ref={containerRef} className="relative w-screen">
      <div ref={scrollRef} className="flex space-x-4 w-max">
        {projectList.map((project, index) => (
          <div key={index} className="w-[400px] h-[300px] bg-gray-100 p-4 rounded-lg shadow-lg">
            {project.name}
            <img src={project.image.src} alt={project.image.alt} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default HorizontalGallery