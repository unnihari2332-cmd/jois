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
              At <strong>Junior Odyssey International School (JOIS)</strong>, our{' '}
              <strong>Homer Eduship Curriculum</strong> shapes young minds through
              joyful and meaningful learning. We inspire curiosity and creativity while 
              nurturing early development through play and exploration.
            </p>
            <p
              className="animated-layer fade-in-up-animation fadeInUp wow"
              data-wow-offset={200}
              data-wow-delay="0.2s"
            >
              Rooted in the UK's <strong>Early Years Foundation Stage (EYFS)</strong>,
              our program integrates global best practices. Every child's journey builds 
              a confident, compassionate, and capable learner ready for tomorrow.
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
