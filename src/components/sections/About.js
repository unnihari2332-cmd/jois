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
            <p
              className="animated-layer fade-in-up-animation fadeInUp wow"
              data-wow-offset={200}
            >
              At <strong>Junior Odyssey International School (JOIS)</strong>, the
              <strong> Homer Eduship Curriculum</strong> is crafted to nurture young minds.
            </p>
            <p
              className="animated-layer fade-in-up-animation fadeInUp wow"
              data-wow-offset={200}
            >
              It focuses on <strong>early childhood development</strong> through play, curiosity, and creativity.
            </p>
            <p
              className="animated-layer fade-in-up-animation fadeInUp wow"
              data-wow-offset={200}
            >
              Inspired by the UK’s <strong>Early Years Foundation Stage (EYFS)</strong>, our approach blends global best practices.
            </p>
            <p
              className="animated-layer fade-in-up-animation fadeInUp wow"
              data-wow-offset={200}
            >
              We aim to build a strong academic and emotional foundation for lifelong learning.
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
