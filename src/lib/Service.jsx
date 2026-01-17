import React from 'react'
import { motion } from 'framer-motion'
import {
    Search,
    ShoppingCart,
    ShieldCheck,
    Banknote,
    Zap,
    Truck,
    MapPin,
    RotateCcw,
    Headset,
    CreditCard,
    User,
    Heart,
    Percent,
    FileText,
    Bell,
    Star,
    Smartphone,
    Lock,
    Clock,
    Columns,
    Equal
} from 'lucide-react';

export const Service = () => {

    const Card = [
        {
            title: 'Product Browsing',
            icon: Search,
            color: 'text-blue-500'
        },
        {
            title: 'Quick Placement',
            icon: ShoppingCart,
            color: 'text-green-500'
        },
        {
            title: 'Secure Payment',
            icon: ShieldCheck,
            color: 'text-emerald-600'
        },
        {
            title: 'Cash On Delivery',
            icon: Banknote,
            color: 'text-yellow-500'
        },
        {
            title: 'Fast Checkout Facility',
            icon: Zap,
            color: 'text-orange-500'
        },
        {
            title: 'Delivery Service',
            icon: Truck,
            color: 'text-indigo-500'
        },
        {
            title: 'Order Tracking Facility',
            icon: MapPin,
            color: 'text-red-500'
        },
        {
            title: 'Easy Return Facility',
            icon: RotateCcw,
            color: 'text-pink-500'
        },
        {
            title: 'Customer Support',
            icon: Headset,
            color: 'text-cyan-500'
        },
        {
            title: 'Multiple Payment',
            icon: CreditCard,
            color: 'text-purple-500'
        },
        {
            title: 'Account Management',
            icon: User,
            color: 'text-slate-500'
        },
        {
            title: 'Wishlist Saving',
            icon: Heart,
            color: 'text-rose-500'
        },
        {
            title: 'Discount Offer Facility',
            icon: Percent,
            color: 'text-lime-500'
        },
        {
            title: 'Invoice Download',
            icon: FileText,
            color: 'text-gray-500'
        },
        {
            title: 'Notification Alert',
            icon: Bell,
            color: 'text-amber-500'
        },
        {
            title: 'Review Rating Facility',
            icon: Star,
            color: 'text-yellow-400'
        },
        {
            title: 'Multi Device Access',
            icon: Smartphone,
            color: 'text-teal-500'
        },
        {
            title: 'Advanced Security',
            icon: Lock,
            color: 'text-red-600'
        },
        {
            title: 'Twenty Four Access',
            icon: Clock,
            color: 'text-sky-500'
        },
        {
            title: 'Product Comparison',
            icon: Columns,
            color: 'text-violet-500'
        }
    ];


    return (
        <div className='my-12' id='service'>
            <motion.h2
                className='text-3xl sm:text-4xl text-white my-10 px-3 text-center'
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                id='demotext'

            >
                Services
            </motion.h2>
            <motion.div
                className='px-3 flex flex-wrap gap-5 items-center justify-center'
            >
                {Card.map((card, index) => (
                    <motion.div
                        key={index}
                        className='bg-gray-800 text-white p-1 mb-4 rounded-lg shadow-md sm:w-[30%] lg:w-[18.5%] w-full'
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        initial={{ opacity: 0, y: 20, scale: 0.90 }}
                        transition={{ duration: 0.5}}
                    >
                        <div className='w-full h-full p-3 rounded-lg bg-black'>
                            <div className='mb-2'>
                                <div className='flex justify-between'>
                                    <span className='w-8 h-8 flex justify-center items-center rounded-full p-[1.5px] transition-all hover:bg-cyan-500/40 duration-200'>
                                        <card.icon className={`w-6 h-6 ${card.color} my-2`} />
                                    </span>
                                    <Equal className='text-blue-500' />
                                </div>
                                <h3 className='text-lg font-semibold'>{card.title}</h3>
                            </div>
                            <p className='text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, voluptatibus?</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default Service;