import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import DecryptedText from '../components/DecryptedText'
import ContactForm from '../components/ContactForm'

const Contact = () => {

  

  return (
    <section className="h-screen w-screen flex flex-col overflow-x-hidden font-grotesk">
      {/* Div bleue (25%) */}
      <div className="h-[60vh] w-full bg-blue-500/50 flex flex-col items-center">
        <div>
          <h2>
            <DecryptedText
              text="Contactez moi"
              speed={150}
              characters="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789=+-_:;,?.!@#$%^&*()[]{}|"
              animateOn="view"
              revealDirection="start"
              sequential={true}
              className='text-4xl uppercase'
              parentClassName='text-4xl'
            />
          </h2>
        </div>

        <div>
          <ContactForm />
        </div>


      </div>

      {/* Div blanche (75%) */}
      <div className="h-[40vh] w-full bg-white/50 flex justify-center items-center">

      </div>
    </section>
  )
}

export default Contact