import { useEffect, useRef } from 'react'
import DecryptedText from '../components/DecryptedText'
import ScrollTitle from '../components/ScrollTitle'


const Contact = () => {

  const contactDiv = useRef(null)

  useEffect(() => {
    
  })

  return (
    <section className="h-[135vh] w-screen flex flex-col pt-[40vh]">
      <span className='flex justify-center items-center'>
        <h2>
          <ScrollTitle
            animationDuration={3}
            ease='back.inOut(2)'
            scrollStart='center bottom+=50%'
            scrollEnd='bottom bottom-=30%'
            stagger={0.1}
            textClassName='!text-6xl uppercase'
          >
            Contactez moi
          </ScrollTitle>
        </h2>
      </span>
     <DecryptedText
        text="Bonjour je m'appelle Rafael MURO" 
        speed={50} 
        characters="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789=+-_:;,?.!@#$%^&*()[]{}|"
        animateOn="view"
        revealDirection="start"
        sequential={true}
     />
    </section>
  )
}

export default Contact