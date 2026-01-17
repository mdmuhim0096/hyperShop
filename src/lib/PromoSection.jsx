import { useEffect, useState } from "react";
import { Megaphone, Percent, Tally1 } from "lucide-react"
import { motion } from "framer-motion";

const PromoSection = () => {
    const [timeLeft, setTimeLeft] = useState(3600); // 1 hour

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (time) => {
        const h = String(Math.floor(time / 3600)).padStart(2, "0");
        const m = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
        const s = String(time % 60).padStart(2, "0");
        return `${h}:${m}:${s}`;
    };

    return (
        <section className="py-10 px-3 mt-32 mb-14">
            <motion.h2
                className='text-3xl sm:text-4xl text-white my-20 px-3 text-center'
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                id='demotext'

            >
                Discount
            </motion.h2>
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">

                {/* Discount Banner */}
                <div className="w-full bg-gradient-to-r from-orange-400 via-red-600 to-pink-700 text-white rounded-2xl p-[3px] flex items-center justify-center">
                    <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 px-4 py-7 rounded-xl bg-zinc-900 flex-wrap h-full">

                        {/* Text Content */}
                        <div>
                            <div className="mb-4 md:mb-0 flex items-center gap-3">
                                <Megaphone className="w-10 h-10 text-green-300" />
                                <h2 className="text-4xl md:text-5xl font-bold">
                                    Mega Sale
                                </h2>
                            </div>
                            <p className="md:text-lg mt-2 opacity-90">
                                Get up to <span className="font-semibold">50% OFF</span> on selected products
                            </p>
                        </div>
                        {/* Action Button */}
                        <button className="px-4 py-2 rounded-xl bg-blue-500 transition-all duration-200 hover:bg-emerald-600 flex items-center gap-2">
                            <span className="flex items-center">
                                <span className="text-2xl">50</span>
                                <Percent className="" />
                            </span>
                            <Tally1 />
                            <span>Shop Now</span>
                        </button>
                    </div>
                </div>

                {/* Flash Sale with Countdown */}
                <div className="rounded-xl p-4 flex flex-col justify-center text-white border-4 border-gray-800">
                    <h3 className="text-2xl font-bold mb-3">
                        Flash Sale
                    </h3>
                    <p className="mb-4">
                        Hurry up! Sale ends in:
                    </p>

                    <div className="text-3xl font-mono font-bold text-red-500 mb-4">
                        {formatTime(timeLeft)}
                    </div>

                    <button className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600 w-fit">
                        Grab Deal
                    </button>
                </div>

            </div>
            <p 
            className="text-gray-400 p-3 border-4 border-gray-800 rounded-lg my-8 text-justify text-lg transition-all duration-300 hover:text-white">
                The Promotional Offers section is designed to capture customer attention and drive sales by showcasing exclusive discounts, flash sales, and seasonal promotions in a visually engaging way. Attractive banners highlight special deals and limited-time offers, making it easy for customers to instantly recognize ongoing promotions.

                A built-in flash sale area with a live countdown timer creates a strong sense of urgency, encouraging visitors to make quicker purchasing decisions before the offer expires. This urgency-based design helps reduce hesitation and increases conversion rates, especially during high-traffic sale periods.

                Additionally, the optional promotional popup ensures that important offers, such as first-order discounts or special campaigns, are not missed by users. The entire section is fully responsive, user-friendly, and optimized for both desktop and mobile devices, providing a seamless shopping experience while effectively boosting engagement, sales, and customer retention. <span className="underline text-blue-700 cursor-pointer">learn more</span>
            </p>
        </section>
    );
};

export default PromoSection;
