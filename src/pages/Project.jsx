import ScrollTitle from "../components/ScrollTitle"

const Project = () => {
  return (
    <>
    <div className="w-screen h-screen flex justify-center items-center font-grotesk">
      <ScrollTitle
        animationDuration={3}
        ease='back.inOut(2)'
        scrollStart='center bottom+=50%'
        scrollEnd='bottom bottom-=30%'
        stagger={0.1}
        textClassName='!text-9xl uppercase'
      >
        Mes réalisations
      </ScrollTitle>
    </div>
    </>
  )
}

export default Project