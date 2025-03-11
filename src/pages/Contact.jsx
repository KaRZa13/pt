import DecryptedText from '../components/DecryptedText'

const Contact = () => {

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center font-grotesk">
      <h1>Contact</h1>
      <p>Send us a message!</p>
      <DecryptedText
        text="Bonjour je m'appelle Rafael MURO"
        speed={50}
        characters="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789=+-_:;,?.!@#$%^&*()[]{}|"
        animateOn="view"
        revealDirection="start"
        sequential={true}
      />
    </div>
  )
}

export default Contact