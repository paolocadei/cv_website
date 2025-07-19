import React, { FormEvent, useState } from 'react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data as any).toString(),
    })
      .then(() => setFormStatus('SUCCESS'))
      .catch(() => setFormStatus('ERROR'));
  };

  return (
    <section className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-slate-800">Contact Me</h2>

        {formStatus === 'SUCCESS' ? (
          <p className="text-green-600 text-lg">Thanks for your message! I will get back to you soon.</p>
        ) : (
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-6"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
            </div>

            <label className="block">
              <span className="text-gray-700">Name</span>
              <input
                type="text"
                name="name"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
              />
            </label>

            <label className="block">
              <span className="text-gray-700">Email</span>
              <input
                type="email"
                name="email"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
              />
            </label>

            <label className="block">
              <span className="text-gray-700">Message</span>
              <textarea
                name="message"
                required
                rows={5}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
              ></textarea>
            </label>

            <button
              type="submit"
              className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              Send Message
            </button>

            {formStatus === 'ERROR' && (
              <p className="text-red-600 mt-4">Oops! There was an error sending your message.</p>
            )}
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
