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
          <div className="infos" style={{ lineHeight: '1.8' }}>
            <span
              className="animated-layer fade-in-up-animation fadeInUp wow"
              data-wow-offset={200}
              data-wow-delay="0s"
              style={{ display: 'block', marginBottom: '10px' }}
            >
              At <strong>Junior Odyssey International School (JOIS)</strong>, our{' '}
              <strong>Homer Eduship Curriculum</strong> shapes young minds through
              joyful and meaningful learning.
            </span>
            <span
              className="animated-layer fade-in-up-animation fadeInUp wow"
              data-wow-offset={200}
              data-wow-delay="0.2s"
              style={{ display: 'block', marginBottom: '10px' }}
            >
              We inspire curiosity and creativity while nurturing early development
              through play and exploration.
            </span>
            <span
              className="animated-layer fade-in-up-animation fadeInUp wow"
              data-wow-offset={200}
              data-wow-delay="0.4s"
              style={{ display: 'block', marginBottom: '10px' }}
            >
              Rooted in the UK's <strong>Early Years Foundation Stage (EYFS)</strong>,
              our program integrates global best practices.
            </span>
            <span
              className="animated-layer fade-in-up-animation fadeInUp wow"
              data-wow-offset={200}
              data-wow-delay="0.6s"
              style={{ display: 'block', marginBottom: '10px' }}
            >
              Every child's journey builds a confident, compassionate, and capable learner
              ready for tomorrow.
            </span>
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
