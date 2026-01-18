import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="relative min-h-screen w-screen overflow-hidden">

      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://res.cloudinary.com/de5maxf8o/video/upload/splash/splash.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center">

        <img src="/logo.png" className="w-40 mb-4 animate-pulse" />

        <h1 className="text-2xl md:text-2xl font-semibold text-blue-400">
          Mateshwari DJ & Events
        </h1>

        <h1 className="text-2xl md:text-2xl font-semibold text-blue-400">
          OP - DJ ROHIT 
        </h1>

      </div>
    </div>
  );
}

export default Splash;
