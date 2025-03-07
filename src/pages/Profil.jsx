import ScrollTitle from '../components/ScrollTitle'
import ContentScroll from '../components/ContentScroll'

const Profil = () => {

  return (
    <>

      <div className='w-screen h-[50vh] flex justify-center items-center font-grotesk'>
        <div>
          <ScrollTitle
            animationDuration={3}
            ease='back.inOut(2)'
            scrollStart='center bottom+=30%'
            scrollEnd='bottom bottom-=30%'
            stagger={0.1}
            textClassName='!text-4xl uppercase'
          >
            Une petite présentation s'impose
          </ScrollTitle>
        </div>
      </div>


      {/* PHOTO + PRESENTATION */}
      <div className='w-screen h-[75vh] inline-flex justify-center font-grotesk space-x-32 px-16 mb-[50vh]'>

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
            <div className='text-2xl font-light leading-10'> 
              Je m'appelle Rafael MURO, développeur fullstack passionné par le monde du développement web. Depuis mon plus jeune âge, j’ai toujours été attiré par l’informatique, explorant mes premières lignes de code en créant des mods sur Minecraft. Aujourd’hui, en tant qu’étudiant en développement web, j’ai à cœur de concevoir des outils sur mesure pour répondre aux besoins de mes clients. Curieux et toujours en quête d’apprentissage, je m’investis pleinement dans chaque projet avec persévérance et rigueur. Mon objectif ? Construire des solutions fonctionnelles, intuitives et performantes qui allient technologie et expérience utilisateur.
            </div>
          </ContentScroll>
        </div>

      </div>
    </>
  )
}

export default Profil