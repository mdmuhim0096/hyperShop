import { motion } from "framer-motion";
import Navbar from "../lib/Navbar";
import Footer from "../lib/Footer";
import { Link } from "react-router-dom";
import TrustedBrands from "../lib/TrustedBrands";
import { ShieldCheck, Feather, Rabbit, UserRoundCheck, HeartHandshake, Check } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <div className="">
      <Navbar />
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24 mt-12 flex justify-center items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="max-w-6xl mx-auto px-6 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Our Store
          </h1>
          <p className="text-lg md:text-xl text-indigo-100 max-w-3xl mx-auto">
            More than just an online shop — we deliver quality, trust, and
            convenience.
          </p>
          {/* AI-Style Glowing Button */}
          <button className="
            mt-20 px-8 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500
            text-white font-bold rounded-3xl shadow-[0_0_20px_rgba(0,255,255,0.7)]
            relative
            overflow-hidden
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-[0_0_40px_rgba(0,255,255,0.9)]
            before:absolute
            before:-inset-1
            before:bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400
            before:blur-2xl
            before:opacity-60
            before:rounded-3xl
            before:content-empty
          ">
            Create Network
          </button>
          {/* Scroll Indicator */}
          <a
            href='#down'
            className='mx-auto w-7 h-12 border-2 mt-10 rounded-full flex justify-center items-center cursor-pointer'>
            <div className='w-[3px] h-5 rounded-full animate-bounce bg-white' />
          </a>
        </motion.div>
      </section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4f46e5" />   {/* indigo-600 */}
            <stop offset="100%" stopColor="#9333ea" /> {/* purple-600 */}
          </linearGradient>
        </defs>

        <path
          fill="url(#heroGradient)"
          d="M0,256L48,224C96,192,192,128,288,133.3C384,139,480,213,576,245.3C672,277,768,267,864,250.7C960,235,1056,213,1152,186.7C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
      </svg>

      {/* OUR STORY */}
      <section className="py-20" id="down">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-200 leading-relaxed mb-4 md:text-xl">
              Our journey began with a simple idea — to make online shopping
              easier, safer, and more affordable for everyone.
            </p>
            <p className="text-gray-200 leading-relaxed md:text-xl">
              We noticed that customers often face poor quality products, slow
              delivery, and unreliable service. That’s why we built a platform
              focused on transparency, quality, and customer satisfaction.
            </p>
          </div>

          <div className=" rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-semibold mb-3">What We Offer</h3>
            <ul className="space-y-2 text-gray-200 md:text-xl">
              <li>✔ Electronics & Gadgets</li>
              <li>✔ Fashion & Accessories</li>
              <li>✔ Lifestyle Essentials</li>
              <li>✔ Quality-Checked Products</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* MISSION & VISION */}
      <section className=" py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10"
        >
          <div className="flex flex-col justify-between items-center" >
            <div className="bg-blue-500 p-7 sm:p-8 md:10">
              <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
              <p className="text-gray-200 leading-relaxed sm:text-lg md:text-xl">
                To provide high-quality products with a seamless shopping
                experience while keeping prices affordable for everyone.
              </p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#3b82f6" fill-opacity="1" d="M0,32L48,58.7C96,85,192,139,288,176C384,213,480,235,576,213.3C672,192,768,128,864,117.3C960,107,1056,149,1152,144C1248,139,1344,85,1392,58.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
              </path>
            </svg>
          </div>


          <div className="flex flex-col justify-between items-center" >
            <div className="bg-blue-500 p-7 sm:p-8 md:10">
              <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
              <p className="text-gray-200 leading-relaxed sm:text-lg md:text-xl">
                To become a trusted e-commerce platform where customers feel
                confident, valued, and satisfied every time they shop.
              </p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3b82f6" fill-opacity="1" d="M0,64L48,80C96,96,192,128,288,144C384,160,480,160,576,181.3C672,203,768,245,864,229.3C960,213,1056,139,1152,96C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
          </div>
        </motion.div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-6"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Why Choose Us
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "High-Quality Products", icon: Feather, color: "text-lime-400" },
              { name: "Secure Payments", icon: ShieldCheck, color: "text-green-500" },
              { name: "Fast Delivery", icon: Rabbit, color: "text-pink-500" },
              { name: "Easy Returns", icon: UserRoundCheck, color: "text-yellow-500" },
              { name: "Customer Support", icon: HeartHandshake, color: "text-orange-500" },
              { name: "Trusted Sellers", icon: Check, color: "text-blue-500" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="h-20 rounded-2xl text-center font-medium text-gray-400 bg-zinc-800 transition-all duration-300 hover:bg-gradient-to-r from-blue-800 via-indigo-600 to-violet-800 shadow-lg hover:shadow-blue-600 hover:text-xl flex justify-center items-center border-s-4 border-s-blue-500 hover:border-s-0 hover:text-white"
              >
                {item.icon && <item.icon size={30} className={`${item.color} mx-5`} />}
                <span>{item.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto px-6 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Start Shopping With Confidence
          </h2>
          <p className="text-indigo-200 mb-8 max-w-2xl mx-auto">
            Join thousands of happy customers and enjoy a smooth, secure, and
            reliable shopping experience.
          </p>

          <Link to="/products" className="hover:scale-125 duration-200 inline-block transition-all">
            <button className=" text-white bg-gradient-to-br from-emerald-600 via-slate-800 to-indigo-900 px-8 py-3 rounded-xl font-semibold hover:bg-gradient-to-tl transition-all duration-500">
              Explore Products
            </button>
          </Link>
        </motion.div>
      </section>
      <div className="my-20">
        <TrustedBrands />
      </div>
      <Footer />
    </div>
  );
}
