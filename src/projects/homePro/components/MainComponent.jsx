export default function MainComponent() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="header__container">
          <a href="#" className="header__logo">
            <img src="img/logo.svg" alt="Logo" />
          </a>
          <div className="header__menu menu">
            <button type="button" className="menu__icon icon-menu">
              <span></span>
            </button>
            <nav className="menu__body">
              <ul className="menu__list">
                <li className="menu__item">
                  <a href="#" data-goto=".about" className="menu__link">
                    About Us
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#" data-goto=".services" className="menu__link">
                    Services
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#" data-goto=".blog" className="menu__link">
                    Our Blog
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#" data-goto=".footer" className="menu__link">
                    Contact{" "}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div data-da=".menu__body, 767.98" className="header__schedule">
            24 Hour Services
          </div>
        </div>
      </header>
      <main className="page">
        <section data-watch className="hero">
          <div className="hero__image-ibg hero__image-ibg--left">
            <picture>
              <source srcSet="img/hero/image-left.webp" type="image/webp" />
              <img src="img/hero/image-left.jpg" alt="Image" />
            </picture>
          </div>
          <div className="hero__body">
            <div className="hero__content">
              <div className="hero__main">
                <ul className="hero__items items-hero">
                  <li className="items-hero__item">Maintenances</li>
                  <li className="items-hero__item">Repairs</li>
                  <li className="items-hero__item">Improvements</li>
                </ul>
                <div className="hero__block-header block-header block-header--center">
                  <h1 className="block-header__title block-header__title--white block-header__title--big">
                    Need improvement or repair your home? we can help!
                  </h1>
                </div>
                <ul className="hero__done done">
                  <li className="done__item">Free Quotes</li>
                  <li className="done__item">100% Commitment-Free</li>
                </ul>
              </div>
              <a href="#" className="hero__button button button--icon">
                <span>Call Us Now</span>
              </a>
            </div>
            <div className="hero__advantages advantages-hero">
              <div className="advantages-hero__item">
                <div className="advantages-hero__icon">
                  <img src="img/hero/icons/01.svg" alt="Icon" />
                </div>
                <div className="advantages-hero__text">
                  <p>Satisfaction Guarantee</p>
                </div>
              </div>
              <div className="advantages-hero__item">
                <div className="advantages-hero__icon">
                  <img src="img/hero/icons/02.svg" alt="Icon" />
                </div>
                <div className="advantages-hero__text">
                  <p>24H Availability</p>
                </div>
              </div>
              <div className="advantages-hero__item">
                <div className="advantages-hero__icon">
                  <img src="img/hero/icons/03.svg" alt="Icon" />
                </div>
                <div className="advantages-hero__text">
                  <p>Local US Professional</p>
                </div>
              </div>
              <div className="advantages-hero__item">
                <div className="advantages-hero__icon">
                  <img src="img/hero/icons/04.svg" alt="Icon" />
                </div>
                <div className="advantages-hero__text">
                  <p>Flexible Appointments</p>
                </div>
              </div>
            </div>
          </div>
          <div className="hero__image-ibg hero__image-ibg--right">
            <picture>
              <source srcSet="img/hero/image-right.webp" type="image/webp" />
              <img src="img/hero/image-right.jpg" alt="Image" />
            </picture>
          </div>
          <div className="hero__decor decor-hero">
            <div className="decor-hero__item"></div>
            <div className="decor-hero__item"></div>
          </div>
        </section>
        <section
          data-watch="navigator"
          data-watch-threshold="0.3"
          className="about"
        >
          <div className="about__container">
            <div className="about__body">
              <div className="about__block-header block-header">
                <h2 className="block-header__title">
                  Professional for your home services
                </h2>
                <div className="block-header__text">
                  <p>
                    You need help for home care? We are home care professionals
                    focused in the US region. We provide several services that
                    support home services
                  </p>
                </div>
              </div>
              <ul className="about__items">
                <li className="about__item">Repair and Installation</li>
                <li className="about__item">Maintenance</li>
                <li className="about__item">Home Security Services</li>
                <li className="about__item">Plumbing</li>
                <li className="about__item">Budget-friendly</li>
                <li className="about__item">Eco-friendly solutions</li>
              </ul>
              <div className="about__info">
                We already 24 hours fast services to help you. You can contact
                us at <a href="tel:8886175894">(888) 617-5894</a>
              </div>
            </div>
            <div className="about__image">
              <picture>
                <source srcSet="img/about/image.webp" type="image/webp" />
                <img src="img/about/image.png" alt="Image" />
              </picture>
            </div>
          </div>
        </section>
        <section
          data-watch="navigator"
          data-watch-threshold="0.3"
          className="services"
        >
          <div className="services__container">
            <div className="services__block-header block-header block-header--center">
              <h2 className="block-header__title">Our Services</h2>
              <div className="block-header__text">
                <p>
                  You have problems with leaking pipes, broken tiles, lost keys
                  or want to tidy up the trees around you, of course you need
                  our help!
                </p>
              </div>
            </div>
            <div className="services__items">
              <article className="services__item item-service">
                <div className="item-service__icon">
                  <img src="img/services/01.svg" alt="Icon" />
                </div>
                <h4 className="item-service__title">Plumbing services</h4>
                <div className="item-service__text">
                  <p>Drain pipe leaking, pipe clogged, replace the pipe line</p>
                </div>
              </article>
              <article className="services__item item-service">
                <div className="item-service__icon">
                  <img src="img/services/02.svg" alt="Icon" />
                </div>
                <h4 className="item-service__title">Roofing repair</h4>
                <div className="item-service__text">
                  <p>Drain pipe leaking, pipe clogged, replace the pipe line</p>
                </div>
              </article>
              <article className="services__item item-service">
                <div className="item-service__icon">
                  <img src="img/services/03.svg" alt="Icon" />
                </div>
                <h4 className="item-service__title">Mold Removal</h4>
                <div className="item-service__text">
                  <p>Drain pipe leaking, pipe clogged, replace the pipe line</p>
                </div>
              </article>
              <article className="services__item item-service">
                <div className="item-service__icon">
                  <img src="img/services/04.svg" alt="Icon" />
                </div>
                <h4 className="item-service__title">Tree Trimming</h4>
                <div className="item-service__text">
                  <p>Drain pipe leaking, pipe clogged, replace the pipe line</p>
                </div>
              </article>
              <article className="services__item item-service">
                <div className="item-service__icon">
                  <img src="img/services/05.svg" alt="Icon" />
                </div>
                <h4 className="item-service__title">Appliance Repair</h4>
                <div className="item-service__text">
                  <p>Drain pipe leaking, pipe clogged, replace the pipe line</p>
                </div>
              </article>
              <article className="services__item item-service">
                <div className="item-service__icon">
                  <img src="img/services/06.svg" alt="Icon" />
                </div>
                <h4 className="item-service__title">Bathroom Remodeling</h4>
                <div className="item-service__text">
                  <p>Drain pipe leaking, pipe clogged, replace the pipe line</p>
                </div>
              </article>
              <article className="services__item item-service">
                <div className="item-service__icon">
                  <img src="img/services/07.svg" alt="Icon" />
                </div>
                <h4 className="item-service__title">Locksmith</h4>
                <div className="item-service__text">
                  <p>Drain pipe leaking, pipe clogged, replace the pipe line</p>
                </div>
              </article>
              <article className="services__item item-service item-service--blue">
                <h4 className="item-service__title">More service?</h4>
                <div className="item-service__text">
                  <p>You can tell us what you need and we can help!</p>
                </div>
                <a
                  href="#"
                  className="item-service__button button button--fw button--white button--min"
                >
                  Call Us Now
                </a>
              </article>
            </div>
          </div>
        </section>
        <section data-watch className="advantages">
          <div className="advantages__body">
            <div className="advantages__container">
              <div className="advantages__block-header block-header block-header--inline">
                <h2 className="block-header__title block-header__title--white">
                  Fast, Friendly, and Satisfaction Guarantee
                </h2>
                <div className="block-header__text">
                  <p>
                    No matter how big or small your work is, whether it&apos;s
                    for the interior or exterior of your home, we are ready to
                    serve and help you solve your home problems.
                  </p>
                </div>
              </div>
              <div className="advantages__items">
                <div className="advantages__item item-advantages">
                  <div className="item-advantages__icon">
                    <img src="img/advantages/01.svg" alt="Image" />
                  </div>
                  <div className="item-advantages__body">
                    <h4 className="item-advantages__title">
                      Satisfaction Guarantee
                    </h4>
                    <div className="item-advantages__text">
                      <p>
                        you don&apos;t need to worry about scams or our
                        performance results. our company has been verified and
                        strives for optimal results
                      </p>
                    </div>
                  </div>
                </div>
                <div className="advantages__item item-advantages">
                  <div className="item-advantages__icon">
                    <img src="img/advantages/02.svg" alt="Image" />
                  </div>
                  <div className="item-advantages__body">
                    <h4 className="item-advantages__title">Free Quotes</h4>
                    <div className="item-advantages__text">
                      <p>
                        Get personalized cost estimates without any obligation.
                        Experience transparency and peace of mind as you explore
                        our service.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="advantages__item item-advantages">
                  <div className="item-advantages__icon">
                    <img src="img/advantages/03.svg" alt="Image" />
                  </div>
                  <div className="item-advantages__body">
                    <h4 className="item-advantages__title">
                      Local Professionals
                    </h4>
                    <div className="item-advantages__text">
                      <p>
                        Our services cover the Nationwide, US area, including
                        urban, suburban, and rural locations for both long and
                        short term maintenance
                      </p>
                    </div>
                  </div>
                </div>
                <div className="advantages__item item-advantages">
                  <div className="item-advantages__icon">
                    <img src="img/advantages/04.svg" alt="Image" />
                  </div>
                  <div className="item-advantages__body">
                    <h4 className="item-advantages__title">
                      Fast 24-Hour Service
                    </h4>
                    <div className="item-advantages__text">
                      <p>
                        need fast handling for repairs to drains, leaks or
                        something else? Our experts are available anytime to
                        help you solve the problem
                      </p>
                    </div>
                  </div>
                </div>
                <div className="advantages__item item-advantages">
                  <div className="item-advantages__icon">
                    <img src="img/advantages/05.svg" alt="Image" />
                  </div>
                  <div className="item-advantages__body">
                    <h4 className="item-advantages__title">
                      Flexible Appointments
                    </h4>
                    <div className="item-advantages__text">
                      <p>
                        We offer convenient appointment times that can
                        accommodate your busy schedule, day or night, 7 days a
                        week.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="advantages__item item-advantages">
                  <div className="item-advantages__icon">
                    <img src="img/advantages/06.svg" alt="Image" />
                  </div>
                  <div className="item-advantages__body">
                    <h4 className="item-advantages__title">
                      100% Commitment-Free
                    </h4>
                    <div className="item-advantages__text">
                      <p>
                        You are free to ask us about the problems you are
                        facing. We offer a no-commitment approach to put your
                        mind at ease
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-watch className="how">
          <div className="how__container">
            <div className="how__image">
              <picture>
                <source srcSet="img/how/image.webp" type="image/webp" />
                <img src="img/how/image.jpg" alt="Image" />
              </picture>
            </div>
            <div className="how__content">
              <div className="how__block-header block-header">
                <h2 className="block-header__title">How HomePro works?</h2>
              </div>
              <ol className="how__list list-how">
                <li className="list-how__item">
                  <span className="list-how__title">Call us anytime 24/7</span>
                  <span className="list-how__text text">
                    You can contact us directly, we will quickly put you in
                    touch with our home care professionals who are ready anytime
                  </span>
                </li>
                <li className="list-how__item">
                  <span className="list-how__title">Schedule Service</span>
                  <span className="list-how__text text">
                    After connecting your call, our home care experts will
                    answer your questions and provide flexible appointment times
                  </span>
                </li>
                <li className="list-how__item">
                  <span className="list-how__title">
                    Your request is complated
                  </span>
                  <span className="list-how__text text">
                    Once your technician arrives, he will diagnose the problem
                    and provide an estimate. If you decide to continue, the
                    technician will get to work
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </section>
        <section data-watch className="reviews">
          <div className="reviews__container">
            <div className="reviews__block-header block-header block-header--center">
              <h2 className="block-header__title">
                Here our original reviews from trusted platform
              </h2>
            </div>
            <div className="reviews__body">
              <div className="reviews__slider swiper">
                <div className="reviews__wrapper swiper-wrapper">
                  <div className="reviews__slide slide-reviews swiper-slide">
                    <div className="slide-reviews__logo">
                      <picture>
                        <source
                          srcSet="img/reviews/logo.webp"
                          type="image/webp"
                        />
                        <img src="img/reviews/logo.jpg" alt="Logo" />
                      </picture>
                    </div>
                    <div className="slide-reviews__text text">
                      <p>
                        Roof repairs can be a real headache, but HomePro makes
                        it easy! Their roofing team turned my leaky roof into a
                        stockade. With their craftsmanship and the best
                        materials, my house is now ready to weather any storm.
                      </p>
                    </div>
                    <div className="slide-reviews__user">
                      <div className="slide-reviews__avatar">
                        <picture>
                          <source
                            srcSet="img/reviews/avatar.webp"
                            type="image/webp"
                          />
                          <img src="img/reviews/avatar.jpg" alt="Image" />
                        </picture>
                      </div>
                      <div className="slide-reviews__body">
                        <div className="slide-reviews__name">Kende Attila</div>
                        <div className="slide-reviews__rating rating">
                          <div className="rating__body">
                            <div className="rating__active"></div>
                            <div className="rating__items">
                              <input
                                type="radio"
                                className="rating__item"
                                value="1"
                                name="rating"
                              />
                              <input
                                type="radio"
                                className="rating__item"
                                value="2"
                                name="rating"
                              />
                              <input
                                type="radio"
                                className="rating__item"
                                value="3"
                                name="rating"
                              />
                              <input
                                type="radio"
                                className="rating__item"
                                value="4"
                                name="rating"
                              />
                              <input
                                type="radio"
                                className="rating__item"
                                value="5"
                                name="rating"
                              />
                            </div>
                          </div>
                          <div className="rating__value">3.6</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="reviews__slide slide-reviews swiper-slide">
                    <div className="slide-reviews__logo">
                      <picture>
                        <source
                          srcSet="img/reviews/logo.webp"
                          type="image/webp"
                        />
                        <img src="img/reviews/logo.jpg" alt="Logo" />
                      </picture>
                    </div>
                    <div className="slide-reviews__text text">
                      <p>
                        Roof repairs can be a real headache, but HomePro makes
                        it easy! Their roofing team turned my leaky roof into a
                        stockade. With their craftsmanship and the best
                        materials, my house is now ready to weather any storm.
                      </p>
                      <p>
                        Roof repairs can be a real headache, but HomePro makes
                        it easy! Their roofing team turned my leaky roof into a
                        stockade. With their craftsmanship and the best
                        materials, my house is now ready to weather any storm.
                      </p>
                    </div>
                    <div className="slide-reviews__user">
                      <div className="slide-reviews__avatar">
                        <picture>
                          <source
                            srcSet="img/reviews/avatar.webp"
                            type="image/webp"
                          />
                          <img src="img/reviews/avatar.jpg" alt="Image" />
                        </picture>
                      </div>
                      <div className="slide-reviews__body">
                        <div className="slide-reviews__name">Kende Attila</div>
                        <div className="slide-reviews__rating rating">
                          <div className="rating__body">
                            <div className="rating__active"></div>
                            <div className="rating__items">
                              <input
                                type="radio"
                                className="rating__item"
                                value="1"
                                name="rating"
                              />
                              <input
                                type="radio"
                                className="rating__item"
                                value="2"
                                name="rating"
                              />
                              <input
                                type="radio"
                                className="rating__item"
                                value="3"
                                name="rating"
                              />
                              <input
                                type="radio"
                                className="rating__item"
                                value="4"
                                name="rating"
                              />
                              <input
                                type="radio"
                                className="rating__item"
                                value="5"
                                name="rating"
                              />
                            </div>
                          </div>
                          <div className="rating__value">3.6</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="reviews__arrow reviews__arrow--left"
                type="button"
              ></button>
              <button
                className="reviews__arrow reviews__arrow--right"
                type="button"
              ></button>
              <div className="reviews__bullets"></div>
            </div>
          </div>
        </section>
        <section
          data-watch="navigator"
          data-watch-threshold="0.3"
          className="blog"
        >
          <div className="blog__container">
            <div className="blog__block-header block-header block-header--center">
              <h2 className="block-header__title">
                Explore Insights in Our Blog
              </h2>
              <div className="block-header__text">
                <p>
                  Find lots of insights and information on our blog. Explore,
                  learn, and get inspired today.
                </p>
              </div>
            </div>
            <div className="blog__items"></div>
            <button hidden className="blog__view-more" type="button">
              View More
            </button>
          </div>
        </section>
        <section data-watch className="questions">
          <div className="questions__container">
            <div className="questions__block-header block-header">
              <h2 className="block-header__title">
                Frequently Asked Questions
              </h2>
              <div className="block-header__text">
                <p>
                  Still need help? <a href="#">Get Help Now</a>
                </p>
              </div>
            </div>
            <div
              data-spollers
              data-one-spoller
              className="questions__spollers spollers-questions"
            >
              <details data-open className="spollers-questions__item">
                <summary className="spollers-questions__title">
                  What is HomePro?
                </summary>
                <div className="spollers-questions__body">
                  HomePro is a home care platform that connects homeowners with
                  professional service providers offering a wide range of home
                  services, including repairs, maintenance, cleaning, and more.
                </div>
              </details>
              <details className="spollers-questions__item">
                <summary className="spollers-questions__title">
                  Are the service providers on HomePro reliable and qualified?
                </summary>
                <div className="spollers-questions__body">
                  HomePro is a home care platform that connects homeowners with
                  professional service providers offering a wide range of home
                  services, including repairs, maintenance, cleaning, and more.
                </div>
              </details>
              <details className="spollers-questions__item">
                <summary className="spollers-questions__title">
                  What if I have an issue or complaint about a service provider?
                </summary>
                <div className="spollers-questions__body">
                  HomePro is a home care platform that connects homeowners with
                  professional service providers offering a wide range of home
                  services, including repairs, maintenance, cleaning, and more.
                </div>
              </details>
              <details className="spollers-questions__item">
                <summary className="spollers-questions__title">
                  How are payments handled on HomePro?
                </summary>
                <div className="spollers-questions__body">
                  HomePro is a home care platform that connects homeowners with
                  professional service providers offering a wide range of home
                  services, including repairs, maintenance, cleaning, and more.
                </div>
              </details>
              <details className="spollers-questions__item">
                <summary className="spollers-questions__title">
                  How do I leave a review for a service provider?
                </summary>
                <div className="spollers-questions__body">
                  HomePro is a home care platform that connects homeowners with
                  professional service providers offering a wide range of home
                  services, including repairs, maintenance, cleaning, and more.
                </div>
              </details>
            </div>
          </div>
        </section>
        <section data-watch className="talk">
          <div className="talk__container">
            <div className="talk__content">
              <div className="talk__block-header block-header">
                <h1 className="block-header__title block-header__title--white block-header__title--big">
                  Already to improve or repair your home? Let’s Talk!
                </h1>
              </div>
              <ul className="talk__done done">
                <li className="done__item">Free Quotes</li>
                <li className="done__item">100% Commitment-Free</li>
              </ul>
              <a href="#" className="hero__button button button--icon">
                <span>Call Us Now</span>
              </a>
            </div>
          </div>
          <div className="talk__image">
            <picture>
              <source srcSet="img/talk/image.webp" type="image/webp" />
              <img src="img/talk/image.png" alt="Image" />
            </picture>
          </div>
        </section>
      </main>
      <footer data-watch="navigator" className="footer">
        <div className="footer__container">
          <div className="footer__content">
            <div className="footer__subscribe subscribe">
              <div className="subscribe__body">
                <h3 className="subscribe__title">
                  Stay Connected with Our Newsletter
                </h3>
                <div className="subscribe__text text">
                  <p>
                    Subscribe to our newsletter to get more news, promo, or news
                    services
                  </p>
                </div>
              </div>
              <form action="#" className="subscribe__form">
                <input
                  data-required="email"
                  autoComplete="off"
                  type="text"
                  name="form[]"
                  data-error="Error"
                  placeholder="Enter email address"
                  className="subscribe__input input"
                />
                <button
                  type="submit"
                  className="subscribe__button button button--min"
                >
                  Subscribe
                </button>
              </form>
            </div>
            <div className="footer__body">
              <div className="footer__info">
                <div className="footer__logo">
                  <img src="img/logo-white.svg" alt="Logo" />
                </div>
                <div className="footer__text text">
                  <p>
                    Home Pro is your premier destination for top-notch smart
                    home service and re-pair.
                  </p>
                </div>
                <ul className="footer__social social">
                  <li className="social__item">
                    <a href="#" className="social__link">
                      <img src="img/icons/social/youtube.svg" alt="Yt" />
                    </a>
                  </li>
                  <li className="social__item">
                    <a href="#" className="social__link">
                      <img src="img/icons/social/instagram.svg" alt="Inst" />
                    </a>
                  </li>
                  <li className="social__item">
                    <a href="#" className="social__link">
                      <img src="img/icons/social/facebook.svg" alt="Fb" />
                    </a>
                  </li>
                  <li className="social__item">
                    <a href="#" className="social__link">
                      <img src="img/icons/social/twitter.svg" alt="X" />
                    </a>
                  </li>
                  <li className="social__item">
                    <a href="#" className="social__link">
                      <img src="img/icons/social/mail.svg" alt="Mail" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer__menu menu-footer">
                <div data-spollers="479" className="menu-footer__spollers">
                  <details className="menu-footer__block">
                    <summary className="menu-footer__title">Company</summary>
                    <ul className="menu-footer__list">
                      <li className="menu-footer__item">
                        <a href="#" className="menu-footer__link">
                          About us
                        </a>
                      </li>
                      <li className="menu-footer__item">
                        <a href="#" className="menu-footer__link">
                          Services
                        </a>
                      </li>
                      <li className="menu-footer__item">
                        <a href="#" className="menu-footer__link">
                          Our Blog
                        </a>
                      </li>
                      <li className="menu-footer__item">
                        <a href="#" className="menu-footer__link">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </details>
                  <details className="menu-footer__block">
                    <summary className="menu-footer__title">Legal</summary>
                    <ul className="menu-footer__list">
                      <li className="menu-footer__item">
                        <a href="#" className="menu-footer__link">
                          Terms
                        </a>
                      </li>
                      <li className="menu-footer__item">
                        <a href="#" className="menu-footer__link">
                          Privacy
                        </a>
                      </li>
                      <li className="menu-footer__item">
                        <a href="#" className="menu-footer__link">
                          Cookies
                        </a>
                      </li>
                      <li className="menu-footer__item">
                        <a href="#" className="menu-footer__link">
                          License
                        </a>
                      </li>
                    </ul>
                  </details>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__copy">
            ©2023 HomePro . All rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
}
