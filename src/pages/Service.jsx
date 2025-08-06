import React from 'react';

const service = [
  {
    title: "End-to-End Mill Maintenance",
    description:
      "We take care of your mill like it’s our own — from foundational alignments to precision air leak checks. Our team ensures each part runs in harmony, minimizing downtime and maximizing productivity.",
  },
  {
    title: "Consulting for Mill Modernization",
    description:
      "Change is tough. We make it smoother. Our experts guide you through the transition from legacy machinery to modern systems — without pausing your operations.",
  },
  {
    title: "Emergency Breakdown Support",
    description:
      "When your machines halt, we don’t. Our technicians are just a call away — equipped and ready to get you back up, fast. We understand that every minute lost is money gone.",
  },
  {
    title: "Spares & Replacement Parts",
    description:
      "We provide reliable parts, with honest advice. No over-selling, no misfits — just what your machine truly needs, delivered on time.",
  },
  {
    title: "Technical Training & On-Site Coaching",
    description:
      "We believe in passing the torch. Our technicians train your in-house staff to troubleshoot, prevent, and solve — building independence within your mill.",
  },
  {
    title: "Remote Diagnostic Support",
    description:
      "Even if you're 500 km away, our help isn't. With live video diagnostics and instant recommendations, we’re your virtual tech partner.",
  },
];

export default function Service() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-4">Specialized Services for Spinning Mills</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          At Yuvaraj Tex, we go beyond machines — we support the people who run them. With decades of on-ground experience,
          we serve spinning mills across India and growing global markets like Egypt, Vietnam, and Bangladesh.
        </p>
      </section>

      {/* Service Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {service.map((service, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 p-6 rounded-xl shadow hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">{service.title}</h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </section>

      {/* Human-Centric Section */}
      <section className="bg-indigo-50 p-10 rounded-2xl shadow-inner mb-20">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4 text-center">We Understand Your Mill’s Heartbeat</h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto">
          Our team doesn’t just repair machines — we walk your floors, talk to your operators, and understand your shift cycles.
          We’ve seen the night shifts, the power cuts, the tight delivery deadlines. That’s why our services are built with
          empathy, urgency, and precision.
        </p>
      </section>

      {/* Industries Served */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-indigo-700 mb-6 text-center">Industries We Support</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700 font-medium list-disc list-inside px-4">
          <li>Ring Spinning Mills</li>
          <li>Open-End Spinning Units</li>
          <li>Compact Yarn Producers</li>
          <li>Recycling-based Yarn Manufacturers</li>
          <li>Export-Oriented Textile Units</li>
          <li>SME Cotton-Based Spinners</li>
        </ul>
      </section>

      {/* Testimonials */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-indigo-700 mb-6 text-center">Real Stories from Real Mills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              name: "S. Elango, Tiruppur",
              feedback:
                "Yuvaraj Tex gave us confidence when our in-house team hit a wall. They didn’t just fix the issue — they helped our team understand it. That kind of service sticks with you.",
            },
            {
              name: "Manoj Sethi, Ahmedabad",
              feedback:
                "When our spindle drive failed in peak season, they arrived within hours. That response time? Game-changing. It’s rare to see such commitment these days.",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-xl p-6 border border-gray-200"
            >
              <p className="text-gray-800 italic">“{t.feedback}”</p>
              <p className="mt-4 font-semibold text-indigo-600">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h3 className="text-xl font-semibold text-indigo-700 mb-3">Need Tailored Help?</h3>
        <p className="text-gray-600 mb-6">
          Every spinning unit is unique. Let’s build a service plan that truly understands your challenges and goals.
        </p>
        <a
          href="/contact"
          className="inline-block bg-indigo-700 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-800 transition"
        >
          Talk to Our Team
        </a>
      </section>
    </div>
  );
}
