import Slider from "react-touch-drag-slider";
const services = [
  {
    id: 1,
    image: '/img/Serv/undraw_mobile_development_re_wwsn.svg',
    title: 'Desarrollo Web y Apps',
    description: 'Desarrollamos aplicaciones de todo tipo: web, híbridas, nativas, empaquetado (PWA), para dispositivos Android / iOS, Smartphones, Smartwatch, Smart TV y Navegadores web, de acuerdo a buenas prácticas de desarrollo, seguridad y escalabilidad, utilizando marcos de tecnología incluidos Flutter, React Native, Xamarin, Swift, kotlin, Java, Angular y más.',
  },
  {
    id: 2,
    image: '/img/Serv/undraw_software_engineer_re_tnjc.svg',
    title: 'Desarrollo de Software',
    description: 'Desarrollamos soluciones empresariales de acuerdo a las necesidades de cada empresa: desarrollo o integración de un sistema a la medida mediante metodologías agile, proyectos de migración a la nube y administración de la nube, soporte y mejora continua a un desarrollo ya existente (integraciones adicionales, nuevas funcionalidades, corrección de bugs/incidencias), seguridad de información para tus aplicativos.',
  },
  {
    id: 3,
    image: '/img/Serv/undraw_web_shopping_re_owap.svg',
    title: 'Ecommerce',
    description: 'Te apoyamos en la construcción o mejora actual de canales digitales (web o app) cuya misión principal sea VENDER productos o servicios a través de internet, desde una perspectiva global (UX/UI, motor de comercio electrónico a definir, Pagos, Logística, Seguridad, Inventarios, Organigrama, Marketing (SEO), Marketplaces)',
  },
  {
    id: 4,
    image: '/img/Serv/ui-ux.svg',
    title: 'UI/UX Design',
    description: 'Diseñamos plataformas centradas en la interacción entre el usuario y el dispositivo, utilizando las mejores prácticas y líneas de interfaz sugeridas por cada entorno; con el objetivo de establecer los componentes y microinteracciones para formular el atractivo visual de un producto.',
  }
];
function Services() {
  return (
    <section id="services" className="body-font">
      <div className="container px-5 py-10 mx-auto text-center md:px-10 lg:px-20 xl:px-32"> 
        <div className="flex flex-col w-full mb-10">
        <h2 className="mb-4 text-4xl   text-center ">Servicios</h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Brindamos soluciones tecnológicas, apoyando a empresas, organizaciones e industrias a incursionar en la nueva economía de la transformación digital, mediante el desarrollo de software, y hardware a la medida.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 "> 
          {services.map((project) => (
            <div key={project.id} className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
              <img className="w-full" src={project.image} alt="Sunset in the mountains" />
              <div className="px-6 py-4">
                <div className="font-bold text-base mb-2">{project.title}</div>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{project.description}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;