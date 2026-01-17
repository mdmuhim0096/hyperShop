import {
    Facebook,
    Instagram,
    Twitter,
    Youtube,
    Mail,
    Phone,
    MapPin,
} from "lucide-react";

/* ================= DATA ================= */

const brandInfo = {
    name: "ShopEase",
    description:
        "ShopEase is your trusted online shopping destination, offering quality products, secure payments, and fast delivery at the best prices.",
};

const quickLinks = [
    "Home",
    "Shop",
    "About Us",
    "Contact",
];

const customerServiceLinks = [
    "FAQ",
    "Returns",
    "Shipping",
    "Privacy Policy",
];

const contactInfo = [
    {
        icon: MapPin,
        text: "Dhaka, Bangladesh",
    },
    {
        icon: Phone,
        text: "+880 1234-567890",
    },
    {
        icon: Mail,
        text: "support@shopease.com",
    },
];

const socialIcons = [
    Facebook,
    Instagram,
    Twitter,
    Youtube,
];

/* ================= COMPONENT ================= */

const Footer = () => {
    return (
        <footer className="text-gray-300">
            <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 sm:grid-cols-2 md:grid-cols-4">

                {/* Brand Info */}
                <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                        {brandInfo.name}
                    </h3>
                    <p className="text-sm leading-relaxed">
                        {brandInfo.description}
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-semibold text-white mb-4">
                        Quick Links
                    </h4>
                    <ul className="space-y-2 text-sm">
                        {quickLinks.map((link, index) => (
                            <li
                                key={index}
                            >
                                <span className="hover:text-sky-400 hover:underline cursor-pointer">
                                    {link}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Customer Service */}
                <div>
                    <h4 className="text-lg font-semibold text-white mb-4">
                        Customer Service
                    </h4>
                    <ul className="space-y-2 text-sm">
                        {customerServiceLinks.map((link, index) => (
                            <li
                                key={index}
                            >
                                <span className="hover:text-sky-400 hover:underline cursor-pointer">
                                    {link}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-lg font-semibold text-white mb-4">
                        Contact Us
                    </h4>
                    <ul className="space-y-3 text-sm">
                        {contactInfo.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <li key={index} className="flex items-center gap-2">
                                    <Icon size={16} />
                                    {item.text}
                                </li>
                            );
                        })}
                    </ul>

                    <div className="flex gap-3 mt-4">
                        {socialIcons.map((Icon, index) => (
                            <Icon
                                key={index}
                                className="hover:text-blue-500 cursor-pointer"
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 py-4 text-center text-sm">
                © {new Date().getFullYear()} {brandInfo.name}. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
