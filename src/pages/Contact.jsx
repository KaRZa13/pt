import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import DecryptedText from '../components/DecryptedText'
import ContactForm from '../components/ContactForm'
import Github from '../components/svg/github'
import Mail from '../components/svg/Mail'
import Linkedin from '../components/svg/Linkedin'
import Phone from '../components/svg/Phone'


const Contact = () => {

  gsap.registerPlugin(ScrollTrigger)

  const topDivRef = useRef(null)
  const botDivRef = useRef(null)
  const sectionRef = useRef(null)


  const socialIcons = [
    {
      icon: <Phone />,
      bgColor: 'bg-violet-400',
      borderColor: 'border-violet-400',
      link: 'tel:+33612345678'
    },
    {
      icon: <Github />,
      bgColor: 'bg-black',
      borderColor: 'border-black',
      link: 'https://github.com/KaRZa13'
    },
    {
      icon: <Linkedin />,
      bgColor: 'bg-blue-500',
      borderColor: 'border-blue-500',
      link: 'https://www.linkedin.com/in/rafael-muro-39b219295/'
    },
    {
      icon: <Mail />,
      bgColor: 'bg-red-400',
      borderColor: 'border-red-400',
      link: 'mailto:rafael.muro@proton.me'
    }
  ]

  useEffect(() => {
    gsap.fromTo(topDivRef.current, {
      y: '100%',
      opacity: 0,
      height: '0vh'
    }, {
      y: 0,
      opacity: 1,
      height: '60vh',
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 50%',
        end: 'bottom bottom',
        scrub: true,
        toggleActions: 'play none none reverse',
        // markers: true
      },
    })

    gsap.fromTo(botDivRef.current, {
      y: '-100%',
      opacity: 0,
      height: '0vh'
    }, {
      y: 0,
      opacity: 1,
      height: '40vh',
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 40%',
        end: 'bottom bottom',
        scrub: true,
        toggleActions: 'play none none reverse',
        // markers: true
      }
    })
  })

  return (
    <section ref={sectionRef} className="h-screen w-screen flex flex-col overflow-x-hidden font-grotesk">
      {/* Div bleue (25%) */}
      <div ref={topDivRef} className="w-full bg-zinc-500/80 inline-flex justify-center px-16">

        <div className='w-full flex flex-col justify-center items-center'>
          <h2>
            <DecryptedText
              text="Contactez moi"
              speed={150}
              animateOn="view"
              revealDirection="start"
              sequential={true}
              className='text-5xl uppercase'
              parentClassName='text-5xl'
            />
          </h2>
          <a onClick={(e) => {
            e.preventDefault()
            window.open('https://www.linkedin.com/in/rafael-muro-39b219295/', '_blank')
          }}>
          </a>
        </div>

        <div className='w-1.5 bg-zinc-400 my-12 rounded-full' />

        <div className='w-full flex flex-col justify-center items-center'>
          <ContactForm />
        </div>


      </div>

      {/* Div blanche (75%) */}
      <div ref={botDivRef} className="w-full bg-purple-200/80  flex justify-center items-center">

        <div class="flex items-center gap-16 w-full h-full justify-center">
          {socialIcons.map((social, index) => (
            <div key={index}>
              <a href={social.link} target="_blank" rel="noreferrer">
                <button className="relative w-24 h-24 rounded-full group cursor-pointer">
                  <div className={`floater w-full h-full absolute top-0 left-0 ${social.bgColor} rounded-full duration-300 group-hover:-top-16 group-hover:shadow-2xl`} />
                  <div className={`icon relative z-10 w-full h-full flex items-center justify-center border-2 ${social.borderColor} rounded-full`}>
                    {social.icon}
                  </div>
                </button>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Contact