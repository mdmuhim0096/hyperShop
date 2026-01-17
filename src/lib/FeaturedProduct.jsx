import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion } from 'framer-motion';

const FeaturedProductCarousel = () => {
    const FeaturedProductsArray = [
        { name: "Hoodie", image: "./hodi.png" },
        { name: "Bag", image: "./bag.png" },
        { name: "Shoe", image: "./boot.png" },
        { name: "Watch", image: "./waze.png" },
        { name: "Sunglass", image: "./glass.jpg" },
        { name: "T-shirt", image: "./tshirt.png" },
    ];

    const getSlidePercentage = () => {
        if (typeof window !== "undefined") {
            if (window.innerWidth < 640) return 90; // mobile: 1 slide
            if (window.innerWidth < 1024) return 45; // tablet: 2 slides
            return 30; // desktop: 3 slides
        }
        return 30;
    };

    return (
        <div className='px-4 my-32'>
            <motion.h2
                className='text-3xl sm:text-4xl text-white my-10 px-3 text-center'
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                id='demotext'

            >
                Featured
            </motion.h2>
            <Carousel
                showArrows={true}
                showThumbs={false}
                showIndicators={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={3000}
                centerMode={true}
                centerSlidePercentage={getSlidePercentage()}
                swipeable={true}
                dynamicHeight={false}
                className="rounded-xl overflow-hidden"
            >
                {FeaturedProductsArray.map((item, index) => (
                    <div key={index} className='px-2'>
                        <div className=''>
                            <div className="relative after:bg-black after:absolute after:w-10 after:h-10 after:bottom-0 after:right-0 after:z-20">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full object-contain"
                                />
                            </div>

                            <h3 className='text-white text-center mt-2'>{item.name}</h3>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default FeaturedProductCarousel;
