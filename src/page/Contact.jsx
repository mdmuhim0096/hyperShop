import Navbar from "../lib/Navbar";
import Footer from "../lib/Footer";
import { PhoneIncoming, BookUser, Mails, Clock8 } from "lucide-react";

export default function Contact() {
    return (
        <div className="bg-black text-gray-300">
            <Navbar />

            {/* HERO */}
            <section className="bg-gradient-to-r from-teal-600 via-cyan-500 to-sky-800 py-24 text-white mt-12 relative">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Contact Us
                    </h1>
                    <p className="text-white/90 max-w-2xl mx-auto text-xl">
                        Have questions or need support? We’re here to help.
                    </p>
                </div>
                {/* Scroll Indicator */}
                <div className="w-full top-[80%] md:top-[100%] absolute">
                    <a
                        href='#contact'
                        className='mx-auto w-7 h-12 border-2 rounded-full flex justify-center items-center cursor-pointer' >
                        <div className='w-[3px] h-5 rounded-full animate-bounce bg-white' />
                    </a>
                </div>
            </section>

            {/* STATIC WAVE DIVIDER */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
                className="-mt-1 block"
            >
                <defs>
                    <linearGradient
                        id="contactStaticGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                    >
                        <stop offset="0%" stopColor="#0d9488" /> {/* teal-600 */}
                        <stop offset="50%" stopColor="#06b6d4" /> {/* cyan-500 */}
                        <stop offset="100%" stopColor="#075985" /> {/* sky-500 */}
                    </linearGradient>
                </defs>

                <path
                    fill="url(#contactStaticGradient)"
                    d="M0,256L12.6,250.7C25.3,245,51,235,76,245.3C101.1,256,126,288,152,288C176.8,288,202,256,227,218.7C252.6,181,278,139,303,149.3C328.4,160,354,224,379,234.7C404.2,245,429,203,455,154.7C480,107,505,53,531,48C555.8,43,581,85,606,128C631.6,171,657,213,682,240C707.4,267,733,277,758,250.7C783.2,224,808,160,834,112C858.9,64,884,32,909,58.7C934.7,85,960,171,985,208C1010.5,245,1036,235,1061,202.7C1086.3,171,1112,117,1137,85.3C1162.1,53,1187,43,1213,48C1237.9,53,1263,75,1288,117.3C1313.7,160,1339,224,1364,234.7C1389.5,245,1415,203,1427,181.3L1440,160L1440,0L0,0Z"
                />
            </svg>

            {/* CONTACT SECTION */}
            <section className="py-20" id="contact">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 my-12">

                    {/* INFO */}
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-white">
                            Get In Touch
                        </h2>
                        <p className="text-gray-400 mb-20 text-xl">
                            Reach out to us for any inquiries, order support, or feedback.
                        </p>

                        <div className="space-y-5 text-gray-400">
                            {[
                                { name: "Address: Dhaka, Bangladesh", icon: BookUser, color: "text-lime-400" },
                                { name: "Phone: +880 1XXX-XXXXXX", icon: PhoneIncoming, color: "text-green-500" },
                                { name: "Email: example.com", icon: Mails, color: "text-pink-500" },
                                { name: "Sat–Thu, 9AM–9PM", icon: Clock8, color: "text-yellow-500" }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="h-12 rounded-2xl text-center font-medium text-gray-400 bg-zinc-800 transition-all duration-300 hover:bg-gradient-to-r from-teal-600 via-cyan-500 to-sky-800 shadow-md hover:shadow-blue-600 flex items-center border-s-4 border-s-blue-500 hover:border-s-0 hover:text-white cursor-pointer"
                                >
                                    <item.icon size={25} className={`${item.color} mx-5`} />
                                    <span>{item.name}</span>
                                </div>
                            ))}

                        </div>
                    </div>

                    {/* FORM */}
                    <div className="bg-zinc-900 rounded-2xl shadow-lg p-4 md:p-8">
                        <h3 className="text-2xl font-bold mb-6 text-white">
                            Send a Message
                        </h3>

                        <form className="space-y-5">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            />

                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            />

                            <textarea
                                rows="4"
                                placeholder="Your Message"
                                className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            />

                            <button
                                type="button"
                                className="w-full bg-gradient-to-r from-teal-600 to-sky-500 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* MAP SECTION */}
            <section className="pb-20">
                <div className="w-full mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-white mb-12">
                        Find Us On Map
                    </h2>

                    <div className="w-full rounded-lg overflow-hidden h-[80vh] border border-zinc-800">
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps?q=Dhaka,Bangladesh&output=embed"
                            className="w-full h-full border-0"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
