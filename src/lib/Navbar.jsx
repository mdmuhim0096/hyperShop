
// import { useState } from "react";
// import {
//     Home,
//     Contact,
//     DollarSign,
//     User,
//     X,
//     Menu,
//     LogOut,
//     Settings,
//     Facebook,
//     Youtube,
//     Instagram,
//     Twitter
// } from "lucide-react";

// const navItems = [
//     { type: "access" },
//     {
//         name: "home",
//         icon: Home,
//         color: "hover:text-emerald-600",
//         bg: "hover:after:bg-emerald-800",
//         shadowColor: "#10b981"
//     },
//     {
//         name: "contact",
//         icon: Contact,
//         color: "hover:text-blue-600",
//         bg: "hover:after:bg-blue-800",
//         shadowColor: "#2563eb"
//     },
//     {
//         name: "wallet",
//         icon: DollarSign,
//         color: "hover:text-violet-600",
//         bg: "hover:after:bg-violet-800",
//         shadowColor: "#7c3aed"
//     },
//     {
//         name: "user",
//         icon: User,
//         color: "hover:text-pink-600",
//         bg: "hover:after:bg-pink-800",
//         shadowColor: "#ec4899"
//     },
//     { type: "social" },
//     {
//         name: "facebook",
//         icon: Facebook,
//         color: "hover:text-indigo-600",
//         bg: "hover:after:bg-indigo-800",
//         shadowColor: "#4f46e5"
//     },
//     {
//         name: "youtube",
//         icon: Youtube,
//         color: "hover:text-red-600",
//         bg: "hover:after:bg-red-800",
//         shadowColor: "#dc2626"
//     },
//     {
//         name: "instagram",
//         icon: Instagram,
//         color: "hover:text-pink-300",
//         bg: "hover:after:bg-pink-500",
//         shadowColor: "#f472b6"
//     },
//     {
//         name: "twitter",
//         icon: Twitter,
//         color: "hover:text-blue-300",
//         bg: "hover:after:bg-blue-500",
//         shadowColor: "#60a5fa"
//     },
//     { type: "action" },
//     {
//         name: "settings",
//         icon: Settings,
//         color: "hover:text-orange-600",
//         bg: "hover:after:bg-orange-800",
//         shadowColor: "#f97316"
//     },
//     {
//         name: "logout",
//         icon: LogOut,
//         color: "hover:text-lime-600",
//         bg: "hover:after:bg-lime-800",
//         shadowColor: "#84cc16"
//     }
// ];

// const Navbar = () => {
//     const [isMenu, setIsMenu] = useState(false);

//     return (
//         <nav className="p-4 select-none sticky top-5 left-1">
//             {/* Mobile Toggle */}
//             <div
//                 className="sm:hidden mb-6 text-zinc-400 cursor-pointer"
//                 onClick={() => setIsMenu(!isMenu)}
//             >
//                 {isMenu ? <X /> : <Menu />}
//             </div>

//             {/* Menu */}
//             <ul
//                 className={`${isMenu ? "flex" : "hidden"} sm:flex flex-col gap-2 sm:gap-4 w-8`}
//             >
//                 {navItems.map((item, index) => {
//                     if (item.type) {
//                         return (
//                             <span
//                                 key={index}
//                                 className="text-zinc-500 uppercase text-[10px] tracking-widest"
//                             >
//                                 {item.type}
//                             </span>
//                         );
//                     }

//                     const Icon = item.icon;

//                     return (
//                         <li
//                             key={index}
//                             className={`group flex items-center gap-3 w-8 overflow-hidden 
//               cursor-pointer transition-all duration-300 ease-out
//               hover:w-36 hover:overflow-visible
//               text-zinc-400 ${item.color}
//               hover:bg-zinc-900 hover:rounded-md
//               relative after:absolute after:right-0 after:top-0 after:w-1 after:h-full
//               ${item.bg} after:rounded-e-md hover:shadow-lg`}
//                         >
//                             {/* Icon */}
//                             <div id="box" className="w-7 h-7 rounded-sm border border-zinc-700 p-[3px] flex items-center justify-center transition-all duration-300 group-hover:scale-110 hover:border-none">
//                                 <Icon />
//                             </div>

//                             {/* Text with Glow */}
//                             <span
//                                 className="capitalize whitespace-nowrap transition-all duration-300 group-hover:tracking-wide"
//                                 style={{
//                                     textShadow: `0 0 10px ${item.shadowColor}, 0 0 20px ${item.shadowColor}`
//                                 }}
//                             >
//                                 {item.name}
//                             </span>
//                         </li>
//                     );
//                 })}
//             </ul>
//         </nav>
//     );
// };

// export default Navbar;

import { useState } from 'react';
import { ShoppingCart, Menu, X, PanelTop, Home, EqualApproximately, ChartNoAxesGantt, CircleUser } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [search, setSearch] = useState('');
    const [isMenu, setIsMenu] = useState(false);

    const Pages = [
        { name: 'Home', link: '/', Icon: Home, color: "text-orange-500" },
        { name: 'Products', link: '/products', Icon: ChartNoAxesGantt, color: "text-green-500" },
        { name: 'About', link: '/about', Icon: EqualApproximately, color: "text-pink-500" },
        { name: 'Contact', link: '/contact', Icon: CircleUser, color: "text-blue-500" },
    ];

    return (

        <nav className="w-full flex items-center justify-between bg-black/50 backdrop-blur-md fixed top-0 z-50 pointer-events-auto p-2">
            <Link to={"/"} className="text-white font-bold select-none sm:text-xl">HyperFlow</Link>

            {/* Search Input */}
            <div className="mx-6 w-full hidden sm:flex justify-center">
                <div className="w-5/12 flex gap-2">
                    <input
                        type="text"
                        placeholder="Search Product"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="
                    w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white
                    placeholder-white/60 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(0,255,255,0.5)] transition placeholder:text-xs sm:placeholder:text-sm placeholder:text-center py-1 px-3"
                    />
                    <button className="text-white text-sm px-3 rounded-xl bg-blue-500">search</button>
                </div>
            </div>
            {/* Cart Icon */}
            <div className="text-white cursor-pointer flex gap-5 md:gap-10">
                <Link to={"/"} className='px-2 rounded-md text-white bg-blue-500 text-sm '>Signup</Link>
                <div className='relative'>
                    <ShoppingCart />
                    <span className="absolute -top-1 -right-2 bg-red-500 rounded-full px-2 text-xs sm:text-sm">
                        3
                    </span>
                </div>
                <div
                    onClick={() => { setIsMenu(!isMenu) }}
                    className="text-white cursor-pointer"
                >
                    {isMenu ? (<X />) : (<Menu />)}
                </div>
            </div>
            <div className={`w-full md:w-3/12 lg:w-2/12 h-auto absolute ${isMenu ? 'top-12 left-0 block md:left-[75%] lg:left-[83%]' : 'top-0 hidden'}`}>
                {/* Search Input */}
                <div className='px-2 my-3'>
                    <div className="w-full sm:hidden mx-auto px-2 rounded-xl backdrop-blur-md bg-black/90 border-2 border-gray-800 md:border-none md:bg-white/10 py-1">
                        <div className="relative w-full flex gap-2 my-2">
                            <input
                                type="text"
                                placeholder="Search Product"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="
                    w-full border border-white/20 rounded-full text-white bg-transparent
                    placeholder-white/60 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(0,255,255,0.5)] transition placeholder:text-xs sm:placeholder:text-sm placeholder:text-center pb-1 px-2"
                            />
                            <button className="text-white text-sm px-[5px] rounded-xl bg-blue-500">search</button>
                        </div>
                    </div>
                    <div className='p-2 rounded-xl backdrop-blur-md bg-black/90 md:bg-white/10 my-2 border-2 border-gray-800 md:border-none'>
                        <div className='flex items-center gap-2 text-white'>
                            <PanelTop className='w-5 h-5 sm:w-6 sm:h-6' />
                            <h5>Pages</h5>
                        </div>
                        <hr className='my-2 opacity-40' />
                        <div className='flex flex-col'>
                            {Pages.map((page, index) => (<Link key={index} to={page.link}>
                                <div className={`flex items-center gap-2 my-2 hover:bg-white/20 hover:py-1 hover:px-2 rounded-lg transition ${page.color}`}>
                                    <page.Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${page.color}`} />
                                    <span>{page.name}</span>
                                </div>
                            </Link>))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar