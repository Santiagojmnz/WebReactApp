import React, { useState } from 'react';
import Slider from 'react-touch-drag-slider';
import Modal from 'react-modal';
import { ArrowLeftIcon,ArrowRightIcon,XMarkIcon } from '@heroicons/react/24/outline';
const photos = [
  {
    src: '/img/gallery/img1.jpg',
    width: 4,
    height: 3,
    title: 'Imagen 1',
    description: 'Descripción de la imagen 1',
  },
  {
    src: '/img/gallery/img2.jpg',
    width: 3,
    height: 2,
    title: 'Imagen 2',
    description: 'Descripción de la imagen 2',
  },
  {
    src: '/img/gallery/img3.jpg',
    width: 3,
    height: 2,
    title: 'Imagen 2',
    description: 'Descripción de la imagen 2',
  },
];

function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderOpen, setSliderOpen] = useState(false);

  const openImageViewer = (index) => {
    setActiveIndex(index);
    setSliderOpen(true);
  };

  const closeImageViewer = () => {
    setSliderOpen(false);
  };

  const nextSlide = () => {
    setActiveIndex((activeIndex + 1) % photos.length);
  };

  const prevSlide = () => {
    setActiveIndex((activeIndex - 1 + photos.length) % photos.length);
  };

  return (
    <section id="gallery">
      <div className="container px-5 py-10 mx-auto  md:px-10 lg:px-20 xl:px-32">
        <div className="flex flex-col w-full ">
          <h2 className="mb-4 text-4xl   text-center ">Galeria</h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Algunos casos de éxito que estamos orgullosos. Echa un vistazo a estos casos de éxito para ver cómo trabajamos.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded flex h-40 items-center cursor-pointer"
              onClick={() => openImageViewer(index)}
            >
              <img src={photo.src} alt={photo.title} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={sliderOpen}
        onRequestClose={closeImageViewer}
        className="fixed inset-0 flex items-center justify-center mt-16"
        overlayClassName="fixed inset-0 bg-black"
      >
        <div className="w-4/5 h-4/5 relative">
          <Slider
            onSlideComplete={(i) => setActiveIndex(i)}
            activeIndex={activeIndex}
            threshHold={100}
            transition={0.5}
          >
            {photos.map((photo, index) => (
              <div key={index}>
                <img src={photo.src} alt={photo.title} className="gb-white" />
              </div>
            ))}
          </Slider>

          <div className="absolute top-1/2 transform -translate-y-1/2 -left-10 z-10">
            <button onClick={prevSlide}>
              <ArrowLeftIcon className="text-white w-6 h-6 cursor-pointer" />
            </button>
          </div>

          <div className="absolute top-1/2 transform -translate-y-1/2 -right-10 z-10">
            <button onClick={nextSlide}>
              <ArrowRightIcon className="text-white w-6 h-6 cursor-pointer" />
            </button>
          </div>

          <div className="absolute top-0  mb-20 -right-20 -mt-10 ">
            <button onClick={closeImageViewer}>
              <XMarkIcon className="text-white w-6 h-6 cursor-pointer" />
            </button>
          </div>
        </div>
      </Modal>
    </section>
  );
}

export default Gallery;