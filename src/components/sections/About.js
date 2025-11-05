
const About = () => {
  return (
    <section className="about main-section flex-column-mobile" id="about">
      {/* INFO HOLDER STARTS */}
      <div className="info flex-column-mobile">
        {/* IMAGE STARTS */}
        <div
          className="img-container animated-layer image-animation my-photo-container fadeInUp wow"
          data-wow-offset={200}
          id="my-photo"
        >
          <div>
            <div>
              <img className="my-photo" src="assets/about.jpg" alt="About JOIS" />
            </div>
          </div>
        </div>
        {/* IMAGE ENDS */}

        {/* INFO STARTS */}
        <div className="about-content">
          <h2>
            <span>
              <span className="animated-layer fade-in-up-animation fadeInUp wow">
                Welcome to
              </span>
            </span>
            <span>
              <span className="animated-layer fade-in-up-animation fadeInUp wow">
                Junior Odyssey International
              </span>
            </span>
          </h2>

          <div className="infos">
            <p className="animated-layer fade-in-up-animation fadeInUp wow" data-wow-offset={200}>
              <span>At <strong>Junior Odyssey International School (JOIS)</strong>, the <strong>Homer Eduship Curriculum</strong> is 
              designed to nurture young learners in their most formative years.</span><span>Inspired by the UK’s 
              <strong> Early Years Foundation Stage (EYFS)</strong> </span></span>and enriched with global best practices, it blends 
              play, inquiry, and creativity with a strong academic foundation.</span>
            </p>
          </div>
        </div>
        {/* INFO ENDS */}
      </div>
      {/* INFO HOLDER ENDS */}

      {/* SEPARATOR IMAGE */}
      <img alt="section separator" className="separator hide-mobile" src="assets/separator.png" />
    </section>
  );
};

export default About;
