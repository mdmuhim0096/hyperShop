import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Ayesha Rahman",
        role: "Verified Buyer",
        review:
            "Amazing shopping experience! Product quality exceeded my expectations and delivery was super fast.",
        color: "text-blue-500"
    },
    {
        name: "Nusrat Jahan",
        role: "Regular Customer",
        review:
            "The flash sales are fantastic! Easy checkout and secure payment system make shopping stress-free.",
        color: "text-green-500"
    },
    {
        name: "Imran Hossain",
        role: "Happy Customer",
        review:
            "Excellent service and original products. Everything matched the description perfectly.",
        color: "text-pink-500"
    },
    {
        name: "Rahim Uddin",
        role: "Loyal Customer",
        review:
            "Customer support was very responsive and helpful. I trust this store for all my online shopping.",
        color: "text-yellow-500"
    },
    {
        name: "Jhon Doe",
        role: "New Customer",
        review:
            "Beautiful UI and smooth experience on mobile. I received my order on time and in perfect condition.",
        color: "text-red-500"
    },
];

const Testimonials = () => {
    return (
        <section className="py-16">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    className='text-3xl sm:text-4xl text-white my-5 px-3 text-center'
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    id='demotext'

                >
                    What Our Customers Say
                </motion.h2>
                <motion.p className="text-gray-400 mb-10 text-lg">
                    Real stories from real customers
                </motion.p>

                <Carousel
                    autoPlay
                    infiniteLoop
                    interval={4500}
                    showThumbs={false}
                    showStatus={false}
                    swipeable
                    emulateTouch
                    stopOnHover
                >
                    {testimonials.map((item, index) => (
                        <div key={index} className="px-4">
                            <div className=" rounded-xl p-8 shadow-md max-w-3xl mx-auto flex flex-col items-center">

                                <img
                                    src={`./user${index}.png`}
                                    alt={item.name}
                                    style={{ width: "140px" }}
                                    className="rounded-full my-5"
                                />

                                <p className="text-gray-400 sm:text-lg mb-6 w-72 sm:w-80 text-sm">
                                    “{item.review}”
                                </p>

                                <h4 className={`font-semibold text-lg ${item.color}`}>
                                    {item.name}
                                </h4>
                                <span className="text-sm text-gray-500">
                                    {item.role}
                                </span>
                            </div>
                        </div>
                    ))}
                </Carousel>

            </div>
        </section>
    );
};

export default Testimonials;
