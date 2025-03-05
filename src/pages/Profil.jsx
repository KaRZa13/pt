import ScrollTitle from '../components/ScrollTitle'
import ScrollText from '../components/ScrollText'

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
      <div className='w-screen h-screen flex justify-center items-center font-grotesk'>
        <div className='w-3/4 h-full'>
          <ScrollTitle
            animationDuration={3}
            ease='back.inOut(2)'
            scrollStart='center bottom+=50%'
            scrollEnd='bottom bottom-=30%'
            stagger={0.1}
          >
            Je suis un développeur web passionné par la création de sites web et d'applications web. J'aime apprendre de nouvelles technologies et les mettre en pratique pour créer des projets innovants.
          </ScrollTitle>
        </div>
      </div>
    </>
  )
}

export default Profil