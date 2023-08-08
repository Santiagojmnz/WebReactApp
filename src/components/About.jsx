


function About() {
  return (
    <section id="about" className="bg-gradient-to-br from-green-400 bg-gray-50 to-blue-400 mt-16 ">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-5 py-20">

        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="mb-4 text-4xl  font-medium text-center ">
            Sómos tu aliado tecnológico
          </h1>
          <p className="mb-8 lg:mb-16  text-center  dark:text-gray-800 sm:text-xl">
            Nuestro compromiso como aliado es acompañar a empresas en el proceso de transformación digital que están en busca de adaptar nuevas tecnologías a las necesidades de su organización.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded ">
              Contactame
            </a>
            <a
              href="#services"
              className="ml-4 inline-flex text-white bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 rounded">
              Servicios
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 lg:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/img/undraw_programming_re_kg9v.svg"
          />
        </div>
      </div>
    </section>
  );
}

export default About