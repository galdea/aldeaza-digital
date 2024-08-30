import React, { useState } from 'react';
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation("global");

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      const result = await response.json();
      if (result.success) {
        console.log(result);
        // Handle success feedback
      } else {
        // Handle error feedback
        console.error("Form submission failed:", result.error);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=providencia+chile&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
              {t("contact.address")}
              </h2>
              <p className="mt-1">
                Providencia, <br />
                Santiago, Chile
              </p>
            </div>
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="custom-green leading-relaxed">
                gabriel.aldea@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
              {t("contact.phone")}
              </h2>
              <p className="leading-relaxed">+56 993441532</p>
            </div>
          </div>
          </div>
          </div>

      <div className="container px-5 py-10 mx-auto flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <form
          name="contact"
          onSubmit={handleSubmit}
          className="flex flex-col md:w-1/2 lg:w-1/3"
        >
          
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium custom-green title-font">
            {t("contact.title")}
          </h2>
          <p className="leading-relaxed mb-5">{t("contact.description")}</p>

          <div className="relative mb-4">
          <input type="hidden" name="access_key" value="f12fb2d3-f16a-41bc-8778-f148e3349578"></input>

            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              {t("contact.name")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>

          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              {t("contact.email")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>

          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400"
            >
              {t("contact.message")}
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              required
            />
          </div>

          <button
            type="submit"
            style={{ backgroundColor: '#c3d563', color: 'white' }}
            className="border-0 py-2 px-6 focus:outline-none rounded text-lg hover:bg-gray-700"
          >
            {t("contact.submit")}
          </button>
        </form>
      </div>
      <a 
  href="https://aldeazadigital.com" 
  className='flex justify-center italic'
  target="_blank"
  rel="noopener noreferrer"
>
  Built by  <span className="aldeaza font-semibold ml-1">Aldeaza</span>
</a>
      </div>

    </section>
  );
}
