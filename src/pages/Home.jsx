import React from "react";
import { motion } from "framer-motion";
import { Settings, Wrench, Truck, Globe } from "lucide-react";
import { Link } from 'react-router-dom';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

const Home = () => {
  return (
    <main className="bg-white text-gray-800 pt-20 overflow-hidden">
      {/* Hero Section */}
      <section className="w-full bg-blue-50 py-20">
  <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
    <motion.div
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
        Global Spinning Machinery Experts
      </h1>
      <p className="mt-4 text-lg text-gray-700">
        Yuvaraj Tex delivers end-to-end spinning machinery services — from installation to relocation — serving clients worldwide with unmatched precision, speed, and reliability.
      </p>
      <Link
        to="/services"
        className="inline-block mt-6 px-6 py-3 bg-blue-700 text-white rounded-xl shadow hover:bg-blue-800 transition"
      >
        Explore Our Services
      </Link>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <img
        src="https://images.unsplash.com/photo-1605810230434-7631f2e74a01?auto=format&fit=crop&w=900&q=80"
        alt="Spinning Machines"
        className="rounded-2xl shadow-lg w-full object-cover max-h-[450px]"
      />
    </motion.div>
  </div>
</section>


      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center text-blue-900"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Our Core Services
          </motion.h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[{
              Icon: Settings,
              title: "New Machine Installation",
              description: "Complete setup of advanced spinning machinery with precision and global compliance."
            }, {
              Icon: Wrench,
              title: "Maintenance & Repair",
              description: "Expert service for legacy and modern systems to ensure minimal downtime."
            }, {
              Icon: Truck,
              title: "Relocation Services",
              description: "Seamless movement of equipment across regions without operational disruptions."
            }].map(({ Icon, title, description }, i) => (
              <motion.div
                key={i}
                className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-xl transition"
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                transition={{ duration: 0.5 + i * 0.2 }}
                viewport={{ once: true }}
              >
                <Icon className="text-blue-700 w-10 h-10 mb-4" />
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-gray-600 mt-2">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-blue-100 py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <motion.img
            src="https://images.unsplash.com/photo-1605902711622-cfb43c4437e1?auto=format&fit=crop&w=800&q=80"
            alt="About us"
            className="rounded-2xl shadow-lg"
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          />
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-blue-900">About Yuvaraj Tex</h2>
            <p className="mt-4 text-gray-700 text-lg leading-relaxed">
              Yuvaraj Tex is a globally recognized service provider for spinning machinery. With decades of engineering excellence, we deliver scalable, future-ready solutions for spinning mills across continents — embracing digital transformation, automation, and a strong commitment to quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900">Why Choose Us</h2>
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {[{
              Icon: Globe,
              title: "Global Reach",
              desc: "Projects delivered in Asia, Europe, Africa, and the Middle East."
            }, {
              Icon: Wrench,
              title: "Technical Precision",
              desc: "Our expertise ensures every job is done right the first time."
            }, {
              Icon: Settings,
              title: "Comprehensive Services",
              desc: "From consultation to execution — a one-stop solution."
            }, {
              Icon: Truck,
              title: "Logistical Excellence",
              desc: "On-time delivery and zero interruption to production lines."
            }].map(({ Icon, title, desc }, i) => (
              <motion.div
                key={i}
                className="flex items-start space-x-4"
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                transition={{ duration: 0.5 + i * 0.1 }}
                viewport={{ once: true }}
              >
                <Icon className="text-blue-700 w-8 h-8" />
                <div>
                  <h4 className="text-lg font-semibold">{title}</h4>
                  <p className="text-gray-600">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <motion.section
  className="bg-gradient-to-br from-blue-900 to-blue-600 py-28 px-8 text-white text-center"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <div className="max-w-4xl mx-auto">
    <h2 className="text-5xl font-extrabold mb-6 leading-tight">
      Revolutionize Your Mill Operations
    </h2>
    <p className="text-xl text-white/90 mb-10 leading-relaxed">
      With Yuvaraj Tex, tap into world-class expertise in spinning machinery services — where precision meets innovation across global operations.
    </p>
    <motion.a
      href="/contact"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block px-10 py-4 bg-white text-blue-800 text-lg font-semibold rounded-full shadow-lg hover:bg-blue-100 transition"
    >
      Get in Touch
    </motion.a>
  </div>
</motion.section>

    </main>
  );
};

export default Home;
