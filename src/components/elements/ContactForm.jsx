import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com'

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    emailjs
      .send(
        'TON_SERVICE_ID',
        'TON_TEMPLATE_ID',
        data,
        'TON_USER_ID'
      )
      .then(
        () => {
          alert('Message envoyé !')
          reset();
        },
        (error) => {
          console.error('Erreur :', error)
          alert('Une erreur est survenue.')
        }
      )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 p-4 rounded-lg'>
      <div className='flex gap-4'>
        <div className='flex flex-col'>
          <input
            {...register('lastname', { required: 'Nom requis' })}
            placeholder='Votre nom'
            className='p-2 border rounded bg-white/50'
          />
          {errors.lastname && <span className='text-red-500'>* {errors.lastname.message}</span>}
        </div>

        <div className='flex flex-col'>
          <input
            {...register('firstname', { required: 'Prénom requis' })}
            placeholder='Votre prénom'
            className='p-2 border rounded bg-white/50'
          />
          {errors.firstname && <span className='text-red-500'>* {errors.firstname.message}</span>}
        </div>
      </div>

      <div className='flex flex-col'>
        <input
          {...register('email', {
            required: 'Email requis',
            pattern: { value: /^\S+@\S+$/i, message: 'Email invalide' }
          })}
          placeholder='Votre email'
          className='p-2 border rounded bg-white/50'
        />
        {errors.email && <span className='text-red-500'>* {errors.email.message}</span>}
      </div>
      
      <div className='flex flex-col'>
        <textarea
          {...register('message', { required: 'Message requis' })}
          placeholder='Votre message'
          onWheel={(e) => e.stopPropagation()}
          className='p-2 border rounded bg-white/50 h-38 resize-none overflow-y-auto'
        />
        {errors.message && <span className='text-red-500'>* {errors.message.message}</span>}
      </div>


      <button type='submit' className='p-2 bg-blue-500 text-white rounded hover:bg-blue-600'>
        Envoyer
      </button>
    </form>
  )
}

export default ContactForm
