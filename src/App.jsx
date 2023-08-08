import About from './components/About';
import Contact from './components/Contact';
import Galerry from './components/Galerry'
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import Clients from './components/Clients';
function App() {


  return (
        <main className='bg-gray-50'>
        <Navbar />
        <About />
        <Services />
        <Clients />
        <Galerry />
        <Testimonials />
        <Contact />
      </main>
    
  )
}

export default App
