import Hero from '../lib/Hero';
import Navbar from '../lib/Navbar';
import Service from '../lib/Service';
import FeaturedProduct from '../lib/FeaturedProduct';
import Product from '../lib/Product';
import PromoSection from '../lib/PromoSection';
import NewsletterSection from '../lib/NewsletterSection';
import Testimonials from '../lib/Testimonials';
import Footer from '../lib/Footer';
import FAQ from '../lib/FAQ';
import TrustedBrands from '../lib/TrustedBrands';

const Home = () => {

  return (
    <div className='w-full h-full overflow-y-auto'>
      <Navbar />
      <Hero />
      <Service />
      <FeaturedProduct />
      <Product />
      <PromoSection />
      <Testimonials />
      <NewsletterSection />
      <FAQ />
      <TrustedBrands />
      <Footer />
    </div>)
}

export default Home;