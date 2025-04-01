import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from 'emailjs-com'

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const [buttonText, setButtonText] = useState('Envoyer')
  const [buttonColor, setButtonColor] = useState('rgba(216, 180, 254, 0.6)')

  const onSubmit = (data) => {
    emailjs.send(
      'service_vfaw7ib',
      'template_tdibosw',
      data,
      'jhUO-8kJJcMnO_D-G'
    )
      .then(() => {
        setButtonText('Message envoyé')
        setButtonColor('rgba(74, 222, 128, 0.6)')
        reset()
        setTimeout(() => {
          setButtonText('Envoyer')
          setButtonColor('rgba(216, 180, 254, 0.6)')
        }, 2000)
      })
      .catch((error) => {
        console.error('Erreur :', error)
        alert('Une erreur est survenue.')
      })
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 p-4 rounded-lg'>
      <div className='flex gap-4'>
        <div className='flex flex-col'>
          <input
            {...register('lastname', { required: 'Nom requis' })}
            placeholder='Votre nom'
            className='p-2 rounded bg-purple-200/50 outline-none focus:border focus:border-purple-500/70'
          />
          {errors.lastname && <span className='text-red-400'>* {errors.lastname.message}</span>}
        </div>

        <div className='flex flex-col'>
          <input
            {...register('firstname', { required: 'Prénom requis' })}
            placeholder='Votre prénom'
            className='p-2 rounded bg-purple-200/50 outline-none focus:border focus:border-purple-500/70'
          />
          {errors.firstname && <span className='text-red-400'>* {errors.firstname.message}</span>}
        </div>
      </div>

      <div className='flex flex-col'>
        <input
          {...register('email', {
            required: 'Email requis',
            pattern: { value: /^\S+@\S+$/i, message: 'Email invalide' }
          })}
          placeholder='Votre email'
          className='p-2 rounded bg-purple-200/50 outline-none focus:border focus:border-purple-500/70'
        />
        {errors.email && <span className='text-red-400'>* {errors.email.message}</span>}
      </div>

      <div className='flex flex-col'>
        <input
          {...register('subject', { required: 'Sujet requis' })}
          placeholder='Sujet'
          className='p-2 rounded bg-purple-200/50 outline-none focus:border focus:border-purple-500/70'
        />
        {errors.subject && <span className='text-red-400'>* {errors.subject.message}</span>}
      </div>

      <div className='flex flex-col'>
        <textarea
          {...register('message', { required: 'Message requis' })}
          placeholder='Votre message'
          onWheel={(e) => e.stopPropagation()}
          className='p-2 rounded bg-purple-200/50 h-38 resize-none overflow-y-auto outline-none focus:border focus:border-purple-500/70'
        />
        {errors.message && <span className='text-red-400'>* {errors.message.message}</span>}
      </div>


      <motion.button
        type='submit'
        className='p-2 text-zinc-700 rounded cursor-pointer'
        animate={{ backgroundColor: buttonColor }}
        whileHover={{ backgroundColor: 'rgba(192, 132, 252, 0.6)' }}
        transition={{ duration: 0.5 }}
      >
        {buttonText}
      </motion.button>
    </form>
  )
}

export default ContactForm
