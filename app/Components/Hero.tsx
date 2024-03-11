import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
    EffectCreative,
  } from "swiper/modules";
  
  import { Swiper, SwiperSlide } from "swiper/react";
  
  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import "swiper/css/scrollbar";
  import "swiper/css/autoplay";
  const slides = [
    { image: "/hero-background.jpg" },
    { image: "https://via.placeholder.com/600x400?text=Slide+2" },
    { image: "https://via.placeholder.com/600x400?text=Slide+3" },
  ];
  
  const Hero = () => {
    return (
      <main className="text-[black]">
        <Swiper
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            Autoplay,
            EffectCreative,
          ]}
          speed={1000}
          spaceBetween={30}
          slidesPerView={1}
          grabCursor={true}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ['-20%', 0, -1],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }}
          //   navigation
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          //   scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
                  <div className="section heroSection bg-center bg-cover flex items-center justify-center text-center text-white" style={{ backgroundImage: `url(${slide.image})`, height: '900px' }}>
        <div className="heroContent">
          <h1 className="text-3xl sm:text-4xl font-extrabold bg-black bg-opacity-30 px-4 py-2 rounded-md">Welcome to Paws of Love</h1>
          <p className="text-sm sm:text-base bg-black bg-opacity-30 px-4 py-2 rounded-md">Our mission is to provide love, care, and support to every stray and abandoned dog in need.</p>
          <button className="ctaButton">Adopt Now</button>
        </div>
      
      </div>
              {/* <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full"
              /> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    );
  };
  
  export default Hero;
  