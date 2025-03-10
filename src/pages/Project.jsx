import ScrollTitle from "../components/ScrollTitle"
import HorizontalGallery from "../components/HorizontalGallery"

const Project = () => {
  return (
    <>
    <div className="w-screen h-screen flex flex-col justify-center items-center font-grotesk">
      <ScrollTitle
        animationDuration={3}
        ease='back.inOut(2)'
        scrollStart='center bottom+=50%'
        scrollEnd='bottom bottom-=30%'
        stagger={0.1}
        textClassName='!text-6xl uppercase'
      >
        Mes réalisations
      </ScrollTitle>
      <HorizontalGallery />
      

    </div>
    </>
  )
}

export default Project