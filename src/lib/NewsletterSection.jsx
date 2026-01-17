import { motion } from "framer-motion"

const NewsletterSection = () => {
    return (
        <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto text-center text-white">

                <motion.h2
                    className='text-3xl sm:text-4xl text-white my-10 px-3 text-center'
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    id='demotext'

                >
                    Subscribe to Our Newsletter
                </motion.h2>
                <p className="text-gray-300 mb-8">
                    Get the latest updates, exclusive offers, and special discounts
                    delivered straight to your inbox.
                </p>

                <div className="flex items-center justify-center gap-4 ">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="w-full md:w-96 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500 bg-transparent border-2 border-gray-800 py-2 px-3 "
                    />
                    <button className="bg-red-500 hover:bg-red-600 rounded-md py-2 px-3 text-sm">
                        Subscribe
                    </button>
                </div>

                <p className="text-xs text-gray-400 mt-4">
                    We respect your privacy. Unsubscribe at any time.
                </p>
            </div>
        </section>
    );
};

export default NewsletterSection;
