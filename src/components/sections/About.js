const About = () => {
  return (
    <section className="about main-section flex-column-mobile" id="about">
      {/* INFO HOLDER STARTS */}
      <div className="info flex-column-mobile" style={{ justifyContent: "center", alignItems: "center" }}>
        {/* IMAGE STARTS */}
        <div
          className="img-container animated-layer image-animation my-photo-container fadeInUp wow"
          data-wow-offset={200}
          id="my-photo"
          style={{ flex: "0 0 auto" }}
        >
          <div>
            <div>
              <img className="my-photo" src="assets/about.jpg" alt="About JOIS" style={{ borderRadius: "12px" }} />
            </div>
          </div>
        </div>
        {/* IMAGE ENDS */}

        {/* INFO STARTS */}
        <div
          className="about-content"
          style={{
            maxWidth: "750px",
            textAlign: "center",
            padding: "40px 20px",
            margin: "0 auto",
          }}
        >
          <h2 style={{ marginBottom: "25px", lineHeight: "1.3" }}>
            <span>
              <span className="animated-layer fade-in-up-animation fadeInUp wow">
                Welcome to
              </span>
            </span>
            <br />
            <span>
              <span className="animated-layer fade-in-up-animation fadeInUp wow">
                Junior Odyssey International
              </span>
            </span>
          </h2>

          <div
            className="infos"
            style={{
              lineHeight: "1.8",
              fontSize: "1.05rem",
              color: "#333",
            }}
          >
            <p
              className="animated-layer fade-in-up-animation fadeInUp wow"
              data-wow-offset={200}
              style={{ marginBottom: "18px" }}
            >
              At <strong>Junior Odyssey International School (JOIS)</strong>, our
              <strong> Homer Eduship Curriculum</strong> shapes young minds through
              joyful and meaningful learning.
            </p>

            <p
              className="animated-layer fade-in-up-animation fadeInUp wow"
              data-wow-offset={200}
              style={{ marginBottom: "18px" }}
            >
              We inspire curiosity and creativity while nurturing early development
              through play and exploration.
            </p>

            <p
              className="animated-layer fade-in-up-animation fadeInUp wow"
              data-wow-offset={200}
              style={{ marginBottom: "18px" }}
            >
              Rooted in the UK’s <strong>Early Years Foundation Stage (EYFS)</strong>,
              our program integrates global best practices.
            </p>

            <p
              className="animated-layer fade-in-up-animation fadeInUp wow"
              data-wow-offset={200}
              style={{ marginBottom: "0" }}
            >
              Every child’s journey builds a confident, compassionate, and capable learner
              ready for tomorrow.
            </p>
          </div>
        </div>
        {/* INFO ENDS */}
      </div>
      {/* INFO HOLDER ENDS */}

      {/* SEPARATOR IMAGE */}
      <img
        alt="section separator"
        className="separator hide-mobile"
        src="assets/separator.png"
        style={{ marginTop: "40px" }}
      />
    </section>
  );
};

export default About;
