import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black flex items-center justify-center px-4">

      <div className="bg-slate-900 rounded-2xl p-8 max-w-md w-full text-center shadow-xl">

        <h2 className="text-3xl font-bold text-blue-400 mb-2">
          Contact Us
        </h2>

        <p className="text-gray-400 mb-8">
          Get in touch with Mateshwari DJ & Events
        </p>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/919784784034?text=Hello%20Mateshwari%20DJ%20%26%20Events,%20I%20want%20to%20book%20DJ%20for%20my%20event."
          target="_blank"
          className="flex items-center gap-4 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-xl mb-5 transition"
        >
          <img src="/whatsapp.png" className="w-8 h-8" />
          <div className="text-left">
            <p className="font-semibold">WhatsApp</p>
            <p className="text-sm">Chat with us</p>
          </div>
        </a>


        {/* INSTAGRAM */}
        <a
          href="https://www.instagram.com/dj_king4034"
          target="_blank"
          className="flex items-center gap-4 bg-pink-500 hover:bg-pink-600 text-white px-6 py-4 rounded-xl mb-5 transition"
        >
          <img
            src="/instagram.png"
            alt="Instagram"
            className="w-8 h-8"
          />
          <div className="text-left">
            <p className="font-semibold">Instagram</p>
            <p className="text-sm">@mateshwari_dj_events</p>
          </div>
        </a>

        {/*mobile*/}
        <a
          href="tel:+919784784034"
          className="flex items-center gap-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 rounded-xl transition"
        >
          <span className="text-2xl">📞</span>
          <div className="text-left">
            <p className="font-semibold">Call Now</p>
            <p className="text-sm">+91 9784784034</p>
          </div>
        </a>


        {/* BACK BUTTON */}
        <Link
          to="/home"
          className="inline-block mt-8 text-blue-400 text-sm"
        >
          ← Back to Home
        </Link>

      </div>
    </div>
  );
}

export default Contact;
