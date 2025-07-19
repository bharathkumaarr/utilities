
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Lines from './components/Lines'

function App() {


  return (
    <div className='min-h-screen min-w-screen flex justify-center text-neutral-200 bg-neutral-900 selection:bg-zinc-400 flex-col items-center relative'>
      <Header />
      
      <Lines />
      <Hero />

      <Footer />
    </div>
  )
}

export default App
