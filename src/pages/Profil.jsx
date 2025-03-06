import ScrollTitle from '../components/ScrollTitle'
import ImageProfile from '../components/ImageProfile'

const Profil = () => {

  return (
    <>

      <div className='w-screen h-screen flex justify-center items-center font-grotesk'>
        <ScrollTitle
          animationDuration={3}
          ease='back.inOut(2)'
          scrollStart='center bottom+=50%'
          scrollEnd='bottom bottom-=30%'
          stagger={0.1}
        >
          Une petite présentation s'impose
        </ScrollTitle>
      </div>


      {/* PHOTO + PRESENTATION */}
      <div className='w-screen h-screen flex justify-between items-center font-grotesk space-x-8 px-16'>
        
        {/* PHOTO */}
        <div className='w-1/4 h-full'>
          <ImageProfile
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <img src="https://media.licdn.com/dms/image/v2/D4E35AQGLQ_TRzt_ckw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1728974578544?e=1741874400&v=beta&t=qfIQx-8p5Cas3b6ljGq2jv6xyHenwukC8IWpHLXO1Vw" alt="" />
          </ImageProfile>
        </div>

        {/* PRESENTATION */}
        <div className='w-3/4 h-full'>
          <ScrollTitle
            animationDuration={10}
            ease='back.inOut(2)'
            scrollStart='center bottom+=10%'
            scrollEnd='bottom bottom-=10%'
            stagger={0.1}
            textClassName='!text-2xl'
          >
            Je m'appelle Rafael MURO, développeur fullstack passionné par le monde du développement web. Depuis mon plus jeune âge, j’ai toujours été attiré par l’informatique, explorant mes premières lignes de code en créant des mods pour Minecraft. Aujourd’hui, en tant qu’étudiant en développement web, j’ai à cœur de concevoir des outils sur mesure pour répondre aux besoins de mes clients. Curieux et toujours en quête d’apprentissage, je m’investis pleinement dans chaque projet avec persévérance et rigueur. Mon objectif ? Construire des solutions fonctionnelles, intuitives et performantes qui allient technologie et expérience utilisateur.
          </ScrollTitle>
        </div>

      </div>
    </>
  )
}

export default Profil