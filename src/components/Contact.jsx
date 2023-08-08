import { useState } from 'react';

function Contact() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [subjectError, setSubjectError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();




    // Validar campos
    let isValid = true;

    if (!email) {
      setEmailError('Por favor ingresa un correo electronico.');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Por favor ingresa un correo electronico valido.');
      isValid = false;
    }

    if (!subject) {
      setSubjectError('Por favor ingresa un asunto.');
      isValid = false;
    }

    if (!message) {
      setMessageError('Por favor ingresa un mensaje.');
      isValid = false;
    }

    if (isValid) {

      setSuccessMessage('Mensaje enviado..!');
    }
  }

  return (
    <section id="contact">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md ">
        <h2 className="mb-4 text-4xl text-center">Contactame</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Si quieres información sobre cualquier de nuestros servicios o estás interesado en alguno de ellos, rellena nuestro formulario y nos pondremos en contacto contigo en las siguientes horas.
        </p>
        <form action="#" className="space-y-8" onSubmit={handleSubmit} noValidate>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-normal text-gray-500 dark:text-gray-500 " >
              Correo electronico
            </label>
            <input
              id="email"
              className={`shadow-sm bg-gray-50 border ${emailError ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:placeholder-gray-400  dark:text-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light`}
              placeholder="ejemplo@dominio.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-normal text-gray-500 dark:text-gray-500 ">
              Asunto
            </label>
            <input
              id="subject"
              className={`block p-3 w-full text-sm bg-gray-50 rounded-lg border ${subjectError ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light`}
              placeholder="En que te podemos ayudar..."
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            {subjectError && <p className="text-red-500 text-xs mt-1">{subjectError}</p>}
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-normal text-gray-500 dark:text-gray-500 ">
              Mensaje
            </label>
            <textarea
              rows="6"
              className={`block p-2.5 w-full text-sm bg-gray-50 rounded-lg shadow-sm border ${messageError ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light`}
              placeholder="Escribe tu mensaje aqui............."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {messageError && <p className="text-red-500 text-xs mt-1">{messageError}</p>}
          </div>
          <button
            type="submit"
            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded"
          >
            Enviar mensaje
          </button>
          {successMessage && <p className="text-green-500 text-sm mt-2">{successMessage}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;