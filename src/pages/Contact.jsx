import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-12 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>

        {/* Contact Info + Map */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h4 className="text-xl font-semibold mb-4">Our Office</h4>
            <p>YuvarajTex Pvt Ltd<br />Rajapalayam - 626117<br />Tamil Nadu, India</p>
            <p className="mt-4"><strong>Email:</strong> <a href="mailto:selvaraj.yuvarajtex@gmail.com" className="text-blue-600">selvaraj.yuvarajtex@gmail.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+919842072961" className="text-blue-600">+91 98420 72961</a></p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=Rajapalayam,+Tamil+Nadu,+India&output=embed"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          <h4 className="text-xl font-semibold">Send Us a Message</h4>
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Message</label>
            <textarea
              rows="4"
              placeholder="Type your message here..."
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md"
          >
            Send Message
          </button>
        </form>

        {/* Optional Google Form */}
        <div className="mt-12 text-center">
          <h4 className="text-lg font-semibold mb-2">Interested in joining us?</h4>
          <p className="mb-4">Submit your application via our Google Form.</p>
          <a
            href="https://forms.gle/your-google-form-link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white px-5 py-2 rounded-md font-medium hover:bg-green-700"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
