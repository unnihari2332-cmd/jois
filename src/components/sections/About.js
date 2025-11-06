import { salimovSlider } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const About = () => {
  return (
    <section className="about main-section flex-column-mobile" id="about">
      {/* TITLE STARTS */}
      <div className="custom-title">
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              About JOIS
            </span>
          </span>
        </h3>
      </div>
      {/* TITLE ENDS */}

      <Swiper
        {...salimovSlider.portfolio}
        className="swiper swiper-portfolio animated-layer fade-in-right-animation fadeInUp wow"
        data-wow-offset={200}
      >
        {/* SLIDE 1 — Overview */}
        <SwiperSlide className="single-item swiper-slide">
          {/* MAIN CONTENT */}
          <div className="main-content">
            <img
              className="img-fluid"
              src="assets/about.jpg"
              alt="About Junior Odyssey International"
            />
          </div>
          {/* DETAILS */}
          <div className="details">
            <h4>Who We Are</h4>
            <div>
              <ul>
                <li>
                  <span><i className="fa-regular fa-file-lines" /> School :</span>
                  <span>Junior Odyssey International School (JOIS)</span>
                </li>
                <li>
                  <span><i className="fa-regular fa-hourglass" /> Ages :</span>
                  <span>Early Years (2–6)</span>
                </li>
                <li>
                  <span><i className="fa-solid fa-code-branch" /> Curriculum :</span>
                  <span>Homer Eduship • EYFS-aligned</span>
                </li>
                <li>
                  <span><i className="fa-regular fa-user" /> Approach :</span>
                  <span>Play • Inquiry • Creativity</span>
                </li>
              </ul>
            </div>
            <a href="#" target="_blank" className="custom-btn">
              <span>
                prospectus <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
        </SwiperSlide>

        {/* SLIDE 2 — Philosophy */}
        <SwiperSlide className="single-item swiper-slide">
          {/* MAIN CONTENT */}
          <div className="main-content">
            <div className="videocontainer">
              {/* If you have a YouTube video, replace the video tag with an iframe like in Portfolio */}
              <video
                className="youtube-video"
                autoPlay
                muted
                loop
                playsInline
                controls={false}
                poster="assets/portfolio/project-1.jpg"
              >
                <source src="/assets/jois.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          {/* DETAILS */}
          <div className="details">
            <h4>Our Philosophy</h4>
            <div>
              <ul>
                <li>
                  <span><i className="fa-regular fa-file-lines" /> Foundation :</span>
                  <span>Holistic Early Education</span>
                </li>
                <li>
                  <span><i className="fa-regular fa-hourglass" /> Focus :</span>
                  <span>Joyful Learning & Wellbeing</span>
                </li>
                <li>
                  <span><i className="fa-solid fa-code-branch" /> Pillars :</span>
                  <span>Play • Language • Numeracy • Arts</span>
                </li>
                <li>
                  <span><i className="fa-regular fa-user" /> Outcome :</span>
                  <span>Curious, Confident Learners</span>
                </li>
              </ul>
            </div>
            <a href="#" target="_blank" className="custom-btn">
              <span>
                explore more <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
        </SwiperSlide>

        {/* SLIDE 3 — Glimpses (nested slider like Portfolio’s “Slider Project”) */}
        <SwiperSlide className="single-item swiper-slide">
          <div className="main-content">
            <Swiper
              {...salimovSlider.portfolioItems}
              className="swiper swiper-portfolio-item"
            >
              {/* Use your own images here if available */}
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/project-2.jpg" alt="JOIS Glimpse 1" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/project-3.jpg" alt="JOIS Glimpse 2" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/project-1.jpg" alt="JOIS Glimpse 3" />
              </SwiperSlide>
              <div className="swiper-pagination" />
            </Swiper>
          </div>
          <div className="details">
            <h4>Campus Glimpses</h4>
            <div>
              <ul>
                <li>
                  <span><i className="fa-regular fa-file-lines" /> Learning Spaces :</span>
                  <span>Safe • Stimulating • Inclusive</span>
                </li>
                <li>
                  <span><i className="fa-regular fa-hourglass" /> Programs :</span>
                  <span>Seeds • Cubs • Owls • Makers</span>
                </li>
                <li>
                  <span><i className="fa-solid fa-code-branch" /> Enrichment :</span>
                  <span>Music • Art • Movement</span>
                </li>
                <li>
                  <span><i className="fa-regular fa-user" /> Community :</span>
                  <span>Parents as Partners</span>
                </li>
              </ul>
            </div>
            <a href="#" target="_blank" className="custom-btn">
              <span>
                admissions <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
        </SwiperSlide>

        {/* NAV BUTTONS (match Portfolio styling) */}
        <div className="nav-item next-item animated-btn">
          <span />
        </div>
        <div className="nav-item prev-item animated-btn">
          <span />
        </div>
      </Swiper>

      {/* Separator image to mirror Portfolio layout */}
      <img alt="" className="separator hide-mobile" src="assets/separator.png" />
    </section>
  );
};

export default About;
