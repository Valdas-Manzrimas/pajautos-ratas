import React from 'react';
import videobg from '../videos/landing_video.mp4';

const Home = ({ handleNavClick }) => {
  return (
    <section id='home'>
      <div className='hero-wrap'>
        <div className='hero-mask opacity-4 bg-dark' />

        {/* ---------------image background------------------ */}
        {/* <div
          className="hero-bg parallax"
          style={{ backgroundImage: 'url("images/intro-bg.jpg")' }}
        ></div> */}

        {/* -------------------video background---------------------- */}

        <div className='player hero-bg parallax'>
          <video
            src={videobg}
            autoPlay
            muted
            loop
            style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
          ></video>
        </div>

        <div className='hero-content container d-flex'>
          <div className='container my-auto'>
            <div className='row'>
              <div className={'col-12 text-center '}>
                {/* <p className='text-7 fw-500 text-white mb-2 mb-md-3'>
                  Kviečiame jus į
                </p> */}
                <p className='text-5 text-light mb-2'>
                  12-kos gyvų susitikimų ciklą Vilniuje, nuo rugsėjo 19 d.
                </p>
                <h2 className='text-16 fw-600 text-white mb-2 mb-md-3'>
                  "Pajautos ratas"
                </h2>
                {/* <a
                  href='#contact'
                  className='btn btn-outline-primary rounded-pill shadow-none smooth-scroll mt-2'
                  onClick={(e) => {
                    e.preventDefault();
                    l
                    
                    ('contact');
                  }}
                >
                  Hire Me
                </a> */}
              </div>
            </div>
          </div>
          <a
            href='#services'
            className='scroll-down-arrow text-white smooth-scroll'
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('services');
            }}
          >
            <span className='animated'>
              <i className='fa fa-chevron-down' />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
