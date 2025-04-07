const Cookies = ({ showCookiesDiv, soundEnabled, setSoundEnabled, handleSave }) => {
  return (
    <div className={`fixed bottom-0 left-0 w-full h-1/4 bg-purple-800/95 flex justify-around items-center z-10 px-8 transition-opacity duration-500 ${showCookiesDiv ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>

      <div className='flex flex-col justify-center gap-4'>
        <p className='text-md text-white'>Ce site utilise de la musique et des sons, il est conseillé de les utiliser pour une expérience optimale</p>
        <p className='text-md text-white'>Ce site n'utilise aucuns cookies </p>
      </div>

      <div className='flex flex-col gap-8 items-end'>

        <div className='inline-flex justify-center items-center gap-2'>

          <p className='text-md text-white'>Activer les effets sonores :</p>

          <label className="relative inline-flex items-center cursor-pointer">
            <input 
              className="sr-only peer"
              type="checkbox"
              checked={soundEnabled}
              onChange={(e) => setSoundEnabled(e.target.checked)}
            />
            <div className="peer rounded-full outline-none duration-100 after:duration-500 w-16 h-7 bg-purple-300 peer-focus:outline-none after:content-['Non'] after:absolute after:outline-none after:rounded-full after:h-5 after:w-7 after:bg-white after:top-1 after:left-1 after:flex after:justify-center after:items-center after:text-purple-800 after:text-xs peer-checked:after:translate-x-7 peer-checked:after:content-['Oui'] peer-checked:after:border-white" />
          </label>

        </div>

        <button onClick={handleSave} className='py-1 px-4 text-zinc-800 text-sm hover:text-zinc-200 rounded-full cursor-pointer bg-purple-300/50 hover:bg-purple-500/70 active:bg-purple-300/50 transition duration-300'>Enregistrer</button>
      </div>

    </div>
  )
}

export default Cookies