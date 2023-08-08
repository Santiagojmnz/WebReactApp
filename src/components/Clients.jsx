import Slider from "./Slider";
const clients = [
  {
    id: 1,
    src: '/img/clients/ALSUPERNUEVO.png',
  },
  {
    id: 2,
    src: '/img/clients/Bonafon.png',
  },
  {
    id: 3,
    src: '/img/clients/Home-Depot-Logo.jpg',
  },
  {
    id: 4,
    src: '/img/clients/Soriana.png',
  },
  {
    id: 5,
    src: '/img/clients/gbm.jpg',
  },

];

function Clients() {
  return (
    <section id="clients" className="body-font">
      <div className="container px-5 py-10 mx-auto text-center md:px-10 lg:px-20 xl:px-32"> {/* Ajustamos el padding */}
        <div className="flex flex-col w-full mb-10">

          <h2 className="mb-4 text-4xl   text-center ">Clientes</h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Confía en nosotros para brindarte soluciones tecnológicas a medida que impulsarán tu crecimiento y transformarán tu negocio. Juntos, alcanzaremos nuevos horizontes.
           <br></br>
               ¡Bienvenido/a a nuestro equipo!
           
          </p>
        </div>
        <Slider array={clients} type="clients"></Slider>
      </div>
    </section>
  );
}


export default Clients