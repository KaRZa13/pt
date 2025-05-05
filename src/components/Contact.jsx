import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import DecryptedText from './elements/DecryptedText'
import ContactForm from './elements/ContactForm'
import GithubLogo from './svg/GithubLogo'
import Mail from './svg/Mail'
import Linkedin from './svg/Linkedin'
import Phone from './svg/Phone'
import Spotify from './svg/Spotify'
import CurriculumVitae from './svg/CurriculumVitae'

const Contact = ({ hoverSound }) => {
  const sectionRef = useRef(null)

  const socialIcons = [
    {
      icon: <Phone />,
      bgColor: 'bg-violet-400',
      borderColor: 'border-violet-400',
      link: 'tel:+33612345678'
    },
    {
      icon: <GithubLogo />,
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
    },
    {
      icon: <CurriculumVitae />,
      bgColor: 'bg-teal-700',
      borderColor: 'border-teal-700',
      link: '/cv_Rafael_MURO.pdf',
      download: true
    }
  ]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(sectionRef.current, {
      opacity: 0,
      y: 100
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        end: 'bottom bottom',
        toggleActions: 'play none none reverse',
        // markers: true
      }
    })
    setTimeout(() => {
      ScrollTrigger.refresh()
    }, 100)
  })

  return (
    <section ref={sectionRef} className='h-screen w-screen flex flex-col font-grotesk'>
      {/* Contact */}
      <div className='w-full h-3/5 bg-zinc-500/80 inline-flex justify-center px-16'>

        <div className='w-full flex flex-col justify-center items-center'>
          <h2>
            <DecryptedText
              text='Contactez moi'
              speed={125}
              animateOn='view'
              revealDirection='start'
              sequential={true}
              className='text-5xl'
              parentClassName='text-4xl'
            />
          </h2>
        </div>

        <div className='w-1.5 bg-zinc-400 my-12 rounded-full' />

        <div className='w-full flex flex-col justify-center items-center'>
          <ContactForm />
        </div>
      </div>

      {/* Socials */}
      <div className='w-full h-2/5 bg-purple-200/60 flex flex-col justify-center items-center py-2'>

        <div className='flex items-center gap-16 w-full h-full justify-center'>
          {socialIcons.map((social, index) => (
            <div key={index}>
              <a href={social.link} target='_blank' rel='noreferrer'>
                <button onMouseEnter={hoverSound} className='relative w-24 h-24 rounded-full group cursor-pointer'>
                  <div className={`floater w-full h-full absolute top-0 left-0 ${social.bgColor} rounded-full duration-300 group-hover:-top-16 group-hover:shadow-2xl`} />
                  <div className={`icon relative z-10 w-full h-full flex items-center justify-center border-2 ${social.borderColor} rounded-full`}>
                    {social.icon}
                  </div>
                </button>
              </a>
            </div>
          ))}
        </div>
        <span className='text-sm inline-flex gap-2'>Portfolio réalisé par Rafael MURO - 2025 - Musique "Moments like this" par Chill Denis <a href="https://open.spotify.com/intl-fr/artist/4gOKqVqVRQCGUrc70alpbr?si=FQX3JJnTTvqzdGQn3uyAZg"><Spotify/></a></span>

      </div>
    </section>
  )
}

export default Contact