// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "../contactStyle.css";
const Contact = () => {
  const [state, handleSubmit] = useForm("mzbqnlgp");
  if (state.succeeded) {
    return (
      <div className="bg-black text-white w-full max-w-lg mx-auto rounded-lg shadow-md p-6 mt-4">
        <h1 className="text-xl font-bold text-red-500">Success!</h1>
        <p className="mt-2">
          Thanks for reaching out. Your message was sent successfully and I will
          be reaching back out as soon as I can!
        </p>
      </div>
    );
  }

  return (
    <section className="bg-gray-900 pt-5" id="contact-section">
      <h1 className="text-center text-white text-4xl font-bold pb-5">
        Get In Touch!
      </h1>
      <form
        onSubmit={handleSubmit}
        className="p-6 bg-red-500 text-white w-full max-w-lg mx-auto rounded-lg shadow-md"
      >
        <fieldset id="fs-frm-inputs" className="space-y-4">
          <label htmlFor="full-name" className="block">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="full-name"
            placeholder="First and Last"
            required=""
            className="w-full px-4 py-2 border border-red-500 rounded-lg focus:outline-none focus:border-red-700 bg-gray-800 text-white"
          />
          <label htmlFor="email-address" className="block">
            Email Address
          </label>
          <input
            type="email"
            name="_replyto"
            id="email-address"
            placeholder="email@domain.tld"
            required=""
            className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:border-red-700 bg-gray-800 text-white"
          />
          <label htmlFor="message" className="block">
            Message
          </label>
          <textarea
            rows="5"
            name="message"
            id="message"
            placeholder="Write your message here..."
            required=""
            className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:border-red-700 bg-gray-800 text-white"
          ></textarea>
          <input
            type="hidden"
            name="_subject"
            id="email-subject"
            value="Contact Form Submission"
          />
        </fieldset>
        <button
          type="submit"
          value="Submit"
          disabled={state.submitting}
          className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 border border-black rounded"
        >
          Submit
        </button>
      </form>
    </section>
  );
};
export default Contact;
