const brands = [
    {
        name: "Amazon",
        logo: "./amazone.png",
    },
    {
        name: "Google",
        logo: "./Google.svg",
    },
    {
        name: "Microsoft",
        logo: "./microsoft.svg",
    },
    {
        name: "Apple",
        logo: "./apple.jpg",
    },
    {
        name: "Stripe",
        logo: "./stripe.png",
    },
    {
        name: "PayPal",
        logo: "./PayPal.svg",
    },
];

const TrustedBrands = () => {
    return (
        <section className="py-14 px-10">
            <div className="max-w-7xl mx-auto px-6 text-center">

                <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mb-4">
                    Trusted by Leading Brands
                </h2>
                <p className="text-gray-500 mb-10">
                    Partnering with well-known companies to deliver trusted service
                </p>

                <div className="flex flex-col flex-wrap md:flex-nowrap md:flex-row gap-10 md:gap-0 justify-between items-center py-10">
                    {brands.map((brand, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center grayscale hover:grayscale-0 transition"
                        >
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                className={`h-14 ${index === 0 || index === 2 ? 'scale-125' : index === 3 ? 'scale-[1.9]' : ''}`}
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TrustedBrands;
