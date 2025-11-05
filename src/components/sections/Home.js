const Home = () => {
  return (
    <section className="home image relative overflow-hidden" id="home">
      {/* ✅ Background Video */}
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

      {/* ✅ Overlay for readability (optional) */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* ✅ Foreground Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-screen text-center text-white">
        <div className="position-relative">
          <h1>
            <span>
              <span className="animated-layer">
                Welcome <span>.</span>
              </span>
            </span>
            <span className="position-relative">
              <span className="animated-layer">to</span>
            </span>
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
