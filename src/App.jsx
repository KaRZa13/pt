import { ReactLenis } from 'lenis/react'
import Background from './components/Background'
import Home from './pages/Home'
import Profil from './pages/Profil'

const App = () => {



  return (
    <>
      <ReactLenis className='w-screen h-screen' root options={{ smoothWheel: true, orientation: 'vertical' }}>
        <Background
          style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}
          color={[1, 1, 1]}
          mouseReact={false}
          amplitude={0.1}
          speed={0.5}
        />
          <Home />
          <Profil />
      </ReactLenis>
    </>
  )
}

export default App
