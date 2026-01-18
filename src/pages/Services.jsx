import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();
  
  const phone = "919784784034";
  const cloud = "de5maxf8o";

  const services = [
    { name: "Dance Floor", folder: "dance-floor", total: 10 },
    { name: "U Trust", folder: "u-trust", total: 10 },
    { name: "Square Trust", folder: "square-trust", total: 10 },
    { name: "DJ", folder: "dj", total: 10 },
    { name: "Haldi / Mehendi", folder: "haldi-mahendi", total: 10 },
    { name: "Ladies Sangeet", folder: "ladies-sangeet", total: 10 },
    { name: "Balloon Decoration", folder: "balloon-decoration", total: 10 },
    { name: "Entry", folder: "entry", total: 10 },
    { name: "Light Decoration", folder: "light-decoration", total: 10 },
  ];

  const [openAlbum, setOpenAlbum] = useState(null);
  const [previewIndex, setPreviewIndex] = useState(null);

  // ===== WhatsApp booking link =====
  const waMessage = (service, imgName) => {
    const imgUrl = `https://res.cloudinary.com/${cloud}/image/upload/${service.folder}/${imgName}`;
    const message = `
Hello Mateshwari DJ & Events,

I want to book ${service.name}.
Reference Image:
${imgUrl}
`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  // ===== Full-screen image logic =====
  const getPreviewImg = () =>
    `https://res.cloudinary.com/${cloud}/image/upload/${openAlbum.folder}/${previewIndex + 1}.jpg`;

  const nextImage = () => {
    if (previewIndex < openAlbum.total - 1) {
      setPreviewIndex(previewIndex + 1);
    }
  };

  const prevImage = () => {
    if (previewIndex > 0) {
      setPreviewIndex(previewIndex - 1);
    }
  };

  let touchStartX = 0;
  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (diff > 50) nextImage();
    if (diff < -50) prevImage();
  };

  // ===== DOWNLOAD FUNCTION =====
  const downloadImage = async () => {
    if (!openAlbum || previewIndex === null) return;

    const url = getPreviewImg();
    try {
      const res = await fetch(url, { mode: "cors" });
      const blob = await res.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `image-${previewIndex + 1}.jpg`;
      link.click();
      URL.revokeObjectURL(link.href);
    } catch (err) {
      console.error("Download failed", err);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* BACK */}
        <button
          onClick={() => navigate("/")}
          className="mb-8 text-lg hover:text-blue-400"
        >
          ← Back to Home
        </button>

        <h2 className="text-4xl font-bold text-center text-blue-400 mb-14">
          Our Event Services
        </h2>

        {/* ===== ALL ALBUMS ===== */}
        {!openAlbum && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((srv, i) => (
              <div
                key={i}
                onClick={() => setOpenAlbum(srv)}
                className="bg-slate-900 rounded-xl cursor-pointer overflow-hidden
                           hover:scale-105 transition shadow-lg"
              >
                <img
                  src={`https://res.cloudinary.com/${cloud}/image/upload/${srv.folder}/1.jpg`}
                  className="w-full h-56 object-cover"
                  alt={srv.name}
                />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold">{srv.name}</h3>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ===== OPEN ALBUM ===== */}
        {openAlbum && (
          <>
            <h3
              onClick={() => setOpenAlbum(null)}
              className="text-2xl mb-10 cursor-pointer hover:text-blue-400"
            >
              ← Back to All Albums
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(openAlbum.total)].map((_, index) => {
                const img = `${index + 1}.jpg`;
                const imgUrl = `https://res.cloudinary.com/${cloud}/image/upload/${openAlbum.folder}/${img}`;

                return (
                  <div
                    key={index}
                    className="bg-slate-900 rounded-xl overflow-hidden shadow-lg"
                  >
                    <img
                      src={imgUrl}
                      className="w-full h-56 object-cover cursor-pointer"
                      onClick={() => setPreviewIndex(index)}
                      alt=""
                    />

                    <div className="p-4 text-center">
                      <a
                        href={waMessage(openAlbum, img)}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-lg inline-block"
                      >
                        Book on WhatsApp
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* ===== FULL SCREEN PREVIEW ===== */}
        {previewIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* DOWNLOAD BUTTON */}
            <button
              onClick={downloadImage}
              className="absolute top-5 left-5 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg z-50"
            >
              ⬇ Download
            </button>

            {/* CLOSE */}
            <button
              className="absolute top-5 right-5 text-white text-4xl"
              onClick={() => setPreviewIndex(null)}
            >
              ✕
            </button>

            {/* LEFT */}
            {previewIndex > 0 && (
              <button
                className="absolute left-5 text-white text-5xl"
                onClick={prevImage}
              >
                ‹
              </button>
            )}

            {/* IMAGE */}
            <img
              src={getPreviewImg()}
              className="max-w-[95%] max-h-[90%] object-contain rounded-lg"
              alt=""
            />

            {/* WHATSAPP BUTTON */}
            <a
              href={waMessage(openAlbum, `${previewIndex + 1}.jpg`)}
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-8 bg-green-500 hover:bg-green-600
             text-white px-8 py-3 rounded-xl text-lg font-semibold
             shadow-lg"
            >
              📲 Book on WhatsApp
            </a>

            {/* RIGHT */}
            {previewIndex < openAlbum.total - 1 && (
              <button
                className="absolute right-5 text-white text-5xl"
                onClick={nextImage}
              >
                ›
              </button>
            )}
          </div>
        )}

      </div>
    </div>
  );
}

export default Services;
