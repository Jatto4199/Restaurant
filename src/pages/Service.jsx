import { motion } from "framer-motion";
import {
  FaUtensils,
  FaGlassCheers,
  FaTruck,
  FaBirthdayCake,
  FaConciergeBell,
  FaShoppingBag,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Fine Dining",
    description:
      "Experience luxurious dining with expertly crafted meals and premium ambiance.",
    icon: <FaUtensils />,
  },
  {
    id: 2,
    title: "Private Events",
    description:
      "Host birthdays, anniversaries, and special occasions in our exclusive private spaces.",
    icon: <FaBirthdayCake />,
  },
  {
    id: 3,
    title: "Catering Services",
    description:
      "Professional catering for weddings, corporate events, and social gatherings.",
    icon: <FaConciergeBell />,
  },
  {
    id: 4,
    title: "Cocktail & Lounge",
    description:
      "Enjoy handcrafted cocktails and premium drinks in a relaxed atmosphere.",
    icon: <FaGlassCheers />,
  },
  {
    id: 5,
    title: "Fast Delivery",
    description:
      "Order your favorite meals and get them delivered fresh to your doorstep.",
    icon: <FaTruck />,
  },
  {
    id: 6,
    title: "Online Ordering",
    description:
      "Easy and seamless online ordering experience from anywhere.",
    icon: <FaShoppingBag />,
  },
];

export default function Services() {
  return (
    <section className="min-h-screen bg-[#F8F1E7] py-20 px-6">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-[#090908] mb-4">
          Our Services
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          At Savory Haven, we offer premium dining experiences tailored to
          create unforgettable moments for every guest.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition duration-300"
          >
            <div className="text-4xl text-[#D4AF37] mb-4">
              {service.icon}
            </div>

            <h2 className="text-2xl font-semibold text-[#2B2B2B] mb-3">
              {service.title}
            </h2>

            <p className="text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-20 text-center bg-blue-600 text-white py-16 rounded-2xl max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Experience Luxury Dining?
        </h2>
        <p className="mb-6 text-gray-200">
          Book a table today or contact us for your private events and catering.
        </p>

        <button className="bg-[#D4AF37] text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
          Book Now
        </button>
      </div>
    </section>
  );
}