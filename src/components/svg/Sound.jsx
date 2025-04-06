const Sound = ({ isMuted }) => {
  return (
    <div
      className="relative flex items-center justify-center w-12 h-12 bg-purple-300 rounded-full cursor-pointer transition duration-300 shadow-md overflow-hidden hover:bg-purple-500 active:scale-75"
    >
      {!isMuted && (
        <div className="speaker w-full h-full flex items-center justify-center z-10 transition-opacity duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.0"
            viewBox="0 0 75 75"
            className="w-4 fill-white"
          >
            <path
              d="M39.389,13.769 L22.235,28.606 L6,28.606 L6,47.699 L21.989,47.699 L39.389,62.75 L39.389,13.769z"
              style={{ stroke: '#fff', strokeWidth: 5, strokeLinejoin: 'round' }}
            />
            <path
              d="M48,27.6a19.5,19.5 0 0 1 0,21.4M55.1,20.5a30,30 0 0 1 0,35.6M61.6,14a38.8,38.8 0 0 1 0,48.6"
              style={{
                fill: 'none',
                stroke: '#fff',
                strokeWidth: 5,
                strokeLinecap: 'round',
              }}
            />
          </svg>
        </div>
      )}

      {isMuted && (
        <div className="mute-speaker absolute w-full h-full flex items-center justify-center opacity-100 z-20 transition-opacity duration-300">
          <svg
            version="1.0"
            viewBox="0 0 75 75"
            className="w-4 fill-white"
            stroke="#fff"
            strokeWidth="5"
          >
            <path
              d="m39,14-17,15H6V48H22l17,15z"
              fill="#fff"
              strokeLinejoin="round"
            />
            <path
              d="m49,26 20,24m0-24-20,24"
              fill="#fff"
              strokeLinecap="round"
            />
          </svg>
        </div>
      )}
    </div>
  )
}

export default Sound