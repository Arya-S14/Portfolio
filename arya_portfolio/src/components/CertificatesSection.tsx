import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const certificates = [
  {
    src: "https://res.cloudinary.com/dhnu8milu/image/upload/v1754999812/cert1_1_qeodrg.jpg",
    title: "Certificate 1"
  },
  {
    src: "https://res.cloudinary.com/dhnu8milu/image/upload/v1754999812/cert3_1_ktl31f.jpg",
    title: "Certificate 2"
  },
  {
    src: "https://res.cloudinary.com/dhnu8milu/image/upload/v1754999812/cert2_1_jj0bbk.jpg",
    title: "Certificate 3"
  },
   {
    src: "https://res.cloudinary.com/dhnu8milu/image/upload/v1754999811/cert4_1_yle8dh.jpg",
    title: "Certificate 4"
  },
   {
    src: "https://res.cloudinary.com/dhnu8milu/image/upload/v1754999812/cert7_1_qwgony.jpg",
    title: "Certificate 5"
  },
   {
    src: "https://res.cloudinary.com/dhnu8milu/image/upload/v1754999812/cert6_1_yrergn.jpg",
    title: "Certificate 6"
  },
    {
    src: "https://res.cloudinary.com/dhnu8milu/image/upload/v1754999811/cert5_1_rxd5ob.jpg",
    title: "Certificate 7"
  }
];

const CertificatesSection: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section id="certificates" className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">
          Certificates
        </h2>
        <Slider {...settings}>
          {certificates.map((cert, idx) => (
            <div key={idx} className="px-4">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center justify-center h-[300px] w-[500px] mx-auto transition-transform duration-300 hover:scale-105">
                <img
                  src={cert.src}
                  alt={cert.title}
                  className="object-cover h-[300px] w-[500px] transition-transform duration-300 hover:scale-110"
                  style={{ borderRadius: '12px' }}
                />
                <p className="mt-2 text-center font-semibold">{cert.title}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CertificatesSection;