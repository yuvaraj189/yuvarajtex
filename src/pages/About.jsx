import React from "react";

const About = () => {
  return (
    <div className="p-4 sm:p-8 lg:p-16 space-y-20 bg-white text-gray-800">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-indigo-700 mb-4">About Yuvaraj Tex</h1>
        <p className="text-lg sm:text-xl text-gray-600">
          Yuvaraj Tex is a globally trusted service partner for spinning machinery. With decades of engineering expertise, we empower spinning mills to scale sustainably by embracing automation, predictive maintenance, and operational excellence.
        </p>
      </div>

      {/* Excellence Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Precision-Driven Service",
            content:
              "Our technicians are trained in international servicing protocols, ensuring each intervention enhances machine life, reduces downtime, and drives higher yield — every time.",
          },
          {
            title: "Decades of Expertise",
            content:
              "With a legacy spanning over 25 years, we’ve witnessed the evolution of the spinning industry. We bring lessons, foresight, and innovation from every corner of the globe to your mill.",
          },
          {
            title: "Digital Integration",
            content:
              "We leverage digital tools for scheduling, diagnostics, and performance tracking. Our systems ensure transparency and intelligent insights — enabling data-backed decisions.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-indigo-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300"
          >
            <h3 className="text-xl font-semibold text-indigo-700 mb-3">{item.title}</h3>
            <p className="text-gray-700">{item.content}</p>
          </div>
        ))}
      </div>

      {/* Mission and Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-center md:text-left">
        <div>
          <h2 className="text-2xl font-bold text-indigo-700 mb-3">Our Mission</h2>
          <p className="text-gray-700">
            To revolutionize spinning machinery servicing through sustainable practices, cutting-edge tools, and people-first partnerships that maximize uptime, efficiency, and profitability. But we go beyond tools and timelines —
We exist to empower every spinning mill to run better, last longer, and stay ahead in a competitive textile landscape.
At Yuvaraj Tex, every service call is a chance to create reliability, reduce environmental impact, and build trust that spans generations.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-indigo-700 mb-3">Our Vision</h2>
          <p className="text-gray-700">
            To become the world’s most trusted and technologically advanced service partner for spinning mills —
Not just fixing breakdowns, but predicting them.
Not just maintaining equipment, but modernizing ecosystems.

Our vision is a future where every spinning machine runs smarter, cleaner, and longer — powered by precision engineering, proactive care, and people who genuinely care.
          </p>
        </div>
      </div>

      {/* Global Presence */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-indigo-700 mb-4">Global Presence</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          At Yuvaraj Tex, our story is proudly rooted in India, especially in the vibrant spinning ecosystems of Tamil Nadu, where cotton meets craftsmanship. From Coimbatore to Tirupur, we serve as the backbone for hundreds of mills, ensuring machines run smoother and people work smarter.

Our reach extends across various parts of India, supporting cotton-rich belts in Gujarat, Maharashtra, Andhra Pradesh, and beyond — wherever the looms turn, we're there to keep them moving.

Globally, our commitment to quality has connected us with spinning industries in countries like Egypt, Vietnam, and other cotton-powered regions across Asia and Africa. Whether it's a family-run unit or a large industrial setup, we bring the same promise — precision, partnership, and performance.

Because for us, it’s not just about where we go — it’s about how deeply we serve.
        </p>
      </div>

      {/* Testimonials */}
      {/* Testimonials */}
<div className="text-center">
  <h2 className="text-3xl font-bold text-indigo-700 mb-10">What Our Clients Say</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {[
      {
        name: "Arjun Patel",
        feedback:
          "Yuvaraj Tex helped us cut 30% in unexpected downtime. Their preventive servicing model has truly changed our operational rhythm.",
      },
      {
        name: "Fatima Rahman",
        feedback:
          "Their team doesn't just 'service' — they educate. We feel empowered, not dependent. A rare kind of partnership in today's world.",
      },
      {
        name: "Senthil Kumar",
        feedback:
          "We’ve been working with Yuvaraj Tex for over 3 years now. What stands out is their honesty and consistency — they treat our mill like their own. It’s more than a service, it’s a relationship built on trust.",
      },
      {
        name: "Nguyen Thi Hoa",
        feedback:
          "From Vietnam to Tamil Nadu, finding a partner that understands both technology and people is rare. Yuvaraj Tex blends technical precision with genuine care. It’s felt in every visit, every follow-up.",
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
</div>


      {/* Meet the Team */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-indigo-700 mb-10">Meet Our Core Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              name: "Selvaraj D",
              role: "Founder & Chief Engineer",
              bio: "Visionary leader with a deep passion for machinery optimization and sustainable industrial service models.",
            },
            {
              name: "Abbas S",
              role: "Operations Head",
              bio: "Orchestrates cross-border service schedules and client engagement with clockwork precision.",
            },
            {
              name: "Nizar",
              role: "Head of People",
              bio: "Champions innovation in service design, AI diagnostics, and field engineering excellence.",
            },
          ].map((member, i) => (
            <div
              key={i}
              className="bg-indigo-100 p-6 rounded-2xl shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-indigo-800">{member.name}</h3>
              <p className="text-sm text-indigo-600 mb-2">{member.role}</p>
              <p className="text-gray-700">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Founder's Quote */}
      <div className="text-center bg-indigo-50 p-10 rounded-xl shadow-md max-w-4xl mx-auto">
        <blockquote className="text-xl italic text-indigo-900 font-medium">
          “Machines are only as efficient as the hands that care for them. At Yuvaraj Tex, we don't fix problems — we build performance.”
        </blockquote>
        <p className="mt-4 text-indigo-700 font-semibold">– Selvaraj, Founder</p>
      </div>

      {/* Core Values Section */}
      <div className="text-center">
  <h2 className="text-3xl font-bold text-indigo-700 mb-6">Our Core Values</h2>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
    {[
      {
        title: "Integrity",
        desc: "We say what we mean, and we do what we promise — no shortcuts, no sugarcoating."
      },
      {
        title: "Accountability",
        desc: "Whether it’s a minor glitch or a major breakthrough — we take full ownership from start to finish."
      },
      {
        title: "Empathy",
        desc: "Behind every spinning unit is a team, a family, a livelihood. We hear you, understand you, and build solutions that fit your world."
      },
      {
        title: "Excellence",
        desc: "We don't settle for average. Every visit, every call, every fix — it's a step towards setting new standards."
      },
    ].map((val, i) => (
      <div key={i} className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
        <h4 className="text-lg font-semibold text-indigo-700 mb-2">{val.title}</h4>
        <p className="text-gray-700">{val.desc}</p>
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default About;
