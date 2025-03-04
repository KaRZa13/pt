import ScrollFloat from '../components/ScrollTitle'

const Profil = () => {

  return (
    <>
    <div className='w-screen h-screen flex justify-center items-center font-grotesk'>
      <ScrollFloat
        animationDuration={2}
        ease='back.inOut(2)'
        scrollStart='center bottom+=50%'
        scrollEnd='bottom bottom-=40%'
        stagger={0.03}
      >
        QUI SUIS JE ?
      </ScrollFloat>
    </div>
    </>
  )
}

export default Profil