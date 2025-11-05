const Header = () => {
  return (
    <header>
      {/* Desktop Menu Starts */}
      <div className="header-inner hide-mobile">
        <div className="logo">
          <a href="#home" aria-label="Jois home">
            <img
              src="/assets/jois-logo.svg"
              alt="Jois logo"
              className="header-logo"
            />
          </a>
        </div>
        {/* MENU STARTS */}
        <div className="menu">
          <nav>
            <ul>
              <li>
                <a className="active" href="#home" id="home-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" id="about-link">
                  About
                </a>
              </li>
              <li>
                <a href="#portfolio" id="portfolio-link">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" id="contact-link">
                  Contact
                </a>
              </li>
              <li>
                <a href="#blog" id="blog-link">
                  Blog
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {/* MENU ENDS */}
        {/* FREELANCE STARTS */}
        <div className="mail">
          <p>
            Email :<span> hello@jois.com</span>
          </p>
        </div>
        {/* FREELANCE ENDS */}
      </div>
      {/* Desktop Menu Ends */}
      {/* Mobile Menu Starts */}
      <div className="mobile-brand">
        <a href="#home" aria-label="Jois home" className="mobile-logo">
          <img src="/assets/jois-logo.svg" alt="Jois logo" />
        </a>
      </div>
      <nav className="mobile-menu">
        <div id="menuToggle">
          <input type="checkbox" id="checkboxmenu" />
          <span />
          <span />
          <span />
          <ul className="list-unstyled" id="menu">
            <li>
              <a href="#home">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#my-photo">
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#portfolio">
                <span>Portfolio</span>
              </a>
            </li>
            <li>
              <a href="#contact">
                <span>Contact</span>
              </a>
            </li>
            <li>
              <a href="#blog">
                <span>Blog</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* Mobile Menu Ends */}
    </header>
  );
};
export default Header;
