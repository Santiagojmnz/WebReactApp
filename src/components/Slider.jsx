import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};


function Slider({ array,type }) {
    console.log(array)
    
    return (
        <>
            {type==="testimonials" ? (<Carousel responsive={responsive}
                autoPlay={true}
                infinite={true}
                arrows={false}
            >
                {array.map((testimonio) => (
                    <div key={testimonio.id} className="flex max-w-xl flex-col items-start justify-between ml-4">
                        <div className="flex items-center gap-x-4 text-xs">
                            <time  className="text-gray-500">
                                {testimonio.date}
                            </time>
                        </div>
                  
                        <img className="w-5 h-5"  src="../../public/img/testimonials/quote-left-icon.svg"></img>
                       
                        <p className="text-sm leading-6 text-gray-600">{testimonio.mensaje}</p>
                        <div className="relative mt-8 flex items-center gap-x-4">
                            <img src={testimonio.src} alt="" className="h-10 w-10  bg-gray-50 rounded-full" />
                            <div className="text-sm leading-6">

                                <p className="font-semibold text-gray-900">
                                    <a href={testimonio.image}>
                                        <span className="absolute inset-0" />
                                        {testimonio.name}
                                    </a>
                                </p>
                                <p className="text-gray-600">{testimonio.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>) : (<Carousel responsive={responsive}
                autoPlay={true}
                infinite={true}
                arrows={false}
            >
                {array.map((image) => (
                    <div key={image.id} className="overflow-hidden">
                        <img className="h-40 w-auto  mx-auto rounded-full" src={image.src}  />

                    </div>
                ))}
            </Carousel>)}
        </>



    )
}

export default Slider



