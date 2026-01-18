
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Routes, Route, Link } from "react-router-dom"
import Booking from "./pages/Booking"
import Splash from "./pages/Splash"
import Contact from "./pages/Contact";
import Services from "./pages/Services";



function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Routes>



      {/* HOME PAGE */}
      <Route
        path="/home"
        element={
          <div className="w-full min-h-screen bg-gradient-to-b from-slate-900 via-black to-blue-300">

            <header className="fixed top-0 left-0 w-full h-16 bg-black/40 backdrop-blur-md z-50">


              <div className="w-full flex items-center justify-between px-8 h-full">


                {/* LEFT: HAMBURGER + LOGO */}
                <div className="flex items-center gap-3">

                  {/* HAMBURGER (MOBILE ONLY) */}
                  <button
                    className="md:hidden bg-black text-white text-2xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                  >
                    ☰
                  </button>

                  <img src="/logo.png" alt="mateshwari DJ &Events" className="w-12 h-12" />
                  <div className="flex flex-col leading-tight">
                    <h2 className="text-lg font-semibold text-blue-400">
                      <Link to="/home">Mateshwari DJ & Events</Link>
                    </h2>

                    <span className="text-xs text-gray-400 self-end">
                      Bhilwara
                    </span>
                  </div>




                </div>

                {/* DESKTOP MENU */}
                <nav className="hidden md:flex gap-10 text-blue-300 text-center text-sm">
                  <Link to="/home">Home</Link>
                  <a href="#about">About</a>
                  <Link to="/services">Services</Link>

                  <Link to="/contact">Contact</Link>

                </nav>

                {/* DESKTOP BUTTON */}
                <Link
                  to="/booking"
                  className="hidden md:block bg-black text-white px-4 py-2 rounded-lg text-sm"
                >
                  Book Now →
                </Link>
              </div>

              {/* MOBILE MENU */}
              {menuOpen && (
                <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center space-y-6">

                  <Link
                    to="/home"
                    onClick={() => setMenuOpen(false)}
                    className="text-white text-lg"
                  >
                    Home
                  </Link>

                  <a
                    href="#about"
                    onClick={() => setMenuOpen(false)}
                    className="text-white text-lg"
                  >
                    About
                  </a>

                  <Link
                    to="/services"
                    onClick={() => setMenuOpen(false)}
                    className="text-white text-lg"
                  >
                    Services
                  </Link>

                  <Link
                    to="/contact"
                    onClick={() => setMenuOpen(false)}
                    className="text-white text-lg"
                  >
                    Contact
                  </Link>

                  <Link
                    to="/booking"
                    onClick={() => setMenuOpen(false)}
                    className="bg-blue-500 text-white px-6 py-3 rounded-lg mt-4"
                  >
                    Book Now
                  </Link>

                  {/* CLOSE BUTTON */}
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="absolute top-5 right-5 text-white text-3xl"
                  >
                    ✕
                  </button>
                </div>
              )}

            </header>


            {/* HERO SECTION */}
            <section className="relative h-screen w-screen overflow-hidden pt-16 " >


              {/* BACKGROUND VIDEO */}
              <video
                className="absolute top-10 left-0 w-full h-full object-cover "
                src="https://res.cloudinary.com/de5maxf8o/video/upload/home-bg-video/bg-video.mp4"
                autoPlay
                loop
                muted={true}
                playsInline
              />

              {/* DARK OVERLAY */}
              <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

              {/* HERO CONTENT */}
              <div className="relative z-20 flex flex-col items-center">
                <img src="/logo.png" className="w-100 mb-6" />

                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent ">
                  Feel the Beat. Live the Moment.
                </h2>

                <p className="text-4x2 md:text-5x1 font-bold bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent px-6 py-3 ">
                  Professional DJ & Event Management Services
                </p>

                <Link
                  to="/booking"
                  className="mt-4 inline-block border border-blue-400 text-blue-400 px-6 py-3 rounded-xl hover:bg-blue-400 hover:text-black transition"
                >
                  Contact Now
                </Link>

                <Link
                  to="/services"
                  className="mt-4 inline-block border border-blue-400 text-blue-400 px-6 py-3 rounded-xl hover:bg-blue-400 hover:text-black transition"
                >
                  PHOTO & VIDEO
                </Link>

              </div>

            </section>



            {/* ABOUT SECTION */}
            <section id='about' className="w-full bg-black py-20">
              <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* LEFT TEXT */}
                <div>
                  <h3 className="text-blue-400 text-sm uppercase tracking-widest mb-2">
                    About Us
                  </h3>

                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Mateshwari DJ & Events

                  </h2>

                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">

                    OP- DJ ROHIT KUMAR
                  </h2>

                  <p className="text-gray-300 leading-relaxed mb-4">
                    Mateshwari DJ & Events ek professional DJ aur event management
                    company hai jo weddings, parties aur corporate events ke liye
                    premium sound, lighting aur entertainment services provide karti hai.
                  </p>

                  <p className="text-gray-400 leading-relaxed mb-6">
                    Hamara goal hai har event ko memorable banana – powerful music,
                    modern DJ setup aur energetic performance ke saath.
                  </p>

                  <p className="text-gray-400 leading-relaxed mb-6">
                    Founder & Owner-
                  </p>

                  <p className="text-red-100 leading-relaxed mb-6">
                    ROHIT KUMAR KOLI
                  </p>


                  <Link
                    to="/booking"
                    className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg"
                  >
                    Book Your Event
                  </Link>
                </div>

                {/* RIGHT HIGHLIGHTS */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-slate-900 p-6 rounded-xl text-center">
                    <h3 className="text-3xl font-bold text-blue-400">10+</h3>
                    <p className="text-gray-400 mt-2">Years Experience</p>
                  </div>

                  <div className="bg-slate-900 p-6 rounded-xl text-center">
                    <h3 className="text-3xl font-bold text-blue-400">250+</h3>
                    <p className="text-gray-400 mt-2">Events Done</p>
                  </div>

                  <div className="bg-slate-900 p-6 rounded-xl text-center">
                    <h3 className="text-3xl font-bold text-blue-400">100%</h3>
                    <p className="text-gray-400 mt-2">Client Satisfaction</p>
                  </div>

                  <div className="bg-slate-900 p-6 rounded-xl text-center">
                    <h3 className="text-3xl font-bold text-blue-400">24/7</h3>
                    <p className="text-gray-400 mt-2">Support</p>
                  </div>
                </div>

              </div>
            </section>




          </div>
        }
      />

      {/* routes */}
      {/* SPLASH SCREEN */}
      <Route path="/" element={<Splash />} />
      {/* BOOKING PAGE */}
      <Route path="/booking" element={<Booking />} />
      {/* contect */}
      <Route path="/contact" element={<Contact />} />
      {/* service */}
      <Route path="/Services" element={<Services />} />



    </Routes>
  )
}

export default App





