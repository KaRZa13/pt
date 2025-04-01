import ScrollTitle from "./elements/ScrollTitle"
import career from '../json/career.json'

const Career = () => {

  return (
    <section className="w-screen h-screen font-grotesk flex flex-col justify-center">
      <div className='w-full h-[50vh] flex justify-center items-center'>
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
      </div>

      <div className="w-full">
        <div>
          {/* PRO */}
        </div>
        <div>
          {/* CHRONOLOGIE */}
        </div>
        <div>
          {/* FORMATION */}
        </div>

      </div>


    </section>
  )
}

export default Career