import Slider from "./Slider";


const testimonials = [
  {
    id: 1,
    name: "Armando Cervantes",
    role: "CEO Soriana",
    mensaje:
      "Como aliado en nuestro objetivo de contribuir a la transformación digital del sector, cuyo trabajo en éste y otros retos ha resultado clave en la consecución de nuestros objetivos.",
    src: "/img/testimonials/Imagen1.jpg",
    date: "10/08/2023"
  },
  {
    id: 2,
    name: "Alfredo Tadea",
    role: "CEO Target Media",
    mensaje:
      "Han ayudado al cumplimiento de estos objetivos con el proyecto de tracking de nuestras entregas.",
    src: "/img/testimonials/imagen2.jpg",
    date: "10/08/2023"
  },
  {
    id: 3,
    name: "Ximena Ortiz",
    role: "CEO Sky-Drive",
    mensaje:
      "Son una pieza clave en el desarrollo de sistemas de información para el cálculo de intercambiadores térmicos, evaporadores, etc. que nos ayudan a mejorar la producción.",
    src: "/img/testimonials/imagen3.jpg",
    date: "10/08/2023"
  },
  {
    id: 4,
    name: "Brenda Espinoza",
    role: "CEO Bonafont",
    mensaje:
      "Estamos en un sector con mucha competencia. Consideramos que la tecnología es imprescindible para poder desarrollarnos, ofreciendo mejores servicios a nuestros clientes y facilitando la comunicación con nuestros equipos. ",
    src: "/img/testimonials/imagen4.jpg",
    date: "10/08/2023"
  },

];
function Testimonials() {
  return (
    <section id="testimonials" className="body-font -mt-10">
      <div className="container px-5 py-10 mx-auto  md:px-10 lg:px-20 xl:px-32"> 
        <div className="flex flex-col w-full -mb-10">
    
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Lo que comentan nuestros clientes de nuestro trabajo. </p>
        </div>
        <div>
          <Slider array={testimonials} type="testimonials"></Slider>
        </div>

      </div>
    </section>
  )
}

export default Testimonials