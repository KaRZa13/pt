import BlurText from './BlurText'

const Title = () => {

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  }

  return (
    <>
      <div className='absolute flex flex-col justify-center items-center w-full h-full'>
        <h1 className='text-zinc-900 text-3xl'>
          <BlurText
            text="RAFAEL MURO"
            delay={450}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-9xl mb-8" />
        </h1>
        <h2>
          <BlurText
            text="Développeur fullstack"
            delay={900}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-7xl mb-8" />
        </h2>
      </div>
    </>
  )
}

export default Title