import { Star } from "lucide-react";
import { motion } from "framer-motion"

const SingleProduct = ({ data, details = false, index = 0 }) => {
    const rateArray = [];
    for (let rating = 0; rating < data.rating; rating++) {
        rateArray.push(Star);
    }
    return (
        <motion.div
            className="w-full sm:w-[45%] md:w-[30%] h-auto p-1 rounded-lg bg-gray-800"
            whileHover={{ y: -10 }}
            transition={{ type: 'spring', stiffness: 300}}
            >
            <div className="w-full h-56 rounded-lg overflow-hidden">
                <img src={data.image} alt={data.name} className="w-full h-full object-fill transition-all duration-200 hover:scale-150" />
            </div>
            <div className="bg-black mt-2 rounded-lg p-2">
                {details && (
                    <div>
                        <h2 className="text-green-500">{data.price}</h2>
                    </div>
                )}
                <h4 className="text-slate-300 sm:text-lg my-1">{data.name}</h4>
                <div className="flex justify-between items-center w-full">
                    <button className="bg-emerald-500 text-white px-2 py-1 rounded-lg transition-all duration-200 hover:bg-blue-600">Add to Cart</button>
                    <div className="flex">{
                        rateArray.map((StarIcon, index) => (
                            <StarIcon key={index} className="w-4 h-4 text-yellow-400" />
                        ))
                    }</div>
                </div>
            </div>
        </motion.div>
    )
}

export default SingleProduct;