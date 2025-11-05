const Home = () => {
  return (
    <section className="home image relative overflow-hidden min-h-screen" id="home">
      {/* ✅ Fullscreen Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/jois.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* ✅ Optional overlay for readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* ✅ Foreground Content - bottom aligned */}
      <div className="relative z-10 flex flex-col justify-end items-center h-screen text-center text-white pb-16">
        <div className="position-relative">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span>
              <span className="animated-layer">
                Welcome <span>.</span>
              </span>
            </span>
            <br />
            <span className="position-relative">
              <span className="animated-layer">to</span>
            </span>
            <br />
            <span>
              <span className="animated-layer">Junior Odyssey International</span>
            </span>
          </h1>
        </div>

        {/* ✅ Call to Action */}
        <span className="animated-layer animated-btn cta mt-6" id="cta">
          <span></span>
        </span>
      </div>
    </section>
  );
};

export default Home;
