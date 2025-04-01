import ScrollTitle from './elements/ScrollTitle'
import ContentScroll from './elements/ContentScroll'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

const Profil = () => {
  const profilRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    gsap.fromTo(profilRef.current, {
      opacity: 0,
      y: 100
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: profilRef.current,
        start: 'top 60%',
        end: 'bottom 95%',
        scrub: true,
        toggleActions: 'play none none reverse',
        // markers: true
      }
    })
  })

  return (
    <>

      <div className='w-screen h-[50vh] flex justify-center items-center font-grotesk'>
        <div>
          <ScrollTitle
            animationDuration={3}
            ease='back.inOut(2)'
            scrollStart='top bottom+=30%'
            scrollEnd='bottom bottom-=30%'
            stagger={0.1}
            textClassName='!text-5xl uppercase'
          >
            Une petite présentation s'impose
          </ScrollTitle>
        </div>
      </div>


      {/* PHOTO + PRESENTATION */}
      <div ref={profilRef} className='w-screen h-[75vh] bg-purple-200/50 inline-flex justify-center space-x-32 px-16 mb-[75vh] font-grotesk'>

        {/* PHOTO */}
        <div className='w-1/4 h-full flex justify-center items-center'>
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
            <img src="pp.jpeg" alt="Photo de profil" className='rounded-full' />
          </ContentScroll>
        </div>

        {/* PRESENTATION */}
        <div className='w-3/6 h-full flex justify-center items-center'>

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
            <div className='text-lg font-light leading-10 text-justify'> 
              Je m'appelle Rafael MURO, développeur fullstack passionné par le monde du développement web. Depuis mon plus jeune âge, j’ai toujours été attiré par l’informatique, explorant mes premières lignes de code en créant des mods sur Minecraft. Aujourd’hui, en tant qu’étudiant en développement web, j’ai à cœur de concevoir des outils sur mesure pour répondre aux besoins de mes clients. Curieux et toujours en quête d’apprentissage, je m’investis pleinement dans chaque projet avec persévérance et rigueur. <br/> Mon objectif ? Construire des solutions fonctionnelles, intuitives et performantes qui allient technologie et expérience utilisateur.
            </div>
          </ContentScroll>
        </div>

      </div>
    </>
  )
}

export default Profil