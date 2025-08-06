import React from 'react'

const Careers = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 space-y-16">
      {/* Hero Section */}
      <section className="text-center mt-8">
        <h1 className="text-4xl font-bold mb-2">Careers at YuvarajTex</h1>
        <p className="text-lg text-gray-600">Build the future of sustainable textiles with us.</p>
        <p className="text-md text-gray-500 mt-2">We’re growing—and we want you with us.</p>
      </section>

      {/* Open Positions */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-center">Current Openings</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* HR Intern */}
          <div className="border p-6 rounded-xl shadow-lg bg-white">
            <h3 className="text-xl font-bold mb-2">🧑‍💼 HR Intern</h3>
            <p className="text-gray-700 mb-2">
              Assist our HR team in recruitment, onboarding, and culture-building initiatives.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-2">
              <li>Duration: 3-6 Months</li>
              <li>Location: On-site, Coimbatore</li>
              <li>Eligibility: Final-year students or freshers</li>
            </ul>
            <p className="text-sm text-gray-500">Gain real-world HR experience in the manufacturing sector.</p>
          </div>

          {/* Technical Expert */}
          <div className="border p-6 rounded-xl shadow-lg bg-white">
            <h3 className="text-xl font-bold mb-2">🛠️ Technical Expert – Spinning Mills</h3>
            <p className="text-gray-700 mb-2">
              We're looking for a highly skilled textile machinery specialist to manage and optimize our spinning mills.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-2">
              <li>Experience with L&T Spinning Machines is a must</li>
              <li>Min. 2 years in industrial setup</li>
              <li>Location: Coimbatore</li>
            </ul>
            <p className="text-sm text-gray-500">Your expertise will directly impact quality and efficiency.</p>
          </div>
        </div>
      </section>

      {/* Perks Section */}
      <section className="bg-gray-100 p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-4 text-center">Why Work with Us?</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-lg font-semibold">Learn & Grow</h3>
            <p className="text-sm text-gray-600 mt-1">We don’t just offer jobs — we offer journeys. With hands-on mentorship, exposure to industry-leading practices, and constant opportunities to upskill, you’ll never stop learning here. Whether you're just starting out or looking to evolve, we invest in your growth like it's our own.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Real Responsibility</h3>
            <p className="text-sm text-gray-600 mt-1">You won’t just be another name on a spreadsheet. From day one, you’ll contribute to projects that genuinely matter. Your ideas, your decisions, your voice — they help shape the future of textile innovation. We're here to listen, empower, and trust you.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Purpose-Driven</h3>
            <p className="text-sm text-gray-600 mt-1">We believe business should be kind — to people, to the planet, and to communities. That’s why sustainability isn’t a buzzword here — it’s how we operate. Join a team where your work creates value, not just profit.

</p>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-center">Our Culture</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto">
        At YuvarajTex, we don’t just weave fabric—we weave stories, legacies, and futures. Our workplace is built on trust, collaboration, and continuous learning.

We celebrate curiosity—encouraging you to ask questions, challenge norms, and bring bold ideas to the table. We respect tradition, not as a limitation, but as a foundation we proudly build upon.

Here, every team member is valued as a whole person, not just for the skills they bring. Whether you're on the factory floor or in a boardroom, your voice matters.

        </p>
      </section>

      {/* Google Form */}
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-2">Apply Now</h2>
        <p className="text-gray-600 mb-4">Fill out the form below to apply for any of the open roles.</p>
        <div className="w-full h-[700px]">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeO0bNfEmRBG2pibzyQP2gHW-Y0ulzwwnPeVvN9xUd7UsUbhQ/viewform?usp=sharing&ouid=107833176146697247478"
            width="100%"
            height="100%"
            frameBorder="0"
            className="rounded-lg"
            allowFullScreen
            title="Application Form"
          ></iframe>
        </div>
      </section>

      {/* Optional: FAQ */}
      <section>
  <h2 className="text-2xl font-bold mb-4 text-center">FAQs</h2>
  <div className="space-y-4 max-w-3xl mx-auto">
    <div>
      <h4 className="font-semibold">Can I apply for multiple positions?</h4>
      <p className="text-gray-600 text-sm">Yes! Just mention your preference clearly in the form.</p>
    </div>
    <div>
      <h4 className="font-semibold">Do you offer relocation support?</h4>
      <p className="text-gray-600 text-sm">Currently, we expect on-site availability but are open to discuss for the right candidate.</p>
    </div>
    <div>
      <h4 className="font-semibold">I’m a fresher. Can I still apply?</h4>
      <p className="text-gray-600 text-sm">Absolutely! We value enthusiasm and willingness to learn just as much as experience.</p>
    </div>
    <div>
      <h4 className="font-semibold">How will I know if I'm shortlisted?</h4>
      <p className="text-gray-600 text-sm">If you're shortlisted, you'll hear from us within a week of applying via the contact info you provide.</p>
    </div>
    <div>
      <h4 className="font-semibold">What kind of work environment should I expect?</h4>
      <p className="text-gray-600 text-sm">We maintain a balance of structure and creativity — expect mentorship, open discussions, and lots of learning.</p>
    </div>
    <div>
      <h4 className="font-semibold">Is this internship paid?</h4>
      <p className="text-gray-600 text-sm">Some roles come with stipends. This will be clearly communicated during the selection process.</p>
    </div>
    <div>
      <h4 className="font-semibold">Can I intern remotely?</h4>
      <p className="text-gray-600 text-sm">Most roles are on-site, but remote flexibility may be possible for select profiles.</p>
    </div>
    <div>
      <h4 className="font-semibold">How long is the internship?</h4>
      <p className="text-gray-600 text-sm">Internships typically last 4–8 weeks, depending on the role and your availability.</p>
    </div>
  </div>
</section>

    </div>
  )
}

export default Careers
